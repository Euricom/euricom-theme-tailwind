import type { LinksFunction } from '@remix-run/node';
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';

import { ThemeToggle } from './components/theme-toggle';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './lib/theme';
import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Determine which navigation link is active based on the current path
  const isActive = (path: string) => {
    return location.pathname === path ?
      "bg-primary text-primary-foreground" :
      "hover:bg-muted";
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
          {/* Navigation Bar with Theme Toggle */}
          <div className="max-w-screen-lg mx-auto px-4 py-4 mb-6">
            <div className="flex justify-between items-center">
              <nav className="flex space-x-2 border rounded-lg p-1">
                <Link
                  to="/default-theme"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/default-theme')}`}
                >
                  Default Theme
                </Link>
                <Link
                  to="/shadcn-theme"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/shadcn-theme')}`}
                >
                  Shadcn Theme
                </Link>
              </nav>


              <ThemeToggle />
            </div>
          </div>


          <main className='p-4 max-w-screen-lg mx-auto'>
            {children}
          </main>

          <Toaster />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
