import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  return redirect('/shadcn-theme');
};

export default function Index() {
  // This component won't render because of the redirect
  return null;
}
