# How to Update the "Discover More" Section Monthly

The "Discover More" section on the homepage showcases brands, tools, and guides from the beauty world. This content should be updated monthly to keep it fresh and relevant.

## Location

The discover items are stored in: `frontend/src/data/trending.ts`

## How to Update

1. **Open the file**: `frontend/src/data/trending.ts`

2. **Edit the `discoverItems` array**: Add, remove, or modify items in the array

3. **Each item has these fields**:
   ```typescript
   {
     id: string;              // Unique identifier (e.g., 'beauty-of-joseon')
     title: string;           // Display name (e.g., 'Beauty of Joseon')
     description: string;     // Short description shown on card
     type: 'brand' | 'tool' | 'guide' | 'product';  // Type of content
     badge: string;           // Badge text (e.g., 'Brand Spotlight', 'Quick Guide')
     wikiSlug?: string;       // Optional: link to internal wiki page
     externalUrl?: string;    // Optional: external website link
     lastUpdated: string;     // ISO date (e.g., '2026-06-01')
   }
   ```

4. **Update the `lastUpdated` field** to the current date when making changes

## Example: Adding a New Brand

```typescript
{
  id: 'cerave-brand',
  title: 'CeraVe',
  description: 'Dermatologist-developed skincare with ceramides. Affordable, effective, and gentle for sensitive skin. Their moisturizers are pharmacy staples!',
  type: 'brand',
  badge: 'Dermatologist Favorite',
  externalUrl: 'https://www.cerave.com',
  lastUpdated: '2026-07-01'
}
```

## Example: Adding a New Guide

```typescript
{
  id: 'patch-test-guide',
  title: 'How to Patch Test Products',
  description: 'Always test new products before full application! Apply a small amount behind your ear or on your inner arm. Wait 24-48 hours to check for reactions.',
  type: 'guide',
  badge: 'Safety First',
  lastUpdated: '2026-07-01'
}
```

## Tips for Content

- **Brands**: Focus on popular, accessible brands that teens can actually buy
- **Guides**: Keep instructions simple, practical, and beginner-friendly
- **Descriptions**: Aim for 1-2 sentences, conversational tone
- **Badges**: Use descriptive, engaging labels like "Fan Favorite", "Pro Tip", "Must-Know"

## Color Coding

The system automatically color-codes items:
- **Brands** → Lavender/purple
- **Guides** → Mint/green  
- **Products** → Blue
- **Tools** → Blue

## Tracking Updates

The `needsUpdate()` function in the file checks if any item is older than 30 days. You can use this to remind yourself to update the content monthly.

## After Making Changes

1. Save the file
2. The dev server will automatically reload (HMR)
3. Check the homepage to see your changes
4. Commit and push to deploy

## Need Ideas?

Look for:
- Trending K-beauty or J-beauty brands
- Viral TikTok beauty tips (that are actually safe!)
- New product launches from trusted brands
- Common beauty mistakes and how to avoid them
- Seasonal skincare tips
