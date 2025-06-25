# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js 15.3.4 project with TypeScript and Tailwind CSS, using the App Router architecture and organized with a `src/` directory structure.

## Tech Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## Project Structure
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable React components
- `public/` - Static assets
- Import alias `@/*` maps to `src/*`

## Development Guidelines
- Use TypeScript for all new files
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Components should be functional components with TypeScript
- Use proper TypeScript types and interfaces
- Follow ESLint rules and Next.js best practices

## Common Patterns
- Server Components by default, use 'use client' directive when needed
- Use Next.js built-in components (Image, Link, etc.)
- Implement proper SEO with metadata API
- Use Tailwind utility classes for styling
- Follow mobile-first responsive design approach
