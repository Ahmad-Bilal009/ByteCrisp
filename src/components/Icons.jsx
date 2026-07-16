const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <polyline points="9 8 4 12 9 16" />
      <polyline points="15 8 20 12 15 16" />
    </svg>
  )
}

export function DevicesIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="13" height="9" rx="1.4" />
      <path d="M6 20h7" />
      <path d="M9.5 13v3.5" />
      <rect x="16.5" y="9" width="5.5" height="9" rx="1.2" />
      <path d="M18.4 15.5h1.7" />
    </svg>
  )
}

export function CloudIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <path d="M7 18h10.5a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.2 9.06 4 4 0 0 0 7 17z" />
    </svg>
  )
}

export function PaletteIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
      <circle cx="7.7" cy="10.3" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.8" cy="7.3" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <path d="M5 4h3.2l1.3 4-2 1.4a11.5 11.5 0 0 0 5.1 5.1l1.4-2 4 1.3V17a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}
