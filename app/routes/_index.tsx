import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  // Instead of auto-redirecting, we'll render a landing page
  return json({});
};

export default function Index() {
  return (
    <div className="space-y-8 text-center">
      <h1 className="text-5xl font-bold mb-8">Theme Showcase</h1>

      <p className="text-xl max-w-md mx-auto mb-8">Choose a theme implementation to explore:</p>

      <div className="flex justify-center gap-6">
        <Link
          to="/default-theme"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition-colors"
        >
          Default Theme
        </Link>

        <Link
          to="/shadcn-theme"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg transition-colors"
        >
          Shadcn Theme
        </Link>
      </div>
    </div>
  );
}
