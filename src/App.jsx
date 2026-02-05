import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

export default function App() {
  const [yes, setYes] = useState(false)

  useEffect(() => {
    if (yes) {
      confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 },
      })
    }
  }, [yes])

  return (
    <div className="relative min-h-screen overflow-hidden  from-rose-600 via-pink-500 to-red-600 flex items-center justify-center px-4 contain">
      
      {/* 🌸 Floating Hearts */}
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 text-3xl animate-float opacity-70"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        >
          🌹
        </span>
      ))}

      {/* 💎 Glass Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 text-center text-white animate-fade-in">
        
        {!yes ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              What's up Bebe 💕
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Want to ask you one simple question on my mind🥹
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              Will you be my Valentine? 💖💍
            </h2>

            <div className="flex justify-center gap-6 relative">
              <button
                onClick={() => setYes(true)}
                className="px-8 py-3 rounded-full bg-white text-pink-600 font-bold text-lg shadow-lg hover:scale-110 hover:shadow-pink-300 transition-all duration-300"
              >
                YES ❤️
              </button>

              <button
                onMouseEnter={(e) => {
                  e.target.style.position = "absolute"
                  e.target.style.top = Math.random() * 80 + "%"
                  e.target.style.left = Math.random() * 80 + "%"
                }}
                className="px-8 py-3 rounded-full bg-pink-700 font-bold text-lg shadow-md transition"
              >
                NO 😅
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-bounce">
              YAAAY!!! 💕🥰
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              You just made me the happiest guy ever 😭💖  
              I can’t wait to celebrate the day with u ❤️
            </p>
          </>
        )}
      </div>
    </div>
  )
}
