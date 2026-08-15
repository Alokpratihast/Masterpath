type MarqueeProps = {
  items: string[];
  /** seconds for one full loop — lower = faster */
  speed?: number;
  textColor?: string;
  dotColor?: string;
  className?: string;
};

export default function Marquee({
  items,
  speed = 25,
  textColor = "#47536F",
  dotColor = "#2E5EFF",
  className = "",
}: MarqueeProps) {
  // duplicate items so the loop is seamless
  const loopItems = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-5"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 whitespace-nowrap text-sm font-semibold"
            style={{ color: textColor }}
          >
            {item}
            <span
              className="h-1 w-1 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
