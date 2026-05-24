export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Structural fine grids */}
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.7]"></div>
      
      {/* Soft ambient light glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square glow-blue opacity-80 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square glow-red opacity-60"></div>
      
      {/* Sleek edge highlights */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent"></div>
    </div>
  );
}
