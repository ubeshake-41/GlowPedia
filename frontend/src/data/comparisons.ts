import type { Comparison } from '../lib/supabase';

export const comparisons: Omit<Comparison, 'id' | 'created_at'>[] = [
  {
    product_a: 'Serum',
    product_b: 'Toner',
    description_a: 'A concentrated treatment with active ingredients that targets specific skin concerns like acne, dark spots, or aging. Serums penetrate deep into the skin and are more potent than other products. **For teens:** Niacinamide serums are perfect for controlling oil and fading acne scars.',
    description_b: 'A lightweight liquid that balances your skin after cleansing and preps it to absorb other products better. Toners add hydration and can contain helpful ingredients, but they are gentler than serums. **For teens:** BHA toners help unclog pores and prevent breakouts.',
    comparison_table: [
      {
        attribute: 'Purpose',
        product_a_value: 'Treats specific skin concerns',
        product_b_value: 'Balances and preps skin'
      },
      {
        attribute: 'Texture',
        product_a_value: 'Thick, concentrated liquid',
        product_b_value: 'Thin, watery liquid'
      },
      {
        attribute: 'When to use',
        product_a_value: 'After toner, before moisturizer',
        product_b_value: 'Right after cleansing'
      },
      {
        attribute: 'Key ingredients',
        product_a_value: 'Vitamin C, retinol, niacinamide, hyaluronic acid',
        product_b_value: 'Glycerin, niacinamide, hyaluronic acid, botanical extracts'
      },
      {
        attribute: 'Strength',
        product_a_value: 'High concentration of actives',
        product_b_value: 'Gentle, lower concentration'
      },
      {
        attribute: 'Price range',
        product_a_value: '$6-40',
        product_b_value: '$10-35'
      }
    ],
    verdict: `**Use both!** Toner prepares your skin, and serum treats it. Think of toner as the foundation and serum as the targeted treatment. If you can only choose one and have specific skin concerns (acne, dark spots, aging), go with a serum. If your skin is balanced and you just want hydration, a toner might be enough.

**Teen tip:** If you're dealing with acne, start with a BHA toner (like Paula's Choice 2% BHA) to unclog pores, then add a niacinamide serum (like The Ordinary Niacinamide 10%) to control oil and fade scars. This combo is budget-friendly and super effective for teen skin!`
  },
  {
    product_a: 'Lip Gloss',
    product_b: 'Lip Balm',
    description_a: 'A shiny, often tinted product that adds dimension and makes lips look fuller. Lip gloss is about aesthetics — it catches light and creates a glossy, plump appearance. **For teens:** Perfect for a natural, everyday look that is school-appropriate.',
    description_b: 'A moisturizing treatment that protects and heals your lips. Lip balm is about care and protection, keeping lips soft and preventing chapping. **For teens:** Essential for preventing chapped lips, especially if you have braces or play sports.',
    comparison_table: [
      {
        attribute: 'Purpose',
        product_a_value: 'Adds shine and color',
        product_b_value: 'Moisturizes and protects'
      },
      {
        attribute: 'Finish',
        product_a_value: 'Glossy, shiny',
        product_b_value: 'Matte or subtle sheen'
      },
      {
        attribute: 'Texture',
        product_a_value: 'Can be sticky or smooth',
        product_b_value: 'Waxy, creamy'
      },
      {
        attribute: 'When to use',
        product_a_value: 'For a polished look, over lipstick',
        product_b_value: 'Daily care, before bed, under lipstick'
      },
      {
        attribute: 'Key ingredients',
        product_a_value: 'Oils, shimmer, plumping agents',
        product_b_value: 'Beeswax, shea butter, SPF'
      },
      {
        attribute: 'Longevity',
        product_a_value: 'Needs frequent reapplication',
        product_b_value: 'Lasts longer'
      }
    ],
    verdict: `**Use both!** Lip balm is your everyday essential — use it morning, night, and throughout the day to keep lips healthy. Lip gloss is for when you want a polished, shiny look. Pro tip: Apply lip balm first to moisturize, then add gloss on top for the best of both worlds.

**Teen tip:** Keep a tinted lip balm with SPF in your backpack for daily use (try Burt's Bees Tinted Lip Balm). Save your favorite gloss for after school or weekends. This way you're protecting your lips all day while still having fun with makeup when you want to!`
  },
  {
    product_a: 'Liquid Foundation',
    product_b: 'Powder Foundation',
    description_a: 'A liquid formula that provides buildable coverage and works for most skin types. Liquid foundation blends easily and can create anything from a natural to full-coverage look. **For teens:** Choose non-comedogenic formulas to avoid clogging pores and making acne worse.',
    description_b: 'A powder formula that provides a matte finish and is great for oily skin. Powder foundation is quick to apply and helps control shine throughout the day. **For teens:** Great if you have oily skin or want something quick and easy for school.',
    comparison_table: [
      {
        attribute: 'Best for',
        product_a_value: 'All skin types, especially dry or normal',
        product_b_value: 'Oily or combination skin'
      },
      {
        attribute: 'Finish',
        product_a_value: 'Natural to dewy',
        product_b_value: 'Matte'
      },
      {
        attribute: 'Coverage',
        product_a_value: 'Buildable (light to full)',
        product_b_value: 'Light to medium'
      },
      {
        attribute: 'Application',
        product_a_value: 'Brush, sponge, or fingers',
        product_b_value: 'Brush or sponge'
      },
      {
        attribute: 'Longevity',
        product_a_value: 'Lasts all day with setting',
        product_b_value: 'May need touch-ups'
      },
      {
        attribute: 'Portability',
        product_a_value: 'Can spill, needs careful packing',
        product_b_value: 'Compact, travel-friendly'
      }
    ],
    verdict: `**It depends on your skin type!** If you have dry or normal skin, liquid foundation will look more natural and won't emphasize dry patches. If you have oily skin, powder foundation will help control shine and won't slide off. Many people use both — liquid for full-face coverage and powder for touch-ups throughout the day.

**Teen tip:** Honestly, you might not need foundation at all! Try using just concealer on blemishes and a tinted moisturizer or BB cream for light coverage. If you do want foundation, start with a lightweight liquid formula like Maybelline Fit Me or L'Oréal True Match — they're affordable, come in lots of shades, and won't feel heavy on your skin.`
  }
];
