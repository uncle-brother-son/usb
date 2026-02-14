# USB Site

This project consists of two main components:

## Project Structure

```
USB/
├── sanity/          # Sanity CMS Studio
└── web/             # Next.js Website
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Quick Start

Install all dependencies:
```bash
npm run install:all
```

Run both projects in development:
```bash
# Terminal 1 - Next.js website
npm run dev:web

# Terminal 2 - Sanity Studio
npm run dev:sanity
```

### Sanity CMS

The Sanity project is located in the `/sanity` folder.

**Important:** Before running Sanity, you need to:
1. Create a Sanity project at https://www.sanity.io/manage
2. Update the `projectId` in `sanity/sanity.config.ts` with your actual project ID

To run the Sanity Studio:

```bash
cd sanity
npm run dev
```

The Sanity Studio will be available at http://localhost:3333

### Next.js Website

The Next.js website is located in the `/web` folder and currently shows a simple holding page.

To run the development server:

```bash
cd web
npm run dev
```

The website will be available at http://localhost:3000

To build for production:

```bash
cd web
npm run build
npm start
```

## Features

- **Sanity CMS**: Headless CMS for content management
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **ESLint**: Code linting

## Deployment

This project is ready for deployment to:
- **Cloudflare Pages** (recommended for Next.js)
- **GitHub** for version control

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Next Steps

1. Set up your Sanity project and update the project ID
2. Create content schemas in `sanity/schemaTypes/`
3. Build out your website pages in `web/app/`
4. Connect Next.js to Sanity using `@sanity/client`
5. Deploy to Cloudflare Pages and GitHub
