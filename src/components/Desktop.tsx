import { useCallback, useState } from 'react'
import { BrowserWindow } from './BrowserWindow'
import { Dock } from './Dock'
import { TerminalWindow } from './TerminalWindow'
import { TopBar } from './TopBar'
import type { WindowMode } from '../lib/window'

type FocusedApp = 'terminal' | 'browser'

export function Desktop() {
  const [terminalMode, setTerminalMode] = useState<WindowMode>('open')
  const [browserMode, setBrowserMode] = useState<WindowMode>('closed')
  const [focused, setFocused] = useState<FocusedApp>('terminal')

  const focusTerminal = useCallback(() => setFocused('terminal'), [])
  const focusBrowser = useCallback(() => setFocused('browser'), [])

  const openTerminal = () => {
    setTerminalMode('open')
    setFocused('terminal')
  }

  const openBrowser = () => {
    setBrowserMode('open')
    setFocused('browser')
  }

  return (
    <div className="desktop">
      <div className="wallpaper" aria-hidden="true" />
      <TopBar />
      <Dock
        terminalOpen={terminalMode !== 'closed'}
        browserOpen={browserMode !== 'closed'}
        onOpenTerminal={openTerminal}
        onOpenBrowser={openBrowser}
      />
      <TerminalWindow
        mode={terminalMode}
        onModeChange={setTerminalMode}
        zIndex={focused === 'terminal' ? 12 : 10}
        onFocus={focusTerminal}
      />
      <BrowserWindow
        mode={browserMode}
        onModeChange={setBrowserMode}
        zIndex={focused === 'browser' ? 12 : 10}
        onFocus={focusBrowser}
      />
    </div>
  )
}
