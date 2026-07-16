import { useId } from 'react'

function BrandMark({ size = 30 }) {
  const gradientId = useId()

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="brand-mark">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7bc0ff" />
          <stop offset="1" stopColor="#5c8cff" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M12 9.5 8 16l4 6.5M20 9.5 24 16l-4 6.5"
        stroke="#071021"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default BrandMark
