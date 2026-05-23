import { Sparkles } from "lucide-react";

export function MottoBanner() {
  return (
    <div className="bg-gradient-brand py-4 overflow-hidden flex relative z-20 shadow-glow-lg border-y border-white/10">
      <div className="flex whitespace-nowrap style-marquee items-center">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-xl sm:text-2xl uppercase tracking-[0.2em] font-bold mx-8 text-white drop-shadow-sm">
              Your Journey, Our Responsibility
            </span>
            <Sparkles className="text-white/50 mx-2 shrink-0" size={24} />
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .style-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}} />
    </div>
  );
}
