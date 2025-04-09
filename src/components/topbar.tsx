import { capitalizeWords } from '~/utils/string';
import { ToggleMode } from './toggle-mode';

interface TopbarProps {
  title?: string;
}

export function Topbar({ title }: TopbarProps = {}) {
  return (
    <div className="h-14 border-b border-s-euri-light-steel-gray bg-background flex justify-between items-center px-4">
      <h1 className="text-lg font-semibold">{capitalizeWords(title || '')}</h1>
      <ToggleMode />
    </div>
  );
}
