# Multi-Tenant Todo Application

This project demonstrates a multi-tenant Todo application built with Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4, and a shared UI library based on Reka UI with CVA for component variant management.

## Architecture Overview

```
monorepo-template/
├── packages/
│   ├── ui/        # Shared UI Component Library
│   │ 
│   └── base/      # Base Nuxt Application Template
│
├── tenants/
│   ├── clientA/   # Tenant A (Basic Features)
│   └── clientB/   # Tenant B (Extended Features)
```

## Features Implemented

### Core Features (All Tenants)
- ✅ **Add Todo**: Input field with validation, prevents empty todos
- ✅ **Check/Uncheck Todo**: Toggle completion state with visual indicators
- ✅ **Delete Todo**: Remove todos from the list
- ✅ **Responsive Design**: Mobile and desktop optimized
- ✅ **Consistent Styling**: Tailwind CSS v4 with tenant-specific overrides

### Tenant-Specific Features

#### Tenant A (clientA)
- ✅ Core features only: Add, Check, Delete
- ✅ No category support
- ✅ Basic styling and functionality

#### Tenant B (clientB)
- ✅ All core features
- ✅ **Category Support**: Optional category input when adding todos
- ✅ **Category Display**: Categories shown as badges/tags
- ✅ **Enhanced Styling**: Green theme for visual differentiation




## Development

### Setup
```bash
# Install dependencies
pnpm i

# Build UI library
pnpm build:ui
```

### Running Development Servers
```bash
# Base application
pnpm dev:base

# Tenant A (basic features)
pnpm dev:clientA

# Tenant B (extended features with categories)
pnpm dev:clientB
```

### Test Commands
```bash
# Run UI library tests
pnpm test:ui

# Run Base tests
pnpm test:base
```

## Tenant Configuration

The tenant system uses runtime configuration to enable/disable features:

```typescript
// useTenant.ts
const TENANT_CONFIGS: Record<string, TenantConfig> = {
  'clientA': {
    name: 'Client A',
    features: {
      todoCategories: false, // Disabled
    },
  },
  'clientB': {
    name: 'Client B', 
    features: {
      todoCategories: true,  // Enabled
    },
  },
}
```

## Technology Stack

- **Frontend Framework**: Nuxt 4 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Component Library**: Reka UI
- **Variant Management**: Class Variance Authority (CVA)
- **Testing**: Vitest + Vue Test Utils
- **Package Manager**: pnpm
- **Build Tool**: Vite

## Conclusion

This implementation demonstrates a complete multi-tenant todo application following modern best practices:

1. **Modular Design**: Clean separation between UI library, base application, and tenant customizations
2. **Type Safety**: Full TypeScript coverage with proper interfaces
3. **Testing Coverage**: Comprehensive unit tests for components and business logic
4. **Scalable Architecture**: Easy to extend with new features and tenants
5. **Modern Tooling**: Latest versions of Vue 3, Nuxt 4, and supporting libraries
