import { NavItem, NavMain } from './nav-main';
import { NavUser } from './nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '~/components/ui/sidebar';
import UserImage from '~/assets/user-image.jpg';
import { useSearchParams } from 'react-router';
import { Palette, Layout } from 'lucide-react';
import { capitalize } from '~/utils/string';

type Theme = 'default' | 'shadcn';
type Variant = 'sidebar' | 'floating' | 'inset';

const DEFAULT_THEME: Theme = 'default';
const DEFAULT_VARIANT: Variant = 'sidebar';

const user: NavUser = {
  name: 'username',
  avatar: UserImage,
};

export function AppSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const variant = (searchParams.get('variant') as Variant) || DEFAULT_VARIANT;
  const theme = (searchParams.get('theme') as Theme) || DEFAULT_THEME;

  const updateSearchParams = (key: 'theme' | 'variant', value: string) => {
    setSearchParams(prev => ({ ...Object.fromEntries(prev), [key]: value }));
  };

  const createSubItems = (type: 'theme' | 'variant', values: string[], currentValue: string) =>
    values.map(value => ({
      title: capitalize(value),
      action: () => updateSearchParams(type, value),
      isActive: currentValue === value,
    }));

  const navItems: NavItem[] = [
    {
      title: 'Theme',
      icon: Palette,
      subItems: createSubItems('theme', ['default', 'shadcn'], theme),
    },
    {
      title: 'Sidebar',
      icon: Layout,
      subItems: createSubItems('variant', ['sidebar', 'floating', 'inset'], variant),
    },
  ];

  return (
    <Sidebar collapsible="icon" variant={variant}>
      <SidebarHeader className="h-14 border-b border-s-euri-light-steel-gray p-2 px-4">
        <div className="bg-euricom-logo-image bg-contain bg-no-repeat w-full h-full"></div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} title="Variants" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
