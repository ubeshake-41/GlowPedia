// Starter routines data

export interface RoutineStep {
  id: string;
  label: string;
  productSlug?: string; // Optional link to product wiki
  description: string;
}

export interface Routine {
  id: string;
  title: string;
  description: string;
  timeOfDay: 'morning' | 'night' | 'both';
  bestFor: string[];
  steps: RoutineStep[];
  skinTypeNotes?: {
    dry?: string;
    oily?: string;
    combination?: string;
    sensitive?: string;
  };
}

export const starterRoutines: Routine[] = [
  {
    id: 'morning-routine',
    title: 'Morning Routine',
    description: 'Start your day fresh! This simple routine protects your skin and preps it for the day ahead.',
    timeOfDay: 'morning',
    bestFor: ['All skin types', 'Beginners', 'Quick routine'],
    steps: [
      {
        id: 'am-cleanse',
        label: 'Cleanse',
        productSlug: 'cleanser',
        description: 'Wash away overnight oil and prep skin for products. Use lukewarm water!'
      },
      {
        id: 'am-toner',
        label: 'Toner (Optional)',
        productSlug: 'toner',
        description: 'Balance your skin\'s pH and prep for better absorption.'
      },
      {
        id: 'am-serum',
        label: 'Serum (Optional)',
        productSlug: 'serum',
        description: 'Apply vitamin C for brightness or niacinamide for oil control.'
      },
      {
        id: 'am-moisturizer',
        label: 'Moisturize',
        productSlug: 'moisturiser',
        description: 'Lock in hydration. Even oily skin needs this!'
      },
      {
        id: 'am-sunscreen',
        label: 'Sunscreen',
        productSlug: 'sunscreen',
        description: 'THE most important step! Apply SPF 30+ every single day.'
      }
    ],
    skinTypeNotes: {
      dry: 'Use a creamy cleanser and rich moisturizer. Consider adding a hydrating serum.',
      oily: 'Use a gel cleanser and lightweight moisturizer. Don\'t skip moisturizer - it helps control oil!',
      combination: 'Use balanced products. You can apply lighter moisturizer on your T-zone.',
      sensitive: 'Stick to fragrance-free products. Patch test new items first!'
    }
  },
  {
    id: 'night-routine',
    title: 'Night Routine',
    description: 'Let your skin repair while you sleep! This routine removes the day and treats your concerns.',
    timeOfDay: 'night',
    bestFor: ['All skin types', 'Repair and treatment', 'Deep cleansing'],
    steps: [
      {
        id: 'pm-double-cleanse-1',
        label: 'First Cleanse (if wearing makeup/sunscreen)',
        productSlug: 'cleanser',
        description: 'Use an oil-based cleanser or micellar water to remove makeup and sunscreen.'
      },
      {
        id: 'pm-double-cleanse-2',
        label: 'Second Cleanse',
        productSlug: 'cleanser',
        description: 'Use your regular cleanser to remove any remaining dirt and oil.'
      },
      {
        id: 'pm-toner',
        label: 'Toner',
        productSlug: 'toner',
        description: 'Prep your skin to absorb treatments better.'
      },
      {
        id: 'pm-treatment',
        label: 'Treatment (Optional)',
        productSlug: 'serum',
        description: 'Apply targeted treatments like retinol, niacinamide, or acne treatments.'
      },
      {
        id: 'pm-moisturizer',
        label: 'Moisturize',
        productSlug: 'moisturiser',
        description: 'Seal everything in with a good moisturizer. Can use a richer one at night!'
      }
    ],
    skinTypeNotes: {
      dry: 'Consider adding a facial oil as the last step. Apply moisturizer on damp skin.',
      oily: 'Don\'t skip moisturizer! Your skin needs hydration even if it\'s oily.',
      combination: 'You can use different moisturizers on different areas of your face.',
      sensitive: 'Introduce new treatments slowly. Start with 2-3 times per week.'
    }
  },
  {
    id: 'acne-routine',
    title: 'Acne-Fighting Routine',
    description: 'Target breakouts without irritation. Be patient - clear skin takes time!',
    timeOfDay: 'both',
    bestFor: ['Acne-prone skin', 'Oily skin', 'Teens with breakouts'],
    steps: [
      {
        id: 'acne-cleanse',
        label: 'Gentle Cleanser',
        productSlug: 'cleanser',
        description: 'Use a gentle, non-stripping cleanser. Don\'t over-wash - it makes acne worse!'
      },
      {
        id: 'acne-toner',
        label: 'BHA Toner (PM only)',
        productSlug: 'toner',
        description: 'Use salicylic acid to unclog pores. Start 2-3x per week, then increase.'
      },
      {
        id: 'acne-treatment',
        label: 'Spot Treatment',
        description: 'Apply benzoyl peroxide or salicylic acid to active breakouts only.'
      },
      {
        id: 'acne-moisturizer',
        label: 'Oil-Free Moisturizer',
        productSlug: 'moisturiser',
        description: 'Yes, even acne-prone skin needs moisture! Use a lightweight gel formula.'
      },
      {
        id: 'acne-sunscreen',
        label: 'Sunscreen (AM only)',
        productSlug: 'sunscreen',
        description: 'Essential! Acne treatments make skin sun-sensitive. Use oil-free SPF.'
      }
    ],
    skinTypeNotes: {
      dry: 'If you have dry skin with occasional breakouts, use hydrating products and spot-treat acne.',
      oily: 'Don\'t over-dry your skin! This triggers more oil production. Balance is key.',
      combination: 'Focus acne treatments on your T-zone. Keep cheeks hydrated.',
      sensitive: 'Start with lower concentrations of actives. Patch test everything!'
    }
  }
];

export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive' | null;
