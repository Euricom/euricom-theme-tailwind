## Euricom Theme Integration

This package provides a basic brand theme for internal Euricom projects that follows our new branding guidelines. It supports both light and dark themes out of the box.

⚠️ **Important**: Your project must use Tailwind CSS v4 to work with this theming system. If you already have Tailwind CSS v3 installed in your project, you should upgrade it to tailwind CSS v4.

## Installation and Run Euricom Theme Previews

```sh
npm install    # Install dependencies or "pnpm install"
npm run dev    # Start dev server or "pnpm run dev"
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

2. Use the `tailwind.css` file as your main styling entry point, the default `tailwind.euri.css` is imported in the `tailwind.css` file.
3. Copy the following modified ShadcN components to replace the default ones:
   - `button.tsx`
   - `input.tsx`
   - `textarea.tsx`
   - `tabs.tsx`

These components have been specifically modified to work with our theming system.

### Theme Switching

The theme includes both light and dark modes. The system respects the user's system preferences by default but can be toggled manually using the provided theme toggle component.
