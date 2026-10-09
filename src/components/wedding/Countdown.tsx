import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-12-09T17:00:00").getTime();

function diff() {
  const d = WEDDING_DATE - Date.now();
  const clamp = Math.max(0, d);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

interface CountdownProps {
  labels: readonly string[];
}

export default function Countdown({ labels }: CountdownProps) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setT(diff());
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);
  const items = [
    { label: labels[0], value: t.days },
    { label: labels[1], value: t.hours },
    { label: labels[2], value: t.minutes },
    { label: labels[3], value: t.seconds },
  ];
  return (
    <div className="flex flex-nowrap justify-center gap-2 sm:gap-6" suppressHydrationWarning>
      {items.map((i) => (
        <div
          key={i.label}
          className="luxury-card flex w-[68px] flex-col items-center px-1 py-3 sm:w-28 sm:px-2 sm:py-6"
        >
          <span className="font-serif-lux text-4xl font-semibold text-gold mb-2 mb-md-3" suppressHydrationWarning>
            {mounted ? String(i.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 font-display text-[9px] tracking-[0.2em] text-champagne sm:text-xs sm:tracking-[0.3em]">
            {i.label}
          </span>
        </div>
      ))}
    </div>
  );
}
