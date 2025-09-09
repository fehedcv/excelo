export function ExceloLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Chart/Arrow Icon */}
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Chart bars */}
          <rect x="4" y="20" width="4" height="8" fill="currentColor" />
          <rect x="10" y="16" width="4" height="12" fill="currentColor" />
          <rect x="16" y="12" width="4" height="16" fill="currentColor" />
          <rect x="22" y="8" width="4" height="20" fill="currentColor" />

          {/* Upward arrow */}
          <path
            d="M24 8L28 4L24 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M28 4L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Company name */}
      <span className="text-2xl font-bold text-primary lowercase tracking-tight">excelo</span>
    </div>
  )
}
