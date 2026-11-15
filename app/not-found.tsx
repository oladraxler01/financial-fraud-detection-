import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-[#171C26]">Page Not Found</h2>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        The requested screening page could not be located.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-full bg-[#171C26] text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}

