import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: () => React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * ClientOnly component ensures content only renders on the client,
 * preventing hydration mismatches with browser-only APIs.
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children()}</>;
}
