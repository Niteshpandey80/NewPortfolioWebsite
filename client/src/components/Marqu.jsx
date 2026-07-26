import { Sparkle } from "lucide-react";

const items = [
  "Design and Develop",
  "Building Logic",
  "Open for Opportunities",
];

export default function Marqu() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-6">

      <div className="absolute inset-0 bg-[radial-gradient(#d6d6d6_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative -rotate-1 border-y-2 border-black bg-orange-500 py-4 shadow-xl">

        <div className="flex w-max animate-marquee">

          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  {items.map((item) => (
                    <div key={item} className="flex shrink-0 items-center">
                      <span className="whitespace-nowrap px-6 font-mono text-lg font-bold uppercase tracking-widest text-white sm:text-xl">
                        {item}
                      </span>
                      <Sparkle
                        size={16}
                        className="shrink-0 fill-black text-black"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}