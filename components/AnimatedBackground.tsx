export default function AnimatedBackground() {
  return (
    <div
      className="
        fixed inset-0 -z-10 overflow-hidden
        bg-gradient-to-br
        from-[#52a59f]
        via-[#69bc81]
        to-[#75c971]
      "
    >
      {/* Floating squares that move up and rotate */}
      <div className="absolute w-32 h-32 bg-white/15 blur-s animate-float-up-1 bottom-0 left-[10%] rotate-12"></div>
      <div className="absolute w-24 h-24 bg-white/10 blur-s animate-float-up-2 bottom-0 left-[25%] -rotate-6"></div>
      <div className="absolute w-40 h-40 bg-white/12 blur-s animate-float-up-3 bottom-0 left-[45%] rotate-45"></div>
      <div className="absolute w-28 h-28 bg-white/15 blur-s animate-float-up-4 bottom-0 right-[30%] -rotate-12"></div>
      <div className="absolute w-36 h-36 bg-white/10 blur-s animate-float-up-5 bottom-0 right-[15%] rotate-6"></div>
      <div className="absolute w-20 h-20 bg-white/15 blur-s animate-float-up-6 bottom-0 right-[5%] -rotate-45"></div>
      
      {/* Additional squares for continuous effect */}
      <div className="absolute w-32 h-32 bg-white/10 blur-s animate-float-up-1 -bottom-32 left-[15%] rotate-12 animation-delay-8000"></div>
      <div className="absolute w-28 h-28 bg-white/15 blur-s animate-float-up-2 -bottom-32 left-[35%] -rotate-6 animation-delay-10000"></div>
      <div className="absolute w-24 h-24 bg-white/12 blur-s animate-float-up-3 -bottom-32 right-[40%] rotate-45 animation-delay-12000"></div>
      <div className="absolute w-36 h-36 bg-white/10 blur-s animate-float-up-4 -bottom-32 right-[20%] -rotate-12 animation-delay-14000"></div>
    </div>
  )
}
