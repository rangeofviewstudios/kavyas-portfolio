---
description: Complete guide to migrate from Vite + React Router to Next.js
---

# Next.js Migration Guide

This workflow will guide you through migrating your Kavya's Portfolio from Vite + React Router to Next.js.

## Prerequisites

Before starting, make sure to:
1. **Commit all your current changes** to git
2. **Create a backup** of your project
3. **Close the dev server** if it's running

---

## Step 1: Install Next.js Dependencies

First, we need to install Next.js and remove Vite-specific packages.

```bash
npm install next@latest
npm uninstall vite @vitejs/plugin-react-swc react-router-dom
```

---

## Step 2: Update package.json Scripts

Replace the scripts in `package.json` with Next.js equivalents:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## Step 3: Create Next.js Directory Structure

Next.js uses an `app` directory (App Router) or `pages` directory (Pages Router). We'll use the **App Router** (recommended):

### Create the following structure:
```
kavyas-portfolio/
├── app/
│   ├── layout.tsx          (Root layout - replaces App.tsx)
│   ├── page.tsx            (Home page - was Index.tsx)
│   ├── about/
│   │   └── page.tsx        (About page)
│   ├── resume/
│   │   └── page.tsx        (Resume page)
│   ├── case-study/
│   │   ├── ubs/
│   │   │   └── page.tsx
│   │   ├── lowes/
│   │   │   └── page.tsx
│   │   ├── aestura/
│   │   │   └── page.tsx
│   │   ├── looma/
│   │   │   └── page.tsx
│   │   └── porsche/
│   │       └── page.tsx
│   └── not-found.tsx       (404 page)
├── components/             (Keep as is)
├── lib/                    (Keep as is)
├── hooks/                  (Keep as is)
└── public/                 (Move images here if not already)
```

---

## Step 4: Create next.config.mjs

Create a `next.config.mjs` file in the root:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains if needed
  },
  // If you're using path aliases (@/...)
  webpack: (config) => {
    return config;
  },
}

export default nextConfig;
```

---

## Step 5: Update tsconfig.json

Update your `tsconfig.json` to work with Next.js:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "allowJs": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Step 6: Create Root Layout (app/layout.tsx)

This replaces your `App.tsx` and sets up providers:

```tsx
import type { Metadata } from 'next';
import { Inter, DM_Sans, Playfair_Display } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './globals.css'; // Your index.css renamed

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Kavya's Portfolio",
  description: 'UX Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${playfair.variable}`}>
        <QueryClientProvider client={new QueryClient()}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
```

**Note:** Since `QueryClientProvider` needs to be a Client Component, you'll need to create a providers wrapper.

---

## Step 7: Create Providers Component

Create `app/providers.tsx`:

```tsx
'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

Then update `app/layout.tsx` to use it:

```tsx
import { Providers } from './providers';
// ... rest of imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
```

---

## Step 8: Create Global Styles

Rename `src/index.css` to `app/globals.css` and remove any Vite-specific references.

---

## Step 9: Convert Page Components

For each page, you'll need to:

### Example: app/page.tsx (Home)
```tsx
import Index from '@/src/pages/Index'; // or move the component

export default function HomePage() {
  return <Index />;
}
```

### Example: app/about/page.tsx
```tsx
import AboutMe from '@/src/pages/AboutMe';

export default function AboutPage() {
  return <AboutMe />;
}
```

**Better approach:** Move the actual page content from `src/pages/` into the new `app/` structure.

---

## Step 10: Update All Link Components

You've already started this! In all components, replace:

```tsx
// OLD
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>

// NEW
import Link from 'next/link';
<Link href="/about">About</Link>
```

**Important:** Change `to` prop to `href` prop in all Link components!

---

## Step 11: Handle Client-Side Components

Next.js uses Server Components by default. If a component uses hooks, state, or browser APIs, add `'use client'` at the top:

```tsx
'use client';

import { useState } from 'react';
// ... rest of component
```

Components that need `'use client'`:
- Components using `useState`, `useEffect`, etc.
- Components using browser APIs
- Event handlers (onClick, etc.)
- Your `WorkSection.tsx` (uses useState)

---

## Step 12: Update Image Imports

Replace `<img>` tags with Next.js `<Image>` component for optimization:

```tsx
import Image from 'next/image';

// Instead of:
<img src="/images/photo.png" alt="..." />

// Use:
<Image 
  src="/images/photo.png" 
  alt="..." 
  width={500} 
  height={500}
/>
```

---

## Step 13: Move Public Assets

Ensure all images in `/images/` are in the `public/` directory:
- `public/images/...` ✅

---

## Step 14: Remove Vite-Specific Files

Delete:
- `vite.config.ts`
- `src/vite-env.d.ts`
- `src/main.tsx`
- `index.html`

---

## Step 15: Create not-found.tsx

Create `app/not-found.tsx`:

```tsx
import NotFound from '@/src/pages/NotFound';

export default function NotFoundPage() {
  return <NotFound />;
}
```

---

## Step 16: Test the Migration

```bash
npm run dev
```

Visit `http://localhost:3000` and test:
- ✅ Home page loads
- ✅ Navigation works
- ✅ All routes are accessible
- ✅ Images load correctly
- ✅ Styles are applied

---

## Step 17: Fix Common Issues

### Issue: "use client" directive needed
**Solution:** Add `'use client'` to components using hooks or browser APIs

### Issue: Hydration errors
**Solution:** Ensure server and client render the same initial HTML

### Issue: Images not loading
**Solution:** Check paths - Next.js serves from `public/` directory

### Issue: Path aliases not working
**Solution:** Update `tsconfig.json` paths and `next.config.mjs`

---

## Migration Checklist

- [ ] Install Next.js dependencies
- [ ] Update package.json scripts
- [ ] Create app/ directory structure
- [ ] Create next.config.mjs
- [ ] Update tsconfig.json
- [ ] Create app/layout.tsx
- [ ] Create app/providers.tsx
- [ ] Move/create all page files
- [ ] Update all Link imports (react-router-dom → next/link)
- [ ] Change all `to` props to `href` in Links
- [ ] Add 'use client' to client components
- [ ] Move global styles
- [ ] Optimize images with next/image
- [ ] Delete Vite files
- [ ] Test all routes
- [ ] Test all functionality
- [ ] Update deployment configuration

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

## Notes

- This migration will take several hours to complete properly
- Test thoroughly after each major step
- Consider migrating in a separate git branch
- Some dependencies may need updates for Next.js compatibility
