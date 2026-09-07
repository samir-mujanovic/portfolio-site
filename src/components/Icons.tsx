type IconProps = {
  size?: number
  className?: string
}

export function WifiIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
      <path d="M2 8.82a16 16 0 0 1 20 0" />
    </svg>
  )
}

export function WifiOffIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h.01" />
      <path d="M8.5 16.4a5 5 0 0 1 7 0" />
      <path d="m2 2 20 20" />
      <path d="M5 12.6a10.9 10.9 0 0 1 3.2-2.3" />
      <path d="M10.7 5.3A16 16 0 0 1 22 8.8" />
    </svg>
  )
}

export function VolumeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

export function VolumeMutedIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

export function BatteryIcon({
  size = 16,
  className,
  level = 100,
  charging = false,
}: IconProps & { level?: number | null; charging?: boolean }) {
  const pct = Math.max(0, Math.min(100, level ?? 100))
  const fillWidth = (pct / 100) * 13

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="7"
        width="16"
        height="10"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="20" y="10" width="2.5" height="4" rx="0.8" fill="currentColor" />
      <rect x="4" y="9" width={fillWidth} height="6" rx="1" fill="currentColor" />
      {charging ? (
        <polygon points="11.5,8 8.5,13 12,13 10.5,16 13.5,11 10,11" fill="#111" />
      ) : null}
    </svg>
  )
}

export function PowerIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.8 0" />
    </svg>
  )
}

export function FolderIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="14" width="36" height="26" rx="4" fill="#E9B44C" />
      <path d="M6 18h16l4-5h16a4 4 0 0 1 4 4v5H6z" fill="#F6D365" />
    </svg>
  )
}

export function BrowserIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="browser-bg" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff9a3c" />
          <stop offset="55%" stopColor="#e65520" />
          <stop offset="100%" stopColor="#b02810" />
        </linearGradient>
        <linearGradient id="browser-globe" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9ad8ff" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <clipPath id="browser-clip">
          <circle cx="24" cy="24" r="11.5" />
        </clipPath>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#browser-bg)" />
      <circle cx="24" cy="24" r="12.5" fill="rgba(255,255,255,0.18)" />
      <circle cx="24" cy="24" r="11.5" fill="url(#browser-globe)" />
      <g
        fill="none"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.4"
        clipPath="url(#browser-clip)"
      >
        <ellipse cx="24" cy="24" rx="5" ry="11.5" />
        <path d="M12.5 24h23" />
        <path d="M13.8 17.5h20.4" />
        <path d="M13.8 30.5h20.4" />
      </g>
      <circle
        cx="24"
        cy="24"
        r="11.5"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function TerminalDockIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="8" width="36" height="32" rx="6" fill="#300A24" />
      <path d="M14 18l8 6-8 6" fill="none" stroke="#E95420" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 30h10" stroke="#F6F6F6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SettingsIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="settings-gear" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="50%" stopColor="#e6e6e6" />
          <stop offset="100%" stopColor="#cfcfcf" />
        </linearGradient>
      </defs>
      <g fill="url(#settings-gear)">
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            x="21.2"
            y="4.5"
            width="5.6"
            height="11"
            rx="1.4"
            transform={`rotate(${i * 36} 24 24)`}
          />
        ))}
        <circle cx="24" cy="24" r="12.2" />
      </g>
      <circle cx="24" cy="24" r="5.4" fill="#2a2a2a" />
      <circle
        cx="24"
        cy="24"
        r="7.2"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function AppsGridIcon({ size = 28 }: IconProps) {
  const cells = [0, 1, 2].flatMap((row) =>
    [0, 1, 2].map((col) => {
      const x = 9 + col * 12
      const y = 8 + row * 12
      return (
        <g key={`${row}-${col}`}>
          <circle cx={x + 4} cy={y + 3} r={3.35} fill="currentColor" />
          <rect
            x={x + 1.1}
            y={y + 4.2}
            width={5.8}
            height={4.8}
            rx={2.1}
            fill="currentColor"
          />
        </g>
      )
    }),
  )

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      style={{ color: '#f5f5f5' }}
    >
      {cells}
    </svg>
  )
}

export function TrashIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="15" y="18" width="18" height="22" rx="3" fill="#c6c6c6" />
      <rect x="13" y="14" width="22" height="5" rx="1.5" fill="#d8d8d8" />
      <rect x="20" y="10" width="8" height="4" rx="1.2" fill="#d8d8d8" />
    </svg>
  )
}

export function MinimizeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <rect x="2" y="8.5" width="8" height="1.4" rx="0.5" fill="currentColor" />
    </svg>
  )
}

export function MaximizeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <rect x="2.2" y="2.2" width="7.6" height="7.6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 3l6 6M9 3L3 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
