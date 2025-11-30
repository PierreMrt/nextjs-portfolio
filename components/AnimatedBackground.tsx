'use client'

import { useTheme } from './ThemeProvider'

export default function AnimatedBackground() {
  const { theme } = useTheme()
  
  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br ${
        theme === 'dark' 
          ? 'from-[#18181c] to-[#27272e]'
          : 'from-[#52a59f] via-[#69bc81] to-[#75c971]'
      }`}
    >
      {/* Big, medium, small – all mixed */}
      <div className="absolute w-44 h-44 bg-white/15 dark:bg-white/[0.02] blur-s animate-float-up-1 bottom-0 left-[8%] rotate-12"></div>
      <div className="absolute w-16 h-16 bg-white/10 dark:bg-white/[0.02] blur-s animate-float-up-2 bottom-0 left-[25%] -rotate-6"></div>
      <div className="absolute w-56 h-56 bg-white/12 dark:bg-white/[0.02] blur-s animate-float-up-3 bottom-0 left-[48%] rotate-45"></div>
      <div className="absolute w-24 h-24 bg-white/15 dark:bg-white/[0.02] blur-s animate-float-up-4 bottom-0 right-[32%] -rotate-12"></div>
      <div className="absolute w-80 h-80 bg-white/10 dark:bg-white/[0.02] blur-s animate-float-up-5 bottom-0 right-[18%] rotate-6"></div>
      <div className="absolute w-12 h-12 bg-white/15 dark:bg-white/[0.02] blur-s animate-float-up-6 bottom-0 right-[6%] -rotate-45"></div>

      {/* Additional squares for continuous effect (same sizes, different positions & delays) */}
      <div className="absolute w-44 h-44 bg-white/10 dark:bg-white/[0.02] blur-s animate-float-up-1 -bottom-32 left-[15%] rotate-12 animation-delay-8000 opacity-0"></div>
      <div className="absolute w-20 h-20 bg-white/15 dark:bg-white/[0.02] blur-s animate-float-up-2 -bottom-32 left-[35%] -rotate-6 animation-delay-10000 opacity-0"></div>
      <div className="absolute w-28 h-28 bg-white/12 dark:bg-white/[0.02] blur-s animate-float-up-3 -bottom-32 right-[40%] rotate-45 animation-delay-12000 opacity-0"></div>
      <div className="absolute w-52 h-52 bg-white/10 dark:bg-white/[0.02] blur-s animate-float-up-4 -bottom-32 right-[20%] -rotate-12 animation-delay-14000 opacity-0"></div>
    </div>
  )
}
