export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <svg width="60" height="20" viewBox="0 0 60 20" className="text-gold">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M30 4 Q22 10 30 16 Q38 10 30 4 Z" fill="currentColor" opacity="0.85" />
          <circle cx="30" cy="10" r="1.5" fill="#FFF8F0" />
        </g>
      </svg>
    </div>
  );
}