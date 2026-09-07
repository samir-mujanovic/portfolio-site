import { useEffect, useRef, useState, type ReactNode } from 'react'
import { formatPanelClock, useClock } from '../hooks/useClock'
import { useBattery } from '../hooks/useBattery'
import { useOnlineStatus } from '../hooks/useOnlineStatus'
import { CalendarPopup } from './CalendarPopup'
import {
  BatteryIcon,
  PowerIcon,
  VolumeIcon,
  VolumeMutedIcon,
  WifiIcon,
  WifiOffIcon,
} from './Icons'

type Menu = 'clock' | 'status' | null

export function TopBar() {
  const now = useClock()
  const online = useOnlineStatus()
  const battery = useBattery()
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(72)
  const [menu, setMenu] = useState<Menu>(null)
  const barRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!barRef.current?.contains(event.target as Node)) setMenu(null)
    }
    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const batteryLabel = battery.supported
    ? `${battery.level}%${battery.charging ? ' charging' : ''}`
    : 'Battery unavailable'

  return (
    <header className="topbar" ref={barRef}>
      <div className="topbar-left">
        <button type="button" className="activities">
          Activities
        </button>
      </div>

      <button
        type="button"
        className={`clock-btn ${menu === 'clock' ? 'is-open' : ''}`}
        onClick={() => setMenu((current) => (current === 'clock' ? null : 'clock'))}
        aria-expanded={menu === 'clock'}
      >
        {formatPanelClock(now)}
      </button>

      <div className="topbar-right">
        <button
          type="button"
          className={`status-cluster ${menu === 'status' ? 'is-open' : ''}`}
          onClick={() =>
            setMenu((current) => (current === 'status' ? null : 'status'))
          }
          aria-label="System status"
          aria-expanded={menu === 'status'}
        >
          {online ? <WifiIcon /> : <WifiOffIcon />}
          {muted || volume === 0 ? <VolumeMutedIcon /> : <VolumeIcon />}
          <BatteryIcon level={battery.level} charging={battery.charging} />
          <PowerIcon />
        </button>
      </div>

      {menu === 'clock' ? (
        <Popover align="center" className="popover-calendar">
          <CalendarPopup now={now} />
        </Popover>
      ) : null}

      {menu === 'status' ? (
        <Popover align="right">
          <StatusRow
            label="Network"
            value={online ? 'Connected' : 'Offline'}
            live
          />
          <StatusRow
            label="Battery"
            value={batteryLabel}
            live={battery.supported}
          />
          <div className="status-row">
            <span>Volume</span>
            <div className="volume-controls">
              <button
                type="button"
                className="text-btn"
                onClick={() => setMuted((value) => !value)}
              >
                {muted ? 'Unmute' : 'Mute'}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={muted ? 0 : volume}
                onChange={(event) => {
                  setMuted(false)
                  setVolume(Number(event.target.value))
                }}
                aria-label="Volume"
              />
              <span className="status-value">{muted ? 0 : volume}%</span>
            </div>
          </div>
        </Popover>
      ) : null}
    </header>
  )
}

function Popover({
  children,
  align,
  className = '',
}: {
  children: ReactNode
  align: 'center' | 'right'
  className?: string
}) {
  return (
    <div className={`popover popover-${align} ${className}`.trim()}>{children}</div>
  )
}

function StatusRow({
  label,
  value,
  live,
}: {
  label: string
  value: string
  live?: boolean
}) {
  return (
    <div className="status-row">
      <span>
        {label}
        {live ? <span className="live-dot" title="Live" /> : null}
      </span>
      <span className="status-value">{value}</span>
    </div>
  )
}
