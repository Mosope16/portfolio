export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-6 mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold tracking-tighter">
          M<span className="text-accent-cyan">.</span>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Mosopefoluwa. All rights reserved.
        </p>
        
        <div className="text-gray-500 text-sm">
          Built with Next.js, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
}
