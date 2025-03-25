## Euricom Theme Integration

This package provides a basic brand theme for internal Euricom projects that follows our new branding guidelines. It supports both light and dark themes out of the box.

⚠️ **Important**: Your project must use Tailwind CSS v4 to work with this theming system.

## Installation and Run Euricom Theme Previews

```sh
npm install    # Install dependencies
npm run dev    # Start dev server
```

### Option 1: Basic Tailwind Theme (Without ShadcN)

If you want to use only the Euricom theme colors with Tailwind:

1. Copy `tailwind.euri.css` from the `app` folder into your project
2. Use this as your main styling entry point
3. The theme restricts color usage to only Euricom-approved colors via the `@theme` configuration
   - To use Tailwind's default colors as well, remove the `color*` initial line (not recommended)

### Option 2: Full Theme with ShadcN Components

For projects using ShadcN components:

1. Copy both CSS files from the `app` folder:
   - `tailwind.euri.css` - Main Euricom theming
   - `tailwind.css` - ShadcN component styling

2. Copy the following modified ShadcN components to replace the default ones:
   - `button.tsx`
   - `input.tsx`
   - `textarea.tsx`

These components have been specifically modified to work with our theming system.

### Theme Switching

The theme includes both light and dark modes. The system respects the user's system preferences by default but can be toggled manually using the provided theme toggle component.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
