import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7FAFC] px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16A6C9]">ISML</p>
        <h1 className="mt-4 text-4xl font-black text-[#0F172A]">Page not found</h1>
        <p className="mt-4 max-w-lg text-[#64748B]">
          The page you are looking for is unavailable. Return to the Synergy Pro franchise landing page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#0B4EA2] px-6 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
