import { profile } from '../data/profile'
import type { WindowMode } from '../lib/window'
import { AppWindow } from './AppWindow'
import { Terminal } from './Terminal'

type TerminalWindowProps = {
  mode: WindowMode
  onModeChange: (mode: WindowMode) => void
  zIndex?: number
  onFocus?: () => void
}

export type { WindowMode }

export function TerminalWindow({
  mode,
  onModeChange,
  zIndex,
  onFocus,
}: TerminalWindowProps) {
  return (
    <AppWindow
      mode={mode}
      onModeChange={onModeChange}
      title={`${profile.guest}@${profile.hostname}: ~`}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <Terminal />
    </AppWindow>
  )
}
