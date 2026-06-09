import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { products } from '../data/products';
import { discoverItems } from '../data/trending';
import type { DiscoverItem } from '../data/trending';
import TrendingModal from '../components/TrendingModal';
import styles from './Homepage.module.css';

// Array of daily tips that rotate based on the date
const DAILY_TIPS = [
  "Always apply sunscreen as the last step of your morning routine!",
  "Patch test new products behind your ear before applying to your face.",
  "Double cleanse at night to remove makeup, SPF, and impurities.",
  "Apply serums to damp skin to boost hydration and absorption.",
  "Wait 1 minute between applying skincare products for better absorption.",
  "Store your skincare in a cool, dry place to preserve effectiveness.",
  "Start with gentle products if you have sensitive skin.",
  "Don't forget to care for the skin on your neck and chest!",
  "Exfoliate 1-2 times per week, not daily, to avoid irritation.",
  "Hydrated skin is healthy skin - drink plenty of water throughout the day.",
  "Remove your makeup before your skincare routine, not after.",
  "Introduce one new product at a time to identify what works for you.",
  "Retinoids should only be used at night and with sunscreen during the day.",
  "The skin around your eyes is delicate - use a gentle eye cream."
];

export default function Homepage() {
  const { user } = useAuth(); // Get user from auth context
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDiscover, setSelectedDiscover] = useState<DiscoverItem | null>(null);
  const [showDailyTip, setShowDailyTip] = useState(true);
  
  // Determine if user is Pro to show personalized tips
  const isPro = user?.user_metadata?.role === 'pro';

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Comparison pages data
  const comparisons = [
    { title: 'Serum vs Toner', slug: 'serum-vs-toner' },
    { title: 'Lip Gloss vs Lip Balm', slug: 'lip-gloss-vs-lip-balm' },
    { title: 'Liquid vs Powder Foundation', slug: 'liquid-vs-powder-foundation' }
  ];

  // Function to get today's daily tip based on date and user skin type
  const getTodaysTip = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // If user is Pro and has skin type, provide personalized tips
    if (isPro && user?.user_metadata?.skin_type) {
      const skinType = user.user_metadata.skin_type;
      const personalizedTips: Record<string, string[]> = {
        'oily': [
          "For oily skin: Use a gentle, non-comedogenic cleanser and oil-free moisturizer.",
          "Oily skin types benefit from BHA (salicylic acid) exfoliation to unclog pores.",
          "Look for products with niacinamide to help control oil production.",
          "Even oily skin needs hydration - choose lightweight, water-based formulas."
        ],
        'dry': [
          "For dry skin: Apply moisturizer to slightly damp skin to lock in hydration.",
          "Use creamy cleansers instead of foaming ones to avoid further drying.",
          "Incorporate facial oils or richer moisturizers during colder months.",
          "Look for products with ceramides, hyaluronic acid, and glycerin."
        ],
        'combination': [
          "For combination skin: Use different products for different areas of your face.",
          "Focus lighter products on oily zones and richer formulas on dry patches.",
          "A balanced routine with gentle products works best for combination skin.",
          "Pay attention to seasonal changes that can alter your skin's needs."
        ],
        'sensitive': [
          "For sensitive skin: Stick to fragrance-free products with minimal ingredients.",
          "Patch test all new products before incorporating them into your routine.",
          "Avoid harsh exfoliants and stick to gentle, soothing ingredients.",
          "Introduce new products slowly, one at a time, to monitor reactions."
        ]
      };
      
      const tips = personalizedTips[skinType] || DAILY_TIPS;
      const tipIndex = dayOfYear % tips.length;
      return tips[tipIndex];
    } else {
      // For free users or users without skin type, use generic tips
      const tipIndex = dayOfYear % DAILY_TIPS.length;
      return DAILY_TIPS[tipIndex];
    }
  };

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to <em>Glowpedia</em></h1>
          <p className={styles.subtitle}>Your interactive skincare and cosmetics guide</p>
          
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="What do you want to learn about?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && (
              <div className={styles.searchDropdown}>
                {searchQuery === '' ? (
                  <>
                    <div className={styles.searchCategory}>
                      <div className={styles.categoryLabel}>SKINCARE</div>
                      {products.filter(p => p.category === 'skincare').map(product => (
                        <Link
                          key={product.slug}
                          to={`/product/${product.slug}`}
                          className={styles.searchItem}
                        >
                          <div className={styles.searchIcon} style={{ background: 'var(--color-accent-subtle)' }}>
                            <svg width="20" height="20" viewBox="0 0 256 256" fill="var(--color-accent)">
                              <path d="M216,88H168V40a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V88H40a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V168h48a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM152,208H104V160a8,8,0,0,0-8-8H48V104H96a8,8,0,0,0,8-8V48h48V96a8,8,0,0,0,8,8h48v48H160a8,8,0,0,0-8,8Z" opacity="0.2"/>
                              <path d="M216,80H176V40a16,16,0,0,0-16-16H96A16,16,0,0,0,80,40V80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H80v40a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V176h40a16,16,0,0,0,16-16V96A16,16,0,0,0,216,80ZM160,160v56H96V160H40V96H96V40h64V96h56v64Z"/>
                            </svg>
                          </div>
                          <span>{product.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className={styles.searchCategory}>
                      <div className={styles.categoryLabel}>COSMETICS</div>
                      {products.filter(p => p.category === 'cosmetics').map(product => (
                        <Link
                          key={product.slug}
                          to={`/product/${product.slug}`}
                          className={styles.searchItem}
                        >
                          <div className={styles.searchIcon} style={{ background: 'var(--color-lavender-light)' }}>
                            <svg width="20" height="20" viewBox="0 0 256 256" fill="var(--color-lavender)">
                              <path d="M140.18,75.82l-48,48a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L84,98.34l39.51-39.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" opacity="0.2"/>
                              <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
                            </svg>
                          </div>
                          <span>{product.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className={styles.searchCategory}>
                      <div className={styles.categoryLabel}>COMPARE</div>
                      {comparisons.map(comp => (
                        <Link
                          key={comp.slug}
                          to={`/compare/${comp.slug}`}
                          className={styles.searchItem}
                        >
                          <div className={styles.searchIcon} style={{ background: 'var(--color-mint-light)' }}>
                            <svg width="20" height="20" viewBox="0 0 256 256" fill="var(--color-success)">
                              <path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM128,152a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v32A8,8,0,0,1,128,152Zm0-64a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v0A8,8,0,0,1,128,88Z" opacity="0.2"/>
                              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM96,112a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,112Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,144Z"/>
                            </svg>
                          </div>
                          <span>{comp.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className={styles.searchCategory}>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Link
                          key={product.slug}
                          to={`/product/${product.slug}`}
                          className={styles.searchItem}
                        >
                          <div className={styles.searchIcon} style={{ 
                            background: product.category === 'skincare' ? 'var(--color-accent-subtle)' : 'var(--color-lavender-light)' 
                          }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                            </svg>
                          </div>
                          <span>{product.name}</span>
                        </Link>
                      ))
                    ) : (
                      <div className={styles.emptyState}>
                        <p>We couldn't find that product yet.</p>
                        <p className={styles.emptyHint}>Try browsing the categories above or take the Skin Type Quiz!</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Secondary CTA */}
          <Link to="/quizzes" className={styles.secondaryCta}>
            Take a Quiz
          </Link>
        </div>
      </div>

       {/* Daily Tip Popup */}
       {showDailyTip && (
         <div className={styles.dailyTipPopup}>
           <div className={styles.dailyTipContent}>
             <div className={styles.tipHeader}>
               <div className={styles.tipIcon}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <circle cx="12" cy="12" r="5"/>
                   <line x1="12" y1="1" x2="12" y2="3"/>
                   <line x1="12" y1="21" x2="12" y2="23"/>
                   <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                   <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                   <line x1="1" y1="12" x2="3" y2="12"/>
                   <line x1="21" y1="12" x2="23" y2="12"/>
                   <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                   <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                 </svg>
               </div>
               <h3>Daily Tip</h3>
               <button 
                 className={styles.closeButton}
                 onClick={() => setShowDailyTip(false)}
                 aria-label="Close tip"
               >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <line x1="18" y1="6" x2="6" y2="18"/>
                   <line x1="6" y1="6" x2="18" y2="18"/>
                 </svg>
               </button>
             </div>
             <p>{getTodaysTip()}</p>
             <button 
               className={styles.gotItButton}
               onClick={() => setShowDailyTip(false)}
             >
               Got it!
             </button>
           </div>
         </div>
       )}

      {/* Main Content */}
      <div className={styles.content}>
        {/* Start Here Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>START HERE</h2>
          <div className={styles.startHereGrid}>
            {[
              { name: 'Toner', slug: 'toner', color: 'var(--color-mint)' },
              { name: 'Serum', slug: 'serum', color: 'var(--color-accent)' },
              { name: 'Foundation', slug: 'foundation', color: 'var(--color-yellow)' },
              { name: 'Lip Products', slug: 'lip-gloss', color: 'var(--color-lavender)' }
            ].map(item => (
              <Link
                key={item.slug}
                to={`/product/${item.slug}`}
                className={styles.startCard}
                style={{ borderLeftColor: item.color }}
              >
                <h3>{item.name}</h3>
                <div className={styles.cardCta}>
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Compare & Learn Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>COMPARE & LEARN</h2>
          <div className={styles.compareList}>
            {comparisons.map(comp => (
              <Link
                key={comp.slug}
                to={`/compare/${comp.slug}`}
                className={styles.compareItem}
              >
                <span className={styles.compareTitle}>{comp.title}</span>
                <span className={styles.vsPill}>VS</span>
                <div className={styles.cardCta}>
                  Compare now →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Discover Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionLabel}>DISCOVER MORE</h2>
              <p className={styles.sectionSubtitle}>Brands, tools, and guides from around the beauty world</p>
            </div>
            <span className={styles.updateNote}>Updated monthly</span>
          </div>
          <div className={styles.trendingScroll}>
            {discoverItems.map((item: DiscoverItem) => (
              <button
                key={item.id}
                onClick={() => setSelectedDiscover(item)}
                className={styles.trendingCard}
              >
                <div className={styles.trendingBadge}>{item.badge}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.trendingStrip} style={{
                  background: item.type === 'brand' 
                    ? 'linear-gradient(90deg, var(--color-lavender), #E0B3FF)' 
                    : item.type === 'guide'
                    ? 'linear-gradient(90deg, var(--color-mint), var(--color-success))'
                    : 'linear-gradient(90deg, var(--color-accent), #8B73E0)'
                }} />
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Discover Modal */}
      {selectedDiscover && (
        <TrendingModal 
          item={selectedDiscover} 
          onClose={() => setSelectedDiscover(null)} 
        />
      )}
    </div>
  );
}