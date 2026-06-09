  import { createContext, useContext, useState, useEffect } from 'react';
  import type { ReactNode } from 'react';
  import { useAuth } from '../contexts/AuthContext';
  import { supabase } from '../lib/supabase';

interface SavedProductsContextType {
  savedProducts: string[];
  addSavedProduct: (productId: string) => Promise<void>;
  removeSavedProduct: (productId: string) => Promise<void>;
  isProductSaved: (productId: string) => boolean;
  toggleSavedProduct: (productId: string) => Promise<void>;
}

const SavedProductsContext = createContext<SavedProductsContextType | undefined>(undefined);

export function SavedProductsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [savedProducts, setSavedProducts] = useState<string[]>([]);

  // Load saved products from Supabase when user changes
  useEffect(() => {
    if (!user?.id) return;
    
    const loadSavedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('saved_products')
          .select('product_id')
          .eq('user_id', user.id);
        
        if (error) {
          console.error('Error loading saved products:', error);
          // Fallback to localStorage if Supabase fails
          const savedProductsData = localStorage.getItem(`saved_products_${user.id}`);
          if (savedProductsData) {
            setSavedProducts(JSON.parse(savedProductsData));
          } else {
            setSavedProducts([]);
          }
        } else {
          const productIds = data.map((item: { product_id: string }) => item.product_id);
          setSavedProducts(productIds);
        }
      } catch (error) {
        console.error('Unexpected error loading saved products:', error);
        // Fallback to localStorage if error occurs
        const savedProductsData = localStorage.getItem(`saved_products_${user.id}`);
        if (savedProductsData) {
          setSavedProducts(JSON.parse(savedProductsData));
        } else {
          setSavedProducts([]);
        }
      }
    };
    
    loadSavedProducts();
  }, [user]);

  const addSavedProduct = async (productId: string) => {
    if (user?.id) {
      // Try to save to Supabase as well
      try {
        const { error } = await supabase
          .from('saved_products')
          .insert([{ 
            user_id: user.id,
            product_id: productId
          }]);
        
        if (error) {
          console.error('Error saving product to Supabase:', error);
        }
      } catch (error) {
        console.error('Unexpected error saving product to Supabase:', error);
      }
    }
    
    setSavedProducts(prev => {
      const newSaved = [...prev, productId];
      if (user?.id) {
        localStorage.setItem(`saved_products_${user.id}`, JSON.stringify(newSaved));
      }
      return newSaved;
    });
  };

  const removeSavedProduct = async (productId: string) => {
    if (user?.id) {
      // Try to remove from Supabase as well
      try {
        const { error } = await supabase
          .from('saved_products')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId);
        
        if (error) {
          console.error('Error removing product from Supabase:', error);
        }
      } catch (error) {
        console.error('Unexpected error removing product from Supabase:', error);
      }
    }
    
    setSavedProducts(prev => {
      const newSaved = prev.filter(id => id !== productId);
      if (user?.id) {
        localStorage.setItem(`saved_products_${user.id}`, JSON.stringify(newSaved));
      }
      return newSaved;
    });
  };

  const toggleSavedProduct = async (productId: string) => {
    if (isProductSaved(productId)) {
      await removeSavedProduct(productId);
    } else {
      await addSavedProduct(productId);
    }
  };

  const isProductSaved = (productId: string) => {
    return savedProducts.includes(productId);
  };

  const value = {
    savedProducts,
    addSavedProduct,
    removeSavedProduct,
    isProductSaved,
    toggleSavedProduct
  };

  return (
    <SavedProductsContext.Provider value={value}>
      {children}
    </SavedProductsContext.Provider>
  );
}

export function useSavedProducts() {
  const context = useContext(SavedProductsContext);
  if (context === undefined) {
    throw new Error('useSavedProducts must be used within a SavedProductsProvider');
  }
  return context;
}