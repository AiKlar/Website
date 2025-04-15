# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style Guidelines
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import { cn } from "@/lib/utils"`)
- **Component Structure**: Functional components with named exports
- **TypeScript**: Strict mode is relaxed - `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals` are disabled
- **Formatting**: Use TypeScript (.tsx) files for components
- **UI Components**: Use shadcn/ui components from `@/components/ui/*`
- **Utility Functions**: Place in `@/lib/` directory
- **Custom Hooks**: Place in `@/hooks/` directory with `use-` prefix
- **CSS**: Use Tailwind utility classes with `cn()` utility for conditional class names
- **Error Handling**: Use try/catch for async operations