import { useSearchParams } from 'react-router';
import { AppSidebar } from '~/components/Sidebar/app-sidebar';
import { SidebarProvider } from '~/components/ui/sidebar';
import { Topbar } from '~/components/topbar';
import ShadcnTheme from './Theme/ShadcnTheme';
import DefaultTheme from './Theme/DefaultTheme';

export default function Layout() {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get('theme');

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Topbar title={`Theme: ${theme === 'shadcn' ? 'Shadcn' : 'Default'}`} />
          {theme === 'shadcn' ? <ShadcnTheme /> : <DefaultTheme />}
        </div>
      </div>
    </SidebarProvider>
  );
}
