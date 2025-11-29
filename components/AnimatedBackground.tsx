export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating blobs */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob top-0 -left-20"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-0 -right-20"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0 left-20"></div>
      <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-3000 bottom-20 right-40"></div>
      
      {/* Additional smaller shapes for depth */}
      <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-1000 top-1/3 left-1/4"></div>
      <div className="absolute w-72 h-72 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-5000 top-1/2 right-1/4"></div>
    </div>
  )
}
