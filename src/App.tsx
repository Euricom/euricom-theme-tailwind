import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './lib/theme';
import { Route, Routes, useLocation, Navigate } from 'react-router';
import DefaultTheme from './pages/DefaultTheme';
import ShadcnTheme from './pages/ShadcnTheme';
import SignIn from './pages/SingIn';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/Sidebar/app-sidebar';

function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/sign-in';

  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <SidebarProvider>
        {!isSignInPage && <AppSidebar />}
        <main className="w-full min-h-screen">
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<DefaultTheme />} />
            <Route path="/default-theme" element={<DefaultTheme />} />
            <Route path="/shadcn-theme" element={<ShadcnTheme />} />
            <Route path="*" element={<Navigate to="/sign-in" replace />} />
          </Routes>
        </main>
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
