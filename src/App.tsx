import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './lib/theme';
import { Route, Routes, Navigate } from 'react-router';
import SignIn from './pages/SingIn';
import Layout from './pages/Layout';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
