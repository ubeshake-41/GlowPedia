// Quiz data for free and pro quizzes

export interface QuizQuestion {
  question: string;
  options: string[];
}

export interface QuizResult {
  type: string;
  title: string;
  description: string;
  routineImpact?: string; // How this affects your routine
  lookFor?: string[]; // Ingredients/products to seek out
  avoid?: string[]; // Ingredients/products to avoid
  recommendations: {
    productSlug: string;
    reason: string;
  }[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  type: 'free' | 'pro';
  questions: QuizQuestion[];
  resultLogic: (answers: number[]) => QuizResult;
}

// Skin Type Detector Quiz
export const skinTypeQuiz: Quiz = {
  id: 'skin-type-detector',
  title: 'Skin Type Detector',
  description: 'Find out your skin type in just a few questions!',
  type: 'free',
  questions: [
    {
      question: 'How does your skin feel a few hours after washing your face?',
      options: [
        'Tight and uncomfortable',
        'Comfortable and balanced',
        'Shiny, especially on my T-zone',
        'Oily all over'
      ]
    },
    {
      question: 'How often do you experience breakouts?',
      options: [
        'Rarely or never',
        'Occasionally',
        'Frequently on my T-zone',
        'Very frequently all over'
      ]
    },
    {
      question: 'How does your skin react to new products?',
      options: [
        'Gets irritated or red easily',
        'Usually fine, no issues',
        'Sometimes breaks out',
        'Rarely has problems'
      ]
    },
    {
      question: 'What are your main skin concerns?',
      options: [
        'Flakiness and tightness',
        'Redness and sensitivity',
        'Shine and occasional breakouts',
        'Oiliness and frequent breakouts'
      ]
    }
  ],
  resultLogic: (answers: number[]) => {
    // Simple scoring: count answer patterns
    const dryScore = answers.filter(a => a === 0).length;
    const oilyScore = answers.filter(a => a === 3).length;
    const comboScore = answers.filter(a => a === 2).length;

    if (dryScore >= 2 || (answers[0] === 0 && answers[3] === 0)) {
      return {
        type: 'dry',
        title: 'Dry Skin',
        description: 'Your skin tends to feel tight and may experience flakiness. You need extra hydration and gentle, nourishing products.',
        routineImpact: 'Focus on layering hydrating products and avoid over-cleansing. Use gentle, creamy cleansers and apply moisturizer while skin is still damp to lock in moisture. Consider adding a facial oil as the last step at night.',
        lookFor: ['Hyaluronic acid', 'Ceramides', 'Glycerin', 'Squalane', 'Shea butter', 'Niacinamide'],
        avoid: ['Alcohol-based products', 'Harsh sulfates', 'Strong exfoliants', 'Fragrances', 'Clay masks'],
        recommendations: [
          { productSlug: 'moisturiser', reason: 'Locks in hydration and prevents moisture loss' },
          { productSlug: 'serum', reason: 'Delivers concentrated hydration deep into skin' },
          { productSlug: 'sunscreen', reason: 'Protects without drying out your skin' }
        ]
      };
    } else if (oilyScore >= 2 || (answers[0] === 3 && answers[1] === 3)) {
      return {
        type: 'oily',
        title: 'Oily Skin',
        description: 'Your skin produces excess oil, especially in the T-zone. You need lightweight, oil-controlling products that won\'t clog pores.',
        routineImpact: 'Use gel-based or lightweight products that won\'t add extra oil. Don\'t skip moisturizer - dehydrated skin can actually produce more oil! Exfoliate 2-3 times per week to prevent clogged pores.',
        lookFor: ['Salicylic acid', 'Niacinamide', 'Tea tree oil', 'Witch hazel', 'Clay (for masks)', 'Oil-free formulas'],
        avoid: ['Heavy creams', 'Coconut oil', 'Thick balms', 'Pore-clogging ingredients', 'Over-washing (strips skin)'],
        recommendations: [
          { productSlug: 'cleanser', reason: 'Removes excess oil without stripping skin' },
          { productSlug: 'toner', reason: 'Balances oil production and tightens pores' },
          { productSlug: 'sunscreen', reason: 'Lightweight protection that won\'t feel greasy' }
        ]
      };
    } else if (comboScore >= 2 || (answers[0] === 2 && answers[1] === 2)) {
      return {
        type: 'combination',
        title: 'Combination Skin',
        description: 'Your T-zone is oily while your cheeks are normal or dry. You need balanced products that address both concerns.',
        routineImpact: 'You can use different products on different areas! Apply lightweight gel moisturizer on your T-zone and richer cream on dry areas. Balance is key - don\'t over-treat the oily zones or neglect the dry ones.',
        lookFor: ['Niacinamide', 'Hyaluronic acid', 'Light gel moisturizers', 'Balancing toners', 'Gentle exfoliants'],
        avoid: ['One-size-fits-all heavy products', 'Harsh astringents', 'Over-exfoliating', 'Skipping moisturizer on oily areas'],
        recommendations: [
          { productSlug: 'toner', reason: 'Balances different areas of your face' },
          { productSlug: 'moisturiser', reason: 'Hydrates without adding excess oil' },
          { productSlug: 'serum', reason: 'Targets specific concerns in different zones' }
        ]
      };
    } else {
      // Default to sensitive or normal skin
      return {
        type: 'sensitive',
        title: 'Sensitive Skin',
        description: 'Your skin reacts easily to products and environmental factors. You need gentle, fragrance-free products with minimal ingredients.',
        routineImpact: 'Keep it simple! Introduce new products one at a time and patch test first. Stick to gentle, fragrance-free formulas. Your routine should focus on protecting and soothing rather than aggressive treatments.',
        lookFor: ['Centella asiatica', 'Ceramides', 'Colloidal oatmeal', 'Aloe vera', 'Mineral sunscreen', 'Fragrance-free products'],
        avoid: ['Fragrances', 'Essential oils', 'Alcohol', 'Harsh acids', 'Physical scrubs', 'Hot water'],
        recommendations: [
          { productSlug: 'cleanser', reason: 'Gentle cleansing without irritation' },
          { productSlug: 'moisturiser', reason: 'Soothes and protects sensitive skin' },
          { productSlug: 'sunscreen', reason: 'Mineral-based protection for sensitive skin' }
        ]
      };
    }
  }
};

// Beginner Routine Quiz
export const beginnerRoutineQuiz: Quiz = {
  id: 'beginner-routine',
  title: 'Beginner Routine Builder',
  description: 'Not sure where to start? Let\'s build your first skincare routine!',
  type: 'free',
  questions: [
    {
      question: 'What\'s your main skincare goal right now?',
      options: [
        'Clear up breakouts',
        'Hydrate dry skin',
        'Protect from sun damage',
        'Just want a simple routine'
      ]
    },
    {
      question: 'How much time can you dedicate to skincare daily?',
      options: [
        '5 minutes or less',
        '5-10 minutes',
        '10-15 minutes',
        'As long as it takes!'
      ]
    },
    {
      question: 'Do you currently use any skincare products?',
      options: [
        'Nothing at all',
        'Just face wash',
        'Face wash and moisturizer',
        'Several products already'
      ]
    }
  ],
  resultLogic: (answers: number[]) => {
    const goal = answers[0];
    const time = answers[1];

    if (goal === 0) {
      // Acne-focused
      return {
        type: 'acne-routine',
        title: 'Acne-Fighting Routine',
        description: 'A simple routine to help clear breakouts and prevent new ones. Start with these basics and be patient - skin takes time to improve!',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Removes dirt and oil that cause breakouts' },
          { productSlug: 'toner', reason: 'Balances skin and prevents excess oil' },
          { productSlug: 'moisturiser', reason: 'Keeps skin hydrated without clogging pores' }
        ]
      };
    } else if (goal === 1) {
      // Hydration-focused
      return {
        type: 'hydration-routine',
        title: 'Hydration Boost Routine',
        description: 'Give your dry skin the moisture it craves! These products work together to lock in hydration all day long.',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Gentle cleansing that doesn\'t strip moisture' },
          { productSlug: 'serum', reason: 'Deep hydration that penetrates skin layers' },
          { productSlug: 'moisturiser', reason: 'Seals in moisture and prevents water loss' }
        ]
      };
    } else if (goal === 2 || time === 0) {
      // Sun protection or minimal routine
      return {
        type: 'essential-routine',
        title: 'Essential 3-Step Routine',
        description: 'The absolute basics everyone needs! This simple routine protects and maintains healthy skin.',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Clean skin is healthy skin' },
          { productSlug: 'moisturiser', reason: 'Keeps your skin barrier strong' },
          { productSlug: 'sunscreen', reason: 'The #1 anti-aging and protection step' }
        ]
      };
    } else {
      // Comprehensive routine
      return {
        type: 'complete-routine',
        title: 'Complete Beginner Routine',
        description: 'Ready to level up? This routine covers all the basics and sets you up for great skin!',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Foundation of any good routine' },
          { productSlug: 'toner', reason: 'Preps skin to absorb other products' },
          { productSlug: 'serum', reason: 'Targeted treatment for your concerns' },
          { productSlug: 'moisturiser', reason: 'Locks everything in' }
        ]
      };
    }
  }
};

// Pro Quizzes

// Beauty Style Quiz
export const beautyStyleQuiz: Quiz = {
  id: 'beauty-style',
  title: 'Beauty Style Quiz',
  description: 'Discover your unique beauty aesthetic and get personalized product recommendations',
  type: 'pro',
  questions: [
    {
      question: 'How would you describe your ideal makeup look?',
      options: [
        'Natural and barely-there',
        'Polished and professional',
        'Bold and statement-making',
        'Creative and experimental'
      ]
    },
    {
      question: 'What\'s your approach to skincare?',
      options: [
        'Minimal - just the basics',
        'Consistent routine with proven products',
        'Always trying new trends',
        'Customized based on my skin\'s needs'
      ]
    },
    {
      question: 'Which best describes your beauty inspiration?',
      options: [
        'Fresh-faced and effortless',
        'Classic and timeless',
        'Editorial and high-fashion',
        'Unique and personal'
      ]
    }
  ],
  resultLogic: (answers: number[]) => {
    const naturalScore = answers.filter(a => a === 0).length;
    const classicScore = answers.filter(a => a === 1).length;
    const boldScore = answers.filter(a => a === 2).length;

    if (naturalScore >= 2) {
      return {
        type: 'minimalist',
        title: 'The Minimalist',
        description: 'You love a fresh, natural look that enhances your features without overwhelming them. Your style is effortless and radiant.',
        recommendations: [
          { productSlug: 'lip-balm', reason: 'Perfect for your natural, barely-there lip look' },
          { productSlug: 'moisturiser', reason: 'Keeps your skin glowing naturally' },
          { productSlug: 'sunscreen', reason: 'Essential protection without heavy coverage' }
        ]
      };
    } else if (classicScore >= 2) {
      return {
        type: 'classic',
        title: 'The Classic',
        description: 'You appreciate timeless beauty and polished looks. Your style is sophisticated and always appropriate.',
        recommendations: [
          { productSlug: 'foundation', reason: 'Creates a flawless, polished base' },
          { productSlug: 'lip-gloss', reason: 'Adds elegant shine to complete your look' },
          { productSlug: 'serum', reason: 'Maintains your skin\'s refined appearance' }
        ]
      };
    } else if (boldScore >= 2) {
      return {
        type: 'bold',
        title: 'The Bold Innovator',
        description: 'You love making statements and aren\'t afraid to experiment. Your style is confident and eye-catching.',
        recommendations: [
          { productSlug: 'lip-gloss', reason: 'High-impact shine for bold looks' },
          { productSlug: 'foundation', reason: 'Perfect canvas for creative makeup' },
          { productSlug: 'toner', reason: 'Preps skin for layering products' }
        ]
      };
    } else {
      return {
        type: 'eclectic',
        title: 'The Eclectic Creator',
        description: 'Your style is uniquely yours, mixing elements to create something personal. You\'re creative and adaptable.',
        recommendations: [
          { productSlug: 'serum', reason: 'Versatile treatment for your custom routine' },
          { productSlug: 'moisturiser', reason: 'Adaptable hydration for any look' },
          { productSlug: 'lip-balm', reason: 'Flexible base for any lip style' }
        ]
      };
    }
  }
};

// Routine Optimizer Quiz
export const routineOptimizerQuiz: Quiz = {
  id: 'routine-optimizer',
  title: 'Routine Optimizer',
  description: 'Fine-tune your existing routine for maximum effectiveness',
  type: 'pro',
  questions: [
    {
      question: 'How long have you been following your current routine?',
      options: [
        'Less than a month',
        '1-3 months',
        '3-6 months',
        'Over 6 months'
      ]
    },
    {
      question: 'What\'s your biggest routine challenge?',
      options: [
        'Not seeing results',
        'Too time-consuming',
        'Products not working together',
        'Skin reacting negatively'
      ]
    },
    {
      question: 'When do you typically do your skincare?',
      options: [
        'Morning only',
        'Night only',
        'Both morning and night',
        'Whenever I remember'
      ]
    }
  ],
  resultLogic: (answers: number[]) => {
    const challenge = answers[1];

    if (challenge === 0) {
      return {
        type: 'results-focused',
        title: 'Results-Focused Optimization',
        description: 'Your routine needs more targeted active ingredients. Let\'s add products that deliver visible results.',
        routineImpact: 'Add a serum with active ingredients between cleansing and moisturizing. Give products at least 4-6 weeks to show results. Consider adding a toner to boost absorption.',
        recommendations: [
          { productSlug: 'serum', reason: 'Concentrated actives for visible results' },
          { productSlug: 'toner', reason: 'Enhances product absorption' },
          { productSlug: 'sunscreen', reason: 'Protects your progress' }
        ]
      };
    } else if (challenge === 1) {
      return {
        type: 'streamlined',
        title: 'Streamlined Efficiency',
        description: 'Your routine can be simplified without sacrificing effectiveness. Focus on multi-tasking products.',
        routineImpact: 'Combine steps where possible. Use a moisturizer with SPF in the morning. Choose products that address multiple concerns at once.',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Quick, effective cleansing' },
          { productSlug: 'moisturiser', reason: 'All-in-one hydration' },
          { productSlug: 'sunscreen', reason: 'Essential protection in seconds' }
        ]
      };
    } else if (challenge === 2) {
      return {
        type: 'layering-master',
        title: 'Layering Mastery',
        description: 'Learn the right order and timing to make your products work in harmony.',
        routineImpact: 'Apply products from thinnest to thickest consistency. Wait 30-60 seconds between steps. Use toner first, then serum, then moisturizer.',
        recommendations: [
          { productSlug: 'toner', reason: 'First step after cleansing' },
          { productSlug: 'serum', reason: 'Second layer for treatment' },
          { productSlug: 'moisturiser', reason: 'Final seal to lock everything in' }
        ]
      };
    } else {
      return {
        type: 'gentle-reset',
        title: 'Gentle Reset',
        description: 'Your skin needs a break. Strip back to basics and rebuild slowly with gentle products.',
        routineImpact: 'Stop all actives for 1-2 weeks. Use only gentle cleanser, moisturizer, and sunscreen. Reintroduce products one at a time after your skin calms down.',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Gentle, non-irritating cleansing' },
          { productSlug: 'moisturiser', reason: 'Soothing, barrier-repairing hydration' },
          { productSlug: 'sunscreen', reason: 'Protection without irritation' }
        ]
      };
    }
  }
};

// Ingredient Match Quiz
export const ingredientMatchQuiz: Quiz = {
  id: 'ingredient-match',
  title: 'Ingredient Match',
  description: 'Find the perfect active ingredients for your skin goals',
  type: 'pro',
  questions: [
    {
      question: 'What\'s your primary skin goal?',
      options: [
        'Anti-aging and firmness',
        'Brightening and even tone',
        'Acne and oil control',
        'Hydration and barrier repair'
      ]
    },
    {
      question: 'How sensitive is your skin?',
      options: [
        'Very sensitive - reacts easily',
        'Somewhat sensitive',
        'Normal - rarely reacts',
        'Not sensitive at all'
      ]
    },
    {
      question: 'Have you used active ingredients before?',
      options: [
        'Never',
        'Tried a few',
        'Use them regularly',
        'Advanced user'
      ]
    }
  ],
  resultLogic: (answers: number[]) => {
    const goal = answers[0];
    const sensitivity = answers[1];

    if (goal === 0) {
      return {
        type: 'anti-aging',
        title: 'Anti-Aging Powerhouses',
        description: 'Your perfect ingredients target fine lines, firmness, and skin texture.',
        lookFor: ['Retinol', 'Peptides', 'Vitamin C', 'Niacinamide', 'Hyaluronic acid', 'Ceramides'],
        avoid: ['Harsh physical exfoliants', 'Alcohol-heavy products', 'Fragrances'],
        routineImpact: sensitivity === 0 
          ? 'Start with gentle retinol alternatives like bakuchiol. Build tolerance slowly.'
          : 'Use retinol 2-3x per week at night. Always follow with moisturizer and use SPF daily.',
        recommendations: [
          { productSlug: 'serum', reason: 'Delivers concentrated anti-aging actives' },
          { productSlug: 'moisturiser', reason: 'Supports skin barrier during treatment' },
          { productSlug: 'sunscreen', reason: 'Critical for preventing further aging' }
        ]
      };
    } else if (goal === 1) {
      return {
        type: 'brightening',
        title: 'Brightening Champions',
        description: 'These ingredients will help fade dark spots and create an even, radiant complexion.',
        lookFor: ['Vitamin C', 'Niacinamide', 'Alpha arbutin', 'Kojic acid', 'Licorice root', 'Tranexamic acid'],
        avoid: ['Harsh scrubs', 'Lemon juice', 'DIY treatments'],
        routineImpact: 'Use vitamin C in the morning under SPF. Niacinamide can be used twice daily. Be patient - brightening takes 8-12 weeks.',
        recommendations: [
          { productSlug: 'serum', reason: 'Concentrated brightening actives' },
          { productSlug: 'sunscreen', reason: 'Prevents new dark spots from forming' },
          { productSlug: 'toner', reason: 'Preps skin for better absorption' }
        ]
      };
    } else if (goal === 2) {
      return {
        type: 'acne-fighting',
        title: 'Acne-Fighting Heroes',
        description: 'These ingredients target breakouts, control oil, and prevent future acne.',
        lookFor: ['Salicylic acid', 'Benzoyl peroxide', 'Niacinamide', 'Tea tree oil', 'Azelaic acid', 'Zinc'],
        avoid: ['Heavy oils', 'Coconut oil', 'Thick balms', 'Pore-clogging ingredients'],
        routineImpact: 'Don\'t use too many actives at once. Alternate between salicylic acid and benzoyl peroxide. Always moisturize - dehydrated skin produces more oil.',
        recommendations: [
          { productSlug: 'cleanser', reason: 'Removes excess oil and prevents clogged pores' },
          { productSlug: 'toner', reason: 'Balances oil production' },
          { productSlug: 'moisturiser', reason: 'Lightweight hydration without clogging' }
        ]
      };
    } else {
      return {
        type: 'hydration',
        title: 'Hydration Heroes',
        description: 'These ingredients deeply hydrate and strengthen your skin barrier.',
        lookFor: ['Hyaluronic acid', 'Ceramides', 'Glycerin', 'Squalane', 'Peptides', 'Niacinamide'],
        avoid: ['Alcohol', 'Harsh sulfates', 'Fragrances', 'Essential oils'],
        routineImpact: 'Layer hydrating products from thinnest to thickest. Apply on damp skin for better absorption. Use a humidifier if you live in a dry climate.',
        recommendations: [
          { productSlug: 'serum', reason: 'Deep hydration that penetrates skin layers' },
          { productSlug: 'moisturiser', reason: 'Seals in moisture and repairs barrier' },
          { productSlug: 'toner', reason: 'First layer of hydration' }
        ]
      };
    }
  }
};

export const proQuizzes = [beautyStyleQuiz, routineOptimizerQuiz, ingredientMatchQuiz];
export const freeQuizzes = [skinTypeQuiz, beginnerRoutineQuiz];
export const allQuizzes = [...freeQuizzes, ...proQuizzes];
