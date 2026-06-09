// Discover section - Brands, tools, and guides
// Update this monthly with interesting beauty content from around the web

export interface DiscoverItem {
  id: string;
  title: string;
  description: string;
  detailedInfo?: string; // Extended information shown in modal
  type: 'brand' | 'tool' | 'guide' | 'product';
  badge: string; // e.g., "Brand Spotlight", "How-To", "Must-Have"
  wikiSlug?: string; // Optional: link to existing wiki page
  externalUrl?: string; // Optional: external link
  additionalLinks?: { label: string; url: string }[]; // Extra relevant links
  lastUpdated: string; // ISO date string for tracking
}

export const discoverItems: DiscoverItem[] = [
  {
    id: 'beauty-of-joseon',
    title: 'Beauty of Joseon',
    description: 'Korean skincare brand known for combining traditional ingredients like ginseng and rice with modern formulations. Their Relief Sun sunscreen is a cult favorite!',
    detailedInfo: 'Founded on the philosophy of combining traditional Korean herbal medicine (Hanbang) with modern skincare science. Their products feature ingredients like ginseng, rice, and green tea that have been used in Korean beauty rituals for centuries. The brand focuses on gentle, effective formulations suitable for sensitive skin.',
    type: 'brand',
    badge: 'Brand Spotlight',
    externalUrl: 'https://beautyofjoseon.com',
    additionalLinks: [
      { label: 'Relief Sun Review', url: 'https://www.reddit.com/r/AsianBeauty/comments/10x8z9y/beauty_of_joseon_relief_sun_review/' },
      { label: 'Best Products Guide', url: 'https://www.reddit.com/r/AsianBeauty/comments/12345/beauty_of_joseon_guide/' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'makeup-sponge-guide',
    title: 'How to Use Makeup Sponges',
    description: 'Master the art of flawless foundation application! Dampen your sponge, bounce (don\'t drag) for airbrushed finish, and clean weekly to prevent bacteria buildup.',
    detailedInfo: 'Step-by-step: 1) Wet your sponge under running water until fully saturated. 2) Squeeze out excess water - it should be damp, not dripping. 3) Apply foundation to your face in dots. 4) Use a bouncing/stippling motion (never drag or swipe). 5) Use the pointed end for under eyes and around nose. 6) Clean after every use with gentle soap or sponge cleanser. Replace every 3 months.',
    type: 'guide',
    badge: 'Quick Guide',
    additionalLinks: [
      { label: 'Video Tutorial', url: 'https://www.youtube.com/watch?v=example' },
      { label: 'Best Sponges Comparison', url: 'https://www.reddit.com/r/MakeupAddiction/comments/sponges/' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'cosrx-brand',
    title: 'COSRX',
    description: 'Affordable K-beauty brand focused on simple, effective ingredients. Their Snail Mucin Essence and BHA Power Liquid are holy grails for many skincare enthusiasts.',
    detailedInfo: 'COSRX stands for "Cosmetics + RX (prescription)". They believe skincare should be simple and effective, focusing on minimal ingredients that actually work. Their Advanced Snail 96 Mucin Power Essence is one of the most popular K-beauty products worldwide, known for hydration and healing properties.',
    type: 'brand',
    badge: 'Fan Favorite',
    externalUrl: 'https://www.cosrx.com',
    additionalLinks: [
      { label: 'Snail Mucin Review', url: 'https://www.reddit.com/r/SkincareAddiction/comments/snail/' },
      { label: 'COSRX Routine Guide', url: 'https://www.reddit.com/r/AsianBeauty/comments/cosrx/' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'double-cleansing',
    title: 'Double Cleansing Method',
    description: 'The K-beauty secret to clear skin! Use an oil-based cleanser first to remove makeup and sunscreen, then follow with a water-based cleanser for a deep clean.',
    detailedInfo: 'Why it works: Oil-based cleansers break down oil-based impurities (makeup, sunscreen, sebum) while water-based cleansers remove water-based dirt and sweat. Together, they ensure your skin is truly clean without stripping. Best for: Everyone, especially if you wear makeup or sunscreen daily. When: Every evening. Morning cleansing can be just water or a gentle cleanser.',
    type: 'guide',
    badge: 'Pro Tip',
    additionalLinks: [
      { label: 'Best Cleansing Oils', url: 'https://www.reddit.com/r/AsianBeauty/comments/oils/' },
      { label: 'Double Cleanse Tutorial', url: 'https://www.youtube.com/watch?v=example2' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'the-ordinary',
    title: 'The Ordinary',
    description: 'Science-backed skincare at drugstore prices. Known for transparent ingredient lists and no-nonsense formulations. Perfect for beginners wanting to try actives like niacinamide and retinol.',
    detailedInfo: 'Founded by DECIEM, The Ordinary revolutionized skincare by offering clinical-strength actives at affordable prices. Their minimalist approach focuses on single ingredients or simple formulations, making it easy to understand what you are putting on your skin. Popular starter products: Niacinamide 10% + Zinc 1%, Hyaluronic Acid 2% + B5, and Retinol 0.5% in Squalane.',
    type: 'brand',
    badge: 'Budget-Friendly',
    externalUrl: 'https://theordinary.com',
    additionalLinks: [
      { label: 'Beginner Guide', url: 'https://www.reddit.com/r/SkincareAddiction/comments/ordinary/' },
      { label: 'Product Recommendations', url: 'https://theordinary.com/en-us/regimen-guide' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'rare-beauty',
    title: 'Rare Beauty',
    description: 'Selena Gomez\'s makeup brand focused on self-acceptance and mental health. Their Soft Pinch Liquid Blush is incredibly pigmented - a tiny dot goes a long way!',
    detailedInfo: 'Founded by Selena Gomez in 2020, Rare Beauty challenges conventional beauty standards and promotes self-acceptance. The brand donates 1% of sales to the Rare Impact Fund supporting mental health services. Known for inclusive shade ranges and high-performance formulas. The Soft Pinch Liquid Blush became a viral sensation for its intense pigmentation and natural finish.',
    type: 'brand',
    badge: 'Trending Brand',
    externalUrl: 'https://www.rarebeauty.com',
    additionalLinks: [
      { label: 'Blush Tutorial', url: 'https://www.tiktok.com/@rarebeauty' },
      { label: 'Best Products Guide', url: 'https://www.reddit.com/r/MakeupAddiction/comments/rarebeauty/' }
    ],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'lip-care-guide',
    title: 'Ultimate Lip Care Routine',
    description: 'Get soft, smooth lips! Exfoliate gently once a week, apply balm throughout the day, and use SPF lip balm in the sun. Hydration from within matters too!',
    detailedInfo: 'Healthy lips start with gentle care. Weekly routine: Use a sugar scrub or soft toothbrush to exfoliate dead skin. Daily routine: Apply lip balm with ingredients like shea butter, vitamin E, or hyaluronic acid. Reapply every 2-3 hours. Sun protection: Use SPF 30+ lip balm when outdoors. Avoid licking your lips (saliva dries them out!) and stay hydrated by drinking plenty of water. For overnight treatment, apply a thick layer of balm or petroleum jelly before bed.',
    type: 'guide',
    badge: 'Beauty Hack',
    additionalLinks: [
      { label: 'Best Lip Balms', url: 'https://www.reddit.com/r/SkincareAddiction/comments/lipbalm/' },
      { label: 'DIY Lip Scrub Recipe', url: 'https://www.youtube.com/watch?v=lipscrub' }
    ],
    lastUpdated: '2026-06-01'
  }
];

// Helper function to check if discover items need updating (older than 30 days)
export function needsUpdate(): boolean {
  const oldestItem = discoverItems.reduce((oldest, item) => {
    const itemDate = new Date(item.lastUpdated);
    const oldestDate = new Date(oldest.lastUpdated);
    return itemDate < oldestDate ? item : oldest;
  });
  
  const daysSinceUpdate = Math.floor(
    (Date.now() - new Date(oldestItem.lastUpdated).getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceUpdate > 30;
}
