import type { ReactNode } from 'react'
import {
  AppsGridIcon,
  BrowserIcon,
  FolderIcon,
  SettingsIcon,
  TerminalDockIcon,
} from './Icons'

type DockProps = {
  terminalOpen: boolean
  browserOpen: boolean
  onOpenTerminal: () => void
  onOpenBrowser: () => void
}

export function Dock({
  terminalOpen,
  browserOpen,
  onOpenTerminal,
  onOpenBrowser,
}: DockProps) {
  return (
    <nav className="dock" aria-label="Application dock">
      <div className="dock-apps">
        <DockButton label="Files">
          <FolderIcon />
        </DockButton>
        <DockButton label="Browser" active={browserOpen} onClick={onOpenBrowser}>
          <BrowserIcon />
        </DockButton>
        <DockButton
          label="Terminal"
          active={terminalOpen}
          onClick={onOpenTerminal}
        >
          <TerminalDockIcon />
        </DockButton>
        <DockButton label="Settings">
          <SettingsIcon />
        </DockButton>
      </div>
      <DockButton label="Show Applications">
        <AppsGridIcon />
      </DockButton>
    </nav>
  )
}

function DockButton({
  label,
  children,
  active,
  onClick,
}: {
  label: string
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      className={`dock-btn ${active ? 'is-active' : ''}`}
      title={label}
      aria-label={label}
      onClick={onClick}
    >
      <span className="dock-icon">{children}</span>
      {active ? <span className="dock-dash" /> : null}
    </button>
  )
}
