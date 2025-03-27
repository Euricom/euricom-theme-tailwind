import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '~/lib/theme';
import { Switch } from './ui/switch';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Determine if dark mode is active
  const isDarkMode = theme === 'dark';

  // Wait for client-side hydration to avoid mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Before client-side hydration, render a placeholder
  if (!mounted) return <div className="w-[82px] h-[24px]" />;

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
    </div>
  );
}
