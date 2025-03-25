import { Link } from '@remix-run/react';

export default function NotFound() {
    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col gap-4">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-xl text-muted-foreground">Page not found</p>
            <Link to="/">{"<"} Go back home</Link>
        </div>
    );
}
