import { Home } from 'lucide-react';
import { ThemeToggle } from './components/theme-toggle';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './lib/theme';
import { Link, Route, Routes } from 'react-router';
import DefaultTheme from './pages/DefaultTheme';
import ShadcnTheme from './pages/ShadcnTheme';

// Determine which navigation link is active based on the current path
const isActive = (path: string) => {
  return location.pathname === path ? 'bg-secondary text-secondary-content' : 'hover:bg-accent/50';
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      {/* Navigation Bar with Theme Toggle */}
      <div className="w-full px-4 py-2 mb-6 sticky top-0 bg-base-100 z-50 border-b border-base-300">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <nav className="flex space-x-2 border rounded-lg p-1 bg-base-100">
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

      <main className="p-4 max-w-screen-lg mx-auto">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="default-theme" element={<DefaultTheme />} />
          <Route path="shadcn-theme" element={<ShadcnTheme />} />
        </Routes>
      </main>

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
