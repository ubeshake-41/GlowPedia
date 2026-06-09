import type { Product } from '../lib/supabase';

export const products: Omit<Product, 'id' | 'created_at'>[] = [
  {
    name: 'Cleanser',
    category: 'skincare',
    subcategory: 'cleansing',
    slug: 'cleanser',
    short_description: 'The first step in any skincare routine. Cleansers remove dirt, oil, and makeup from your skin.',
    full_description: `A cleanser is like a gentle soap for your face. It washes away everything that builds up on your skin during the day — dirt, oil, sweat, and makeup. Using a cleanser helps keep your pores clear and your skin fresh.

Think of it as hitting the reset button on your face. Without cleansing, all the good products you use afterward can't work properly because they're sitting on top of a layer of gunk.

**Why teens need it:** Your skin produces more oil during puberty due to hormonal changes. This extra oil mixes with dead skin cells and can clog pores, leading to breakouts. A good cleanser removes this buildup without stripping your skin, which is key because over-washing can actually make your skin produce MORE oil to compensate.`,
    ingredients: ['Water', 'Glycerin', 'Cocamidopropyl Betaine', 'Sodium Cocoyl Isethionate', 'Citric Acid'],
    good_for: [
      'Removing makeup and sunscreen',
      'Clearing away daily dirt and oil',
      'Preparing skin for other products',
      'Preventing clogged pores',
      'Managing teen acne and oily skin',
      'All skin types (when you choose the right formula)'
    ],
    avoid_if: [
      'You have very dry skin (avoid foaming cleansers)',
      'You have sensitive skin (avoid harsh scrubs)',
      'Your skin feels tight after washing (switch to a gentler formula)'
    ],
    how_to_use: `1. Wet your face with lukewarm water
2. Apply a small amount of cleanser to your hands
3. Gently massage it onto your face in circular motions for 30-60 seconds
4. Rinse thoroughly with lukewarm water
5. Pat dry with a clean towel

Use morning and night. If you wear makeup or sunscreen, you might need to cleanse twice in the evening (called double cleansing).`,
    subtypes: [
      'Gel cleanser — best for oily skin',
      'Cream cleanser — best for dry skin',
      'Foam cleanser — best for combination skin',
      'Oil cleanser — best for removing makeup',
      'Micellar water — gentle, no-rinse option'
    ],
    top_picks: [
      {
        brand: 'CeraVe',
        name: 'Hydrating Facial Cleanser',
        price_range: '$10-15',
        best_for: 'Dry to normal skin',
        buy_url: 'https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Hydrating Gentle Cleanser',
        price_range: '$15-20',
        best_for: 'Sensitive skin',
        buy_url: 'https://www.laroche-posay.us/face-and-body-skin-care/face-products/face-wash/toleriane-hydrating-gentle-facial-cleanser-3337875545815.html'
      },
      {
        brand: 'Neutrogena',
        name: 'Hydro Boost Hydrating Cleansing Gel',
        price_range: '$8-12',
        best_for: 'All skin types, budget-friendly',
        buy_url: 'https://www.neutrogena.com/products/skincare/hydro-boost-hydrating-cleansing-gel/6811047.html'
      }
    ]
  },
  {
    name: 'Toner',
    category: 'skincare',
    subcategory: 'treatment',
    slug: 'toner',
    short_description: 'A liquid treatment that balances your skin and preps it to absorb other products better.',
    full_description: `Toner is a lightweight liquid you apply after cleansing. It helps balance your skin's pH, adds a layer of hydration, and makes your skin more receptive to serums and moisturizers.

Modern toners are nothing like the harsh, alcohol-heavy toners from the past. Today's toners are gentle and packed with helpful ingredients like hyaluronic acid, niacinamide, or soothing botanicals.

**Why teens need it:** If you have oily or acne-prone skin, a toner with BHA (salicylic acid) can help unclog pores and prevent breakouts. If your skin feels tight after cleansing, a hydrating toner can restore balance without adding heavy moisture that might feel greasy.`,
    ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Hyaluronic Acid', 'Panthenol'],
    good_for: [
      'Balancing skin pH after cleansing',
      'Adding an extra layer of hydration',
      'Prepping skin to absorb serums better',
      'Calming redness and irritation',
      'Refining pores (with the right ingredients)'
    ],
    avoid_if: [
      'It contains high amounts of alcohol (drying)',
      'Your skin feels tight or irritated after use',
      'You have very sensitive skin (test first)'
    ],
    how_to_use: `1. Cleanse your face first
2. Pour a small amount of toner onto a cotton pad OR into your palms
3. Gently pat or swipe it across your face and neck
4. Wait 30 seconds for it to absorb
5. Follow with serum and moisturizer

Use morning and night after cleansing. You can skip toner if you're in a rush — it's helpful but not essential.`,
    subtypes: [
      'Hydrating toner — adds moisture',
      'Exfoliating toner — contains AHAs/BHAs to clear pores',
      'Soothing toner — calms irritation',
      'pH-balancing toner — restores skin balance'
    ],
    top_picks: [
      {
        brand: 'COSRX',
        name: 'Snail Mucin Power Essence',
        price_range: '$15-25',
        best_for: 'Hydration and healing',
        buy_url: 'https://www.cosrx.com/products/advanced-snail-96-mucin-power-essence'
      },
      {
        brand: 'Paula\'s Choice',
        name: '2% BHA Liquid Exfoliant',
        price_range: '$30-35',
        best_for: 'Oily skin and clogged pores',
        buy_url: 'https://www.paulaschoice.com/skin-perfecting-2pct-bha-liquid-exfoliant/201.html'
      },
      {
        brand: 'Thayers',
        name: 'Witch Hazel Toner',
        price_range: '$10-12',
        best_for: 'Budget-friendly, soothing',
        buy_url: 'https://www.thayers.com/products/alcohol-free-rose-petal-witch-hazel-toner'
      }
    ]
  },
  {
    name: 'Serum',
    category: 'skincare',
    subcategory: 'treatment',
    slug: 'serum',
    short_description: 'A concentrated treatment packed with active ingredients to target specific skin concerns.',
    full_description: `Serums are lightweight, fast-absorbing liquids loaded with powerful active ingredients. They're designed to penetrate deep into your skin and tackle specific issues like acne, dark spots, or fine lines.

Think of serums as the problem-solvers of skincare. While moisturizers hydrate and protect, serums actively work to improve your skin. They're more concentrated than other products, so a little goes a long way.

**Why teens need it:** Niacinamide serums are perfect for teen skin — they reduce oil production, minimize pores, and fade acne scars without irritation. If you're dealing with post-acne dark spots (hyperpigmentation), a vitamin C serum can help even out your skin tone. Start with gentle formulas and introduce one serum at a time.`,
    ingredients: ['Water', 'Niacinamide', 'Hyaluronic Acid', 'Vitamin C', 'Peptides'],
    good_for: [
      'Targeting specific concerns (acne, dark spots, wrinkles)',
      'Delivering active ingredients deep into skin',
      'Brightening dull skin',
      'Fading acne scars and hyperpigmentation',
      'Controlling oil and minimizing pores (niacinamide)',
      'Hydrating without feeling heavy',
      'Boosting the effectiveness of your routine'
    ],
    avoid_if: [
      "You're using too many actives at once (can irritate)",
      'Your skin is very sensitive (start slow)',
      "You're not using sunscreen (some serums increase sun sensitivity)"
    ],
    how_to_use: `1. Cleanse and tone first
2. Apply 2-3 drops of serum to your fingertips
3. Gently press and pat it into your face and neck
4. Wait 1-2 minutes for it to absorb
5. Follow with moisturizer

Use once or twice daily. If using multiple serums, apply the thinnest/most watery one first. Always use sunscreen in the morning, especially with vitamin C or retinol serums.`,
    subtypes: [
      'Vitamin C serum — brightens and evens skin tone',
      'Hyaluronic acid serum — intense hydration',
      'Niacinamide serum — reduces redness and pores',
      'Retinol serum — anti-aging and acne',
      'Peptide serum — firms and plumps skin'
    ],
    top_picks: [
      {
        brand: 'The Ordinary',
        name: 'Niacinamide 10% + Zinc 1%',
        price_range: '$6-8',
        best_for: 'Oily skin, large pores, budget-friendly',
        buy_url: 'https://theordinary.com/en-us/niacinamide-10-zinc-1-serum-100436.html'
      },
      {
        brand: 'CeraVe',
        name: 'Skin Renewing Vitamin C Serum',
        price_range: '$18-22',
        best_for: 'Brightening, beginner-friendly',
        buy_url: 'https://www.cerave.com/skincare/serums/skin-renewing-vitamin-c-serum'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Hyalu B5 Pure Hyaluronic Acid Serum',
        price_range: '$35-40',
        best_for: 'Hydration and plumping',
        buy_url: 'https://www.laroche-posay.us/face-and-body-skin-care/face-products/face-serum/hyalu-b5-pure-hyaluronic-acid-serum-3337875545877.html'
      }
    ]
  },
  {
    name: 'Moisturiser',
    category: 'skincare',
    subcategory: 'hydration',
    slug: 'moisturiser',
    short_description: 'Locks in hydration and protects your skin barrier. Essential for every skin type.',
    full_description: `A moisturizer is your skin's protective shield. It locks in all the good stuff from your previous steps and creates a barrier that keeps moisture in and irritants out.

Even if you have oily skin, you need a moisturizer. When your skin is dehydrated, it actually produces MORE oil to compensate. The right moisturizer helps balance everything out.

**Why teens need it:** Many teens skip moisturizer thinking it'll make their oily skin worse — but that's a myth! Dehydrated skin overproduces oil. Choose a lightweight, oil-free gel moisturizer if you're oily or acne-prone. If acne treatments are drying out your skin, a gentle moisturizer helps repair your skin barrier and reduces irritation.`,
    ingredients: ['Water', 'Glycerin', 'Ceramides', 'Hyaluronic Acid', 'Dimethicone', 'Shea Butter'],
    good_for: [
      'Locking in hydration',
      'Protecting your skin barrier',
      'Preventing water loss',
      'Soothing and calming skin',
      'Creating a smooth base for makeup'
    ],
    avoid_if: [
      'It feels too heavy for your skin type',
      'It causes breakouts (try a lighter formula)',
      'It contains fragrance and you have sensitive skin'
    ],
    how_to_use: `1. Apply after cleansing, toning, and serum
2. Take a pea-sized amount (or more for dry skin)
3. Warm it between your palms
4. Gently press and massage it into your face and neck
5. Use upward motions

Use morning and night. In the morning, wait a few minutes before applying sunscreen. At night, this is your final step.`,
    subtypes: [
      'Gel moisturizer — lightweight, best for oily skin',
      'Lotion — medium weight, good for combination skin',
      'Cream — rich and thick, best for dry skin',
      'Sleeping mask — extra hydrating overnight treatment'
    ],
    top_picks: [
      {
        brand: 'CeraVe',
        name: 'Moisturizing Cream',
        price_range: '$12-18',
        best_for: 'Dry skin, sensitive skin',
        buy_url: 'https://www.cerave.com/skincare/moisturizers/moisturizing-cream'
      },
      {
        brand: 'Neutrogena',
        name: 'Hydro Boost Water Gel',
        price_range: '$15-20',
        best_for: 'Oily to combination skin',
        buy_url: 'https://www.neutrogena.com/products/skincare/hydro-boost-water-gel/6811048.html'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Double Repair Face Moisturizer',
        price_range: '$20-25',
        best_for: 'All skin types, includes SPF option',
        buy_url: 'https://www.laroche-posay.us/face-and-body-skin-care/face-products/face-moisturizer/toleriane-double-repair-face-moisturizer-3337875545839.html'
      }
    ]
  },
  {
    name: 'Sunscreen',
    category: 'skincare',
    subcategory: 'protection',
    slug: 'sunscreen',
    short_description: 'The most important step. Protects your skin from sun damage, aging, and skin cancer.',
    full_description: `Sunscreen is non-negotiable. It's the single most important thing you can do for your skin. UV rays cause premature aging, dark spots, and increase your risk of skin cancer.

Even on cloudy days, even indoors near windows, UV rays reach your skin. Sunscreen isn't just for the beach — it's an everyday essential.

**Why teens need it:** Sun damage accumulates over your lifetime, and most of it happens before age 18. Wearing sunscreen now prevents wrinkles, dark spots, and skin cancer later. If you're using acne treatments (especially retinol or acids), sunscreen is ESSENTIAL because these make your skin more sensitive to the sun. Plus, sunscreen prevents acne scars from darkening.`,
    ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Avobenzone', 'Octinoxate', 'Niacinamide'],
    good_for: [
      'Preventing sun damage and skin cancer',
      'Preventing premature aging and wrinkles',
      'Preventing dark spots and hyperpigmentation',
      'Preventing acne scars from darkening',
      'Protecting skin when using acne treatments',
      'Protecting your skin barrier',
      'Preserving the results of other skincare products'
    ],
    avoid_if: [
      'It leaves a white cast (try a tinted or chemical sunscreen)',
      'It feels greasy (try a gel or matte formula)',
      'It stings your eyes (try a mineral sunscreen)'
    ],
    how_to_use: `1. Apply as the LAST step of your morning routine
2. Use about 1/4 teaspoon for your face
3. Apply evenly to all exposed skin
4. Wait 15 minutes before going outside
5. Reapply every 2 hours if you're outdoors

Use every single morning, even if you're staying inside. UV rays go through windows. This is the most important step — don't skip it!`,
    subtypes: [
      'Mineral sunscreen — uses zinc oxide or titanium dioxide, sits on top of skin',
      'Chemical sunscreen — absorbs into skin, lighter feel',
      'Tinted sunscreen — evens skin tone, no white cast',
      'Gel sunscreen — lightweight, good for oily skin'
    ],
    top_picks: [
      {
        brand: 'La Roche-Posay',
        name: 'Anthelios Melt-In Milk Sunscreen SPF 60',
        price_range: '$20-35',
        best_for: 'All skin types, no white cast',
        buy_url: 'https://www.laroche-posay.us/sunscreen/anthelios-melt-in-milk-sunscreen-spf-60-3606000437449.html'
      },
      {
        brand: 'EltaMD',
        name: 'UV Clear Broad-Spectrum SPF 46',
        price_range: '$35-40',
        best_for: 'Acne-prone, sensitive skin',
        buy_url: 'https://eltamd.com/products/uv-clear-broad-spectrum-spf-46'
      },
      {
        brand: 'Neutrogena',
        name: 'Ultra Sheer Dry-Touch Sunscreen SPF 55',
        price_range: '$10-12',
        best_for: 'Budget-friendly, matte finish',
        buy_url: 'https://www.neutrogena.com/products/sun/ultra-sheer-dry-touch-sunscreen-broad-spectrum-spf-55/6811501.html'
      }
    ]
  },
  {
    name: 'Foundation',
    category: 'cosmetics',
    subcategory: 'face',
    slug: 'foundation',
    short_description: 'Evens out your skin tone and creates a smooth base for the rest of your makeup.',
    full_description: `Foundation is like a filter for your face in real life. It evens out your skin tone, covers blemishes and redness, and creates a smooth canvas for the rest of your makeup.

The key is finding the right shade and formula for your skin type. Foundation should look like your skin, just better — not like a mask.

**Why teens need it:** You don't need foundation every day! Many teens have naturally great skin and can get away with just concealer on blemishes. But if you want to even out redness or cover acne, choose a lightweight, non-comedogenic (won't clog pores) formula. Heavy foundation can make breakouts worse, so start with light coverage and build up only where needed.`,
    ingredients: ['Water', 'Dimethicone', 'Titanium Dioxide', 'Iron Oxides', 'Glycerin'],
    good_for: [
      'Evening out skin tone',
      'Covering blemishes and redness',
      'Creating a smooth makeup base',
      'Boosting confidence',
      'Protecting skin (if it contains SPF)'
    ],
    avoid_if: [
      'It oxidizes (turns orange) on your skin',
      'It causes breakouts (try non-comedogenic formulas)',
      "The shade doesn't match your neck",
      'It feels cakey or heavy',
      'You have active acne (heavy foundation can make it worse)'
    ],
    how_to_use: `1. Start with clean, moisturized skin (and sunscreen!)
2. Apply primer if desired
3. Dot foundation on forehead, cheeks, nose, and chin
4. Blend outward using a brush, sponge, or fingers
5. Build coverage gradually — less is more
6. Blend down to your neck to avoid a line

Apply in natural light if possible. Set with powder if you have oily skin. Remember: your foundation should match your neck, not your face.`,
    subtypes: [
      'Liquid foundation — most versatile, buildable coverage',
      'Powder foundation — matte finish, good for oily skin',
      'Cream foundation — full coverage, good for dry skin',
      'Cushion foundation — lightweight, dewy finish',
      'Stick foundation — portable, easy to apply'
    ],
    top_picks: [
      {
        brand: 'Maybelline',
        name: 'Fit Me Matte + Poreless Foundation',
        price_range: '$7-10',
        best_for: 'Oily skin, budget-friendly',
        buy_url: 'https://www.maybelline.com/face-makeup/foundation-makeup/fit-me-matte-poreless-foundation'
      },
      {
        brand: 'L\'Oréal',
        name: 'True Match Super-Blendable Foundation',
        price_range: '$10-13',
        best_for: 'Wide shade range, all skin types',
        buy_url: 'https://www.lorealparisusa.com/products/makeup/face/foundation/true-match-super-blendable-liquid-makeup.aspx'
      },
      {
        brand: 'Fenty Beauty',
        name: 'Pro Filt\'r Soft Matte Foundation',
        price_range: '$36-40',
        best_for: 'Extensive shade range, long-wear',
        buy_url: 'https://fentybeauty.com/products/pro-filtr-soft-matte-longwear-foundation'
      }
    ]
  },
  {
    name: 'Lip Gloss',
    category: 'cosmetics',
    subcategory: 'lips',
    slug: 'lip-gloss',
    short_description: 'Adds shine and a hint of color to your lips. Perfect for a glossy, plump look.',
    full_description: `Lip gloss is all about shine. It makes your lips look fuller, more hydrated, and catches the light beautifully. It can be worn alone for a natural look or layered over lipstick for extra dimension.

Modern lip glosses aren't sticky like they used to be. Today's formulas are comfortable, hydrating, and come in everything from clear to deeply pigmented.

**Why teens love it:** Lip gloss is perfect for a natural, effortless look — great for school or everyday wear. It's less commitment than lipstick and easier to apply. Clear or lightly tinted glosses give you that "your lips but better" vibe without looking too made-up.`,
    ingredients: ['Hydrogenated Polyisobutene', 'Vitamin E', 'Jojoba Oil', 'Hyaluronic Acid', 'Mica'],
    good_for: [
      'Adding shine and dimension to lips',
      'Making lips look fuller',
      'Hydrating dry lips',
      'Creating a youthful, fresh look',
      'Layering over lipstick'
    ],
    avoid_if: [
      'You hate the sticky feeling (try a non-sticky formula)',
      'You have very dry, flaky lips (exfoliate first)',
      'It feathers outside your lip line (use a lip liner)'
    ],
    how_to_use: `1. Start with smooth, moisturized lips
2. Apply lip balm first if your lips are very dry
3. Use the applicator to swipe gloss across your lips
4. Start in the center and work outward
5. Blot lightly if it's too glossy

You can wear gloss alone or over lipstick. For a plumper look, dab extra gloss in the center of your lips. Reapply throughout the day as needed.`,
    subtypes: [
      'Clear gloss — pure shine, no color',
      'Tinted gloss — sheer color with shine',
      'Plumping gloss — contains ingredients that make lips tingle and look fuller',
      'Shimmer gloss — contains glitter or shimmer particles'
    ],
    top_picks: [
      {
        brand: 'NYX',
        name: 'Butter Gloss',
        price_range: '$5-7',
        best_for: 'Budget-friendly, non-sticky',
        buy_url: 'https://www.nyxcosmetics.com/lips/lip-gloss/butter-gloss/NYX_001.html'
      },
      {
        brand: 'Fenty Beauty',
        name: 'Gloss Bomb Universal Lip Luminizer',
        price_range: '$19-21',
        best_for: 'High shine, universally flattering',
        buy_url: 'https://fentybeauty.com/products/gloss-bomb-universal-lip-luminizer'
      },
      {
        brand: 'Buxom',
        name: 'Full-On Plumping Lip Polish',
        price_range: '$21-23',
        best_for: 'Plumping effect, long-lasting',
        buy_url: 'https://www.buxomcosmetics.com/product/21536/90992/lips/lip-gloss/full-on-plumping-lip-polish'
      }
    ]
  },
  {
    name: 'Lip Balm',
    category: 'cosmetics',
    subcategory: 'lips',
    slug: 'lip-balm',
    short_description: 'Moisturizes and protects your lips. An everyday essential for soft, healthy lips.',
    full_description: `Lip balm is your lips' best friend. It keeps them soft, prevents chapping, and creates a protective barrier against wind, cold, and sun damage.

Unlike lip gloss, lip balm is all about care and protection. It's not about shine or color — it's about keeping your lips healthy and comfortable.

**Why teens need it:** Chapped lips are super common during puberty, especially if you're dehydrated or breathing through your mouth (hello, braces!). Keep a lip balm with SPF in your backpack and apply throughout the day. It's also perfect to apply before bed for overnight healing.`,
    ingredients: ['Beeswax', 'Shea Butter', 'Coconut Oil', 'Vitamin E', 'SPF (in some formulas)'],
    good_for: [
      'Preventing and healing chapped lips',
      'Protecting lips from sun and wind',
      'Creating a smooth base for lipstick',
      'Overnight lip treatment',
      'Everyday lip care'
    ],
    avoid_if: [
      'It contains menthol or camphor (can be drying)',
      'You are allergic to beeswax (try vegan formulas)',
      'It makes your lips feel more dry (some ingredients are actually drying)'
    ],
    how_to_use: `1. Apply throughout the day as needed
2. Swipe across lips evenly
3. Reapply after eating or drinking
4. Use before bed for overnight hydration
5. Apply before lipstick to create a smooth base

For very dry lips, exfoliate gently first, then apply a thick layer of balm before bed. Look for balms with SPF for daytime use.`,
    subtypes: [
      'Classic balm — basic moisture and protection',
      'Tinted balm — light color with hydration',
      'SPF balm — sun protection for lips',
      'Overnight balm — thick, intensive treatment',
      'Medicated balm — for severely chapped lips'
    ],
    top_picks: [
      {
        brand: 'Aquaphor',
        name: 'Lip Repair',
        price_range: '$4-6',
        best_for: 'Healing very dry, cracked lips',
        buy_url: 'https://www.aquaphorus.com/lip-care/lip-repair/'
      },
      {
        brand: 'Burt\'s Bees',
        name: 'Beeswax Lip Balm',
        price_range: '$3-5',
        best_for: 'Natural ingredients, everyday use',
        buy_url: 'https://www.burtsbees.com/product/beeswax-lip-balm/VM-79211-00-1.html'
      },
      {
        brand: 'Laneige',
        name: 'Lip Sleeping Mask',
        price_range: '$22-24',
        best_for: 'Overnight treatment, intense hydration',
        buy_url: 'https://www.laneige.com/us/en/product/lip-sleeping-mask.html'
      }
    ]
  }
];
