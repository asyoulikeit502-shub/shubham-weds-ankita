import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { languageLabels, type Language, type WeddingCopy } from "./copy";

interface Props {
  onOpen: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: WeddingCopy["curtain"];
}

export default function Curtain({ onOpen, language, onLanguageChange, copy }: Props) {
  const leftRef = useRef<SVGGElement>(null);
  const rightRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [opening, setOpening] = useState(false);

  const resetPageScroll = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const handleOpen = () => {
    if (opening) return;
    resetPageScroll();
    setOpening(true);
    const tl = gsap.timeline({
      onComplete: () => {
        resetPageScroll();
        onOpen();
        requestAnimationFrame(resetPageScroll);
        gsap.to(wrapRef.current, {
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.2,
          onComplete: () => {
            if (wrapRef.current) wrapRef.current.style.display = "none";
          },
        });
      },
    });
    tl.to(contentRef.current, { autoAlpha: 0, y: -20, duration: 0.7, ease: "power2.in" }, 0)
      .to(leftRef.current, { x: "-105%", duration: 3.2, ease: "power3.inOut" }, 0.2)
      .to(rightRef.current, { x: "105%", duration: 3.2, ease: "power3.inOut" }, 0.2);
  };

  const nextLanguage: Language = language === "bn" ? "en" : "bn";

  useEffect(() => {
    // entrance shimmer of content
    gsap.from(contentRef.current, { autoAlpha: 0, y: 40, duration: 1.6, ease: "power2.out" });
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[100] overflow-hidden bg-night"
      aria-hidden={opening}
    >
      {/* Stage glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.18), transparent 55%), #140707",
        }}
      />

      {/* SVG curtains */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Velvet fabric gradient with folds */}
          <linearGradient id="velvetLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a0008" />
            <stop offset="8%" stopColor="#7A0019" />
            <stop offset="16%" stopColor="#4a000d" />
            <stop offset="24%" stopColor="#7A0019" />
            <stop offset="34%" stopColor="#5C0013" />
            <stop offset="44%" stopColor="#7A0019" />
            <stop offset="55%" stopColor="#4a000d" />
            <stop offset="68%" stopColor="#7A0019" />
            <stop offset="80%" stopColor="#5C0013" />
            <stop offset="92%" stopColor="#7A0019" />
            <stop offset="100%" stopColor="#2a0007" />
          </linearGradient>
          <linearGradient id="velvetRight" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#3a0008" />
            <stop offset="8%" stopColor="#7A0019" />
            <stop offset="16%" stopColor="#4a000d" />
            <stop offset="24%" stopColor="#7A0019" />
            <stop offset="34%" stopColor="#5C0013" />
            <stop offset="44%" stopColor="#7A0019" />
            <stop offset="55%" stopColor="#4a000d" />
            <stop offset="68%" stopColor="#7A0019" />
            <stop offset="80%" stopColor="#5C0013" />
            <stop offset="92%" stopColor="#7A0019" />
            <stop offset="100%" stopColor="#2a0007" />
          </linearGradient>
          <linearGradient id="goldEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8a6d1a" />
          </linearGradient>
          <linearGradient id="valance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C0013" />
            <stop offset="100%" stopColor="#7A0019" />
          </linearGradient>
        </defs>

        {/* Top valance / pelmet */}
        <g>
          <rect x="0" y="0" width="100" height="8" fill="url(#valance)" />
          {/* scalloped bottom edge */}
          <path
            d="M0 8 Q5 14 10 8 T20 8 T30 8 T40 8 T50 8 T60 8 T70 8 T80 8 T90 8 T100 8 L100 0 L0 0 Z"
            fill="url(#valance)"
          />
          <path
            d="M0 8 Q5 14 10 8 T20 8 T30 8 T40 8 T50 8 T60 8 T70 8 T80 8 T90 8 T100 8"
            stroke="url(#goldEdge)"
            strokeWidth="0.4"
            fill="none"
          />
          {/* gold tassels */}
          {Array.from({ length: 11 }).map((_, i) => (
            <g key={i}>
              <circle cx={i * 10} cy={13.5} r={0.7} fill="#D4AF37" />
              <line x1={i * 10} y1={14} x2={i * 10} y2={16.5} stroke="#D4AF37" strokeWidth={0.25} />
            </g>
          ))}
        </g>

        {/* Left curtain panel */}
        <g ref={leftRef}>
          <rect x="0" y="0" width="50" height="100" fill="url(#velvetLeft)" />
          {/* fold highlights */}
          {[6, 14, 22, 30, 38, 46].map((x) => (
            <rect
              key={x}
              x={x}
              y="0"
              width="0.4"
              height="100"
              fill="rgba(0,0,0,0.35)"
            />
          ))}
          {/* gold inner edge */}
          <rect x="49.4" y="0" width="0.6" height="100" fill="url(#goldEdge)" />
          {/* gold embroidery trim */}
          <g opacity="0.85">
            {Array.from({ length: 20 }).map((_, i) => (
              <circle key={i} cx={48.8} cy={i * 5 + 2} r={0.25} fill="#D4AF37" />
            ))}
          </g>
          {/* luxury tassel tie-back */}
          <g>
            {/* braided cord wrapping the curtain */}
            <path
              d="M30 55 Q42 58 47 62 Q49 64 47 66 Q42 68 30 65"
              stroke="url(#goldEdge)"
              strokeWidth="0.7"
              fill="none"
            />
            {/* knot */}
            <ellipse cx="30" cy="60" rx="1.6" ry="2" fill="url(#goldEdge)" />
            <ellipse cx="30" cy="60" rx="0.8" ry="1.1" fill="#8a6d1a" />
            {/* tassel head */}
            <ellipse cx="30" cy="63.5" rx="1.8" ry="2.4" fill="url(#goldEdge)" />
            {/* tassel skirt strands */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={i}
                x1={28.4 + i * 0.4}
                y1="65.5"
                x2={28.2 + i * 0.45}
                y2="71"
                stroke="#D4AF37"
                strokeWidth="0.22"
              />
            ))}
            <ellipse cx="30" cy="71.2" rx="2" ry="0.35" fill="#8a6d1a" opacity="0.6" />
          </g>
        </g>

        {/* Right curtain panel */}
        <g ref={rightRef}>
          <rect x="50" y="0" width="50" height="100" fill="url(#velvetRight)" />
          {[54, 62, 70, 78, 86, 94].map((x) => (
            <rect key={x} x={x} y="0" width="0.4" height="100" fill="rgba(0,0,0,0.35)" />
          ))}
          <rect x="50" y="0" width="0.6" height="100" fill="url(#goldEdge)" />
          <g opacity="0.85">
            {Array.from({ length: 20 }).map((_, i) => (
              <circle key={i} cx={51.2} cy={i * 5 + 2} r={0.25} fill="#D4AF37" />
            ))}
          </g>
          {/* luxury tassel tie-back (mirrored) */}
          <g>
            <path
              d="M70 55 Q58 58 53 62 Q51 64 53 66 Q58 68 70 65"
              stroke="url(#goldEdge)"
              strokeWidth="0.7"
              fill="none"
            />
            <ellipse cx="70" cy="60" rx="1.6" ry="2" fill="url(#goldEdge)" />
            <ellipse cx="70" cy="60" rx="0.8" ry="1.1" fill="#8a6d1a" />
            <ellipse cx="70" cy="63.5" rx="1.8" ry="2.4" fill="url(#goldEdge)" />
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={i}
                x1={68.4 + i * 0.4}
                y1="65.5"
                x2={68.2 + i * 0.45}
                y2="71"
                stroke="#D4AF37"
                strokeWidth="0.22"
              />
            ))}
            <ellipse cx="70" cy="71.2" rx="2" ry="0.35" fill="#8a6d1a" opacity="0.6" />
          </g>
        </g>
      </svg>

      {/* Center content overlay */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        {/* <div className="absolute right-4 top-5 sm:right-8 sm:top-8">
          <button
            type="button"
            onClick={() => onLanguageChange(nextLanguage)}
            className="group rounded-full border border-gold/60 bg-night/60 px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-champagne shadow-[0_10px_30px_-16px_rgba(212,175,55,0.8)] backdrop-blur transition hover:bg-gold hover:text-night sm:px-5 sm:text-sm"
            aria-label={`${copy.languageLabel}: ${languageLabels[language]}`}
          >
            <span className="text-gold group-hover:text-night">{languageLabels[language]}</span>
            <span className="mx-2 text-champagne/50">/</span>
            <span>{languageLabels[nextLanguage]}</span>
          </button>
        </div> */}
          <button
          type="button"
          onClick={() => onLanguageChange(nextLanguage)}
          className="language_btn group rounded-full border border-gold/60 bg-night/60 px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-champagne shadow-[0_10px_30px_-16px_rgba(212,175,55,0.8)] backdrop-blur transition hover:bg-gold hover:text-night sm:px-5 sm:text-sm"
          aria-label={`${copy.languageLabel}: ${languageLabels[language]}`}
        >
          <span className="">{languageLabels[language]}</span>
          <span className="mx-2">/</span>
          <span>{languageLabels[nextLanguage]}</span>
        </button>
        <h1 className="mt-6 flex w-full max-w-5xl flex-col items-center justify-center gap-1 font-serif-lux font-medium text-ivory sm:grid sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-6">
          <span className="max-w-full text-center text-4xl leading-tight sm:justify-self-end sm:text-right sm:text-7xl md:text-8xl">
            {copy.groom}
          </span>

          <span className="justify-self-center font-light text-4xl leading-none text-red-600 sm:text-6xl md:text-7xl">
            ❤️
          </span>

          <span className="max-w-full text-center text-4xl leading-tight sm:justify-self-start sm:text-left sm:text-7xl md:text-8xl">
            {copy.bride}
          </span>
        </h1>
        <button onClick={handleOpen} className="btn-royal mt-10 text-md sm:mt-12">
          {copy.open}
        </button>
      </div>
    </div>
  );
}
