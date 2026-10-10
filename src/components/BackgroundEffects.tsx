"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#0B0F19]">
      {/* Subtle Noise / Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top Ambient Glow (Indigo & Lavender) */}
      <div
        className="absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 bg-gradient-to-br from-[#6366F1] via-[#A78BFA] to-transparent animate-ambient"
        style={{
          transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Hero Ambient Glow (Soft Pink & Violet) */}
      <div
        className="absolute top-[25%] -right-[10%] w-[550px] h-[550px] rounded-full blur-[150px] opacity-20 bg-gradient-to-bl from-[#F472B6] via-[#A78BFA] to-transparent animate-ambient-slow"
        style={{
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Projects Section Ambient Glow (Deep Indigo) */}
      <div
        className="absolute top-[55%] left-[5%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-15 bg-gradient-to-tr from-[#6366F1] via-[#4338CA] to-transparent animate-ambient"
      />

      {/* Footer Ambient Glow (Soft Pink) */}
      <div
        className="absolute bottom-[-10%] right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 bg-gradient-to-t from-[#F472B6]/30 via-[#A78BFA]/20 to-transparent"
      />

      {/* Subtle Floating Sparkles */}
      <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 bg-[#F472B6] rounded-full opacity-60 animate-ping" />
      <div className="absolute top-[32%] right-[28%] w-1 h-1 bg-[#A78BFA] rounded-full opacity-70 animate-pulse" />
      <div className="absolute top-[70%] left-[12%] w-1.5 h-1.5 bg-[#6366F1] rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-[82%] right-[18%] w-1 h-1 bg-[#F472B6] rounded-full opacity-60 animate-ping" />
    </div>
  );
}
