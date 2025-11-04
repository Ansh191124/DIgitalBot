# Images Folder Structure

This folder contains all images used in the DigitalBot.AI application.

## Folder Organization

### 📁 `/logos`
**Purpose:** Brand logos and wordmarks
- Main DigitalBot.AI logo (PNG, SVG)
- Logo variations (light, dark, icon-only)
- Partner/client logos

**Add your logo here:**
- `digitalbot-logo.png` - Main logo (recommended: 500x200px)
- `digitalbot-logo.svg` - Vector version
- `digitalbot-logo-white.png` - White version for dark backgrounds
- `digitalbot-logo-icon.png` - Icon only version

### 📁 `/icons`
**Purpose:** UI icons and favicons
- Custom icons
- Feature icons
- Social media icons
- App icons (iOS, Android)

### 📁 `/graphics`
**Purpose:** Illustrations and graphics
- Hero section images
- Feature illustrations
- Background graphics
- Screenshots
- Product images

### 📁 `/og`
**Purpose:** Open Graph and social media images
- `og-image.png` - Default Open Graph image (1200x630px)
- `twitter-card.png` - Twitter card image (1200x630px)
- Page-specific OG images

## Image Guidelines

### Recommended Formats
- **Logos:** PNG (with transparency) or SVG
- **Photos:** JPG or WebP
- **Graphics:** PNG or SVG
- **Icons:** SVG or PNG

### Recommended Sizes
- **Main Logo:** 500x200px (PNG) or scalable (SVG)
- **Favicon:** 32x32px, 48x48px
- **Open Graph:** 1200x630px
- **Hero Images:** 1920x1080px

### Naming Convention
- Use lowercase
- Use hyphens for spaces
- Be descriptive: `feature-ai-analytics.png`
- Include size if multiple versions: `logo-small.png`, `logo-large.png`

## Usage in Code

```jsx
// Import from /images folder
<Image src="/images/logos/digitalbot-logo.png" alt="DigitalBot.AI" width={200} height={50} />

// Icons
<Image src="/images/icons/phone-icon.svg" alt="Phone" width={24} height={24} />

// Graphics
<Image src="/images/graphics/hero-dashboard.png" alt="Dashboard" width={800} height={600} />
```

## Next Steps

1. **Add your logo:** Place your logo PNG file in `/logos` folder
2. **Optimize images:** Use tools like TinyPNG or Squoosh
3. **Create WebP versions:** For better performance
4. **Update components:** Reference new image paths

---

*Last updated: November 2025*
