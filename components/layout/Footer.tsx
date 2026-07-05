export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Akash Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}