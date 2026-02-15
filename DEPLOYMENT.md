# Deployment Instructions

## Cloudflare Pages Configuration

When deploying to Cloudflare Pages, use these settings:

### Build Configuration

**Framework preset:** `Next.js`

**Build command:**
```bash
cd web && npm install && npm run build
```

**Build output directory:**
```
web/.next
```

**Root directory:** (leave as default `/`)

**Node version:** `20` (set in Environment Variables)

### Environment Variables

Add these environment variables in Cloudflare Pages:

```
NODE_VERSION=20
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Additional Notes

- Cloudflare Pages supports Next.js with some limitations
- Server-side features work via Cloudflare's Edge Runtime
- Make sure to test locally before deploying
- Images should be optimized for Edge delivery

## GitHub Setup

1. Initialize the repository:
```bash
git init
git add .
git commit -m "Initial commit: Sanity CMS and Next.js setup"
```

2. Create a new repository on GitHub

3. Connect and push:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

## Sanity Studio Deployment

Sanity Studio can be deployed separately:

```bash
cd studio
npm run build
# Deploy to Sanity's hosting or your preferred platform
```

Or deploy it as a separate Cloudflare Pages project with:
- Build command: `npm install && npm run build`
- Build output directory: `dist`
