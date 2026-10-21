export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <svg width="60" height="20" viewBox="0 0 60 20" className="text-gold">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M30 10C25 8 25 4 30 2c5 2 5 6 0 8Z" fill="currentColor" opacity="0.85" />
          <path d="M30 10c-2 5-6 5-8 0 2-5 6-5 8 0Z" fill="currentColor" opacity="0.7" />
          <path d="M30 10c2 5 6 5 8 0-2-5-6-5-8 0Z" fill="currentColor" opacity="0.7" />
          <path d="M30 10c-5 2-5 6 0 8 5-2 5-6 0-8Z" fill="currentColor" opacity="0.85" />
          <circle cx="30" cy="10" r="1.5" fill="#FFF8F0" />
        </g>
      </svg>
    </div>
  );
}