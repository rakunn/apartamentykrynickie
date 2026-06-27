# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 apartment rental website for "Apartamenty Krynickie" in Krynica, Poland. The site showcases two apartments: Magnolia (2-room, 41m²) and Storczyk (1-room, 28m²) with image galleries, amenities, and booking information.

## Common Development Commands

```bash
# Development
npm run dev           # Start development server on localhost:3000

# Building & Production
npm run build         # Build for production
npm run start         # Start production server

# Code Quality
npm run lint          # Run ESLint linting
```

## Architecture & Key Patterns

### Project Structure
- **App Router**: Uses Next.js 14 App Router (`src/app/`)
- **Component Architecture**: Shared components in `src/app/components/`
- **Configuration Pattern**: Apartment data in `magnoliaConfig.tsx` and `storczykConfig.tsx`
- **Custom Icons**: SVG components in `src/icons/` for apartment amenities
- **Static Assets**: Apartment photos organized in `/public/magnolia/` and `/public/storczyk/`

### Data Configuration Pattern
Each apartment has a configuration file exporting:
- `photos`: Array of image objects with `original`, `thumbnail`, `loading`, and `originalAlt` properties
- `amenities`: Array with `label` (Polish text) and `Icon` (React component) properties
- Configuration files are imported into `page.tsx` and passed to the `ApartamentLayout` component

### Icon System
- **FontAwesome Icons**: For common amenities (WiFi, elevator, parking, TV)
- **Custom SVG Components**: For specific amenities (dryer, refrigerator, dishwasher, etc.)
- Icons imported from `@/icons/` with consistent naming pattern (`DryerIcon`, `KettleIcon`, etc.)

### Styling Approach
- **Tailwind CSS**: Primary styling with custom color `primary: "#e4b471"`
- **Global Styles**: In `src/app/globals.css`
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints

### SEO Configuration
- **Metadata**: Comprehensive SEO setup in `layout.tsx` with Polish keywords
- **Language**: Set to Polish (`lang="pl"`)
- **Image Optimization**: WebP format images, Next.js Image component optimization
- **Sitemap**: Available at `/sitemap.xml`
- **Robots**: Configured for search engine indexing

### Image Management
- **Format**: WebP for optimization
- **Organization**: Numbered sequentially (1.webp-15.webp) per apartment
- **Gallery**: Uses `react-image-gallery` for photo displays
- **External Images**: Configured for `www.lawendakrynicka.pl` domain

## TypeScript Configuration

- **Strict Mode**: Enabled with comprehensive type checking
- **Path Aliases**: `@/*` maps to `./src/*`
- **Next.js Plugin**: Integrated for optimal Next.js development

## Important Notes

- **No Testing Framework**: Project currently has no test setup
- **Deployment**: Configured for Vercel deployment
- **Font**: Uses Inter font from Google Fonts
- **Language**: Content is in Polish
- **Target Audience**: Local apartment rental market in Krynica

## File Naming Conventions

- **Components**: PascalCase with descriptive names (`ApartamentLayout.tsx`, `ThreeHeroImages.tsx`)
- **Config Files**: camelCase with apartment name prefix (`magnoliaConfig.tsx`)
- **Icons**: PascalCase with `Icon` suffix (`DryerIcon.tsx`)
- **Images**: Numbered sequence with apartment folder (`/magnolia/1.webp`)