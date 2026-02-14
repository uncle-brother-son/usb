# Images Guide

## Favicon & App Icons

Place your custom images in the `/public` folder with these exact names:

### Required Files:

1. **`icon.png`** - 32x32px favicon (PNG format)
2. **`icon.svg`** - Vector favicon (SVG format, optional but recommended)
3. **`apple-icon.png`** - 180x180px Apple touch icon (PNG format)
4. **`icon-512.png`** - 512x512px for PWA (PNG format)
5. **`og-image.png`** - 1200x630px Open Graph image for social sharing (PNG or JPG)

### Recommended Specifications:

- **Favicon (icon.png)**: 32x32px, PNG with transparency
- **Apple Touch Icon (apple-icon.png)**: 180x180px, PNG, no transparency
- **PWA Icon (icon-512.png)**: 512x512px, PNG, no transparency
- **OG Image (og-image.png)**: 1200x630px, PNG or JPG, max 8MB

### Notes:

- All icon files should use your brand colors
- The OG image appears when your site is shared on social media (Twitter, Facebook, LinkedIn, etc.)
- Keep file sizes optimized for web (use compression tools)
- You can also use 192x192px for `icon.png` if you prefer larger favicons

### Current Setup:

The metadata in `app/layout.tsx` and `app/manifest.ts` is already configured to use these file names. Just drop your images into `/public` folder and they'll work automatically!
