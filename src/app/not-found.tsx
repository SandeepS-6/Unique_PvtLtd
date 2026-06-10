import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6">
      <div className="text-center">
        <span className="text-8xl font-extrabold text-accent">404</span>
        <h1 className="mt-4 text-3xl font-bold text-text-primary">Page not found</h1>
        <p className="mt-3 text-text-secondary">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-text-dark hover:scale-105 transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
