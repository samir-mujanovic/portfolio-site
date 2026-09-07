import {
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from 'react'
import { CloseIcon, MaximizeIcon, MinimizeIcon } from './Icons'
import { initialWindowPosition, type WindowMode } from '../lib/window'

type AppWindowProps = {
  mode: WindowMode
  onModeChange: (mode: WindowMode) => void
  title: string
  offset?: number
  zIndex?: number
  onFocus?: () => void
  className?: string
  children: ReactNode
}

export function AppWindow({
  mode,
  onModeChange,
  title,
  offset = 0,
  zIndex = 10,
  onFocus,
  className = '',
  children,
}: AppWindowProps) {
  const [maximized, setMaximized] = useState(false)
  const [pos, setPos] = useState(() => initialWindowPosition(offset))
  const drag = useRef<{ ox: number; oy: number } | null>(null)

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    onFocus?.()
    if (maximized) return
    if ((event.target as HTMLElement).closest('button')) return
    drag.current = { ox: event.clientX - pos.x, oy: event.clientY - pos.y }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!drag.current) return
    setPos((current) => ({
      ...current,
      x: event.clientX - drag.current!.ox,
      y: Math.max(32, event.clientY - drag.current!.oy),
    }))
  }

  const onPointerUp = () => {
    drag.current = null
  }

  if (mode === 'closed') return null

  const hidden = mode === 'minimized'
  const style = maximized
    ? {
        top: 32,
        left: 72,
        width: 'calc(100vw - 84px)',
        height: 'calc(100vh - 44px)',
        zIndex,
      }
    : {
        top: pos.y,
        left: pos.x,
        width: pos.w,
        height: pos.h,
        zIndex,
      }

  return (
    <section
      className={`window ${maximized ? 'is-max' : ''} ${hidden ? 'is-min' : ''} ${className}`.trim()}
      style={style}
      hidden={hidden}
      aria-hidden={hidden}
      onMouseDown={onFocus}
    >
      <header
        className="window-bar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <button
            type="button"
            className="win-btn"
            aria-label="Minimize"
            onClick={() => onModeChange('minimized')}
          >
            <MinimizeIcon />
          </button>
          <button
            type="button"
            className="win-btn"
            aria-label={maximized ? 'Restore' : 'Maximize'}
            onClick={() => setMaximized((value) => !value)}
          >
            <MaximizeIcon />
          </button>
          <button
            type="button"
            className="win-btn win-close"
            aria-label="Close"
            onClick={() => onModeChange('closed')}
          >
            <CloseIcon />
          </button>
        </div>
      </header>
      {children}
    </section>
  )
}
