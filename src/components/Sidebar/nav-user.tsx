import { LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../ui/dropdown-menu';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export type NavUser = {
  name: string;
  avatar: string;
};

export function NavUser({ user }: { user: NavUser }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/sign-in');
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="flex items-center justify-between">
              <img src={user.avatar} alt="User avatar" className="h-8 w-8 rounded-full object-cover" />
              <p>Hi, {user.name}!</p>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
