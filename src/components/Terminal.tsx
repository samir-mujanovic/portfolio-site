import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import {
  Banner,
  COMMAND_NAMES,
  completeCommand,
  runCommand,
} from '../commands'
import { profile } from '../data/profile'

type Line = {
  id: string
  command?: string
  body?: ReactNode
}

let lineId = 0
const nextId = () => `line-${++lineId}`

export function Terminal({ onRunCommand }: { onRunCommand?: (command: string) => void }) {
  const [lines, setLines] = useState<Line[]>(() => [
    { id: nextId(), body: <Banner /> },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [draft, setDraft] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines, input])

  const focusInput = () => inputRef.current?.focus()

  const execute = (raw: string) => {
    const value = raw.trim()
    if (!value) {
      setLines((current) => [...current, { id: nextId(), command: '' }])
      return
    }

    const nextHistory = [...history, value]
    const result = runCommand(value, { history }, {
      onRunHelpCommand: (command) => {
        setInput(command)
        inputRef.current?.focus()
      },
    })

    if (result.type === 'clear') {
      setLines([])
    } else {
      setLines((current) => [
        ...current,
        { id: nextId(), command: value, body: result.body },
      ])
    }

    setHistory(nextHistory)
    setHistoryIndex(null)
    setDraft('')
    setInput('')
    onRunCommand?.(value)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      execute(input)
      return
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()
      setLines([])
      return
    }

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault()
      setLines((current) => [...current, { id: nextId(), command: `${input}^C` }])
      setInput('')
      setHistoryIndex(null)
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      const match = completeCommand(input)
      if (match) setInput(match)
      else if (!input.trim()) setInput('help')
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (history.length === 0) return
      if (historyIndex === null) setDraft(input)
      const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(next)
      setInput(history[next])
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (historyIndex === null) return
      if (historyIndex >= history.length - 1) {
        setHistoryIndex(null)
        setInput(draft)
        return
      }
      const next = historyIndex + 1
      setHistoryIndex(next)
      setInput(history[next])
    }
  }

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-scroll" ref={scrollRef}>
        {lines.map((line) => (
          <div key={line.id} className="terminal-entry">
            {line.command !== undefined ? <Prompt command={line.command} /> : null}
            {line.body ? <div className="terminal-output">{line.body}</div> : null}
          </div>
        ))}

        <div className="prompt-line">
          <PromptPrefix />
          <input
            ref={inputRef}
            className="term-input"
            value={input}
            autoFocus
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            aria-label="Terminal command"
            onChange={(event) => {
              setInput(event.target.value)
              setHistoryIndex(null)
            }}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
      <p className="terminal-hint">
        tab to complete  ·  ↑↓ history  ·  {COMMAND_NAMES.join(' · ')}
      </p>
    </div>
  )
}

function Prompt({ command }: { command: string }) {
  return (
    <p className="prompt-line">
      <PromptPrefix />
      <span>{command}</span>
    </p>
  )
}

function PromptPrefix() {
  return (
    <span className="prompt">
      <span className="prompt-user">{profile.guest}</span>
      <span>@</span>
      <span className="prompt-host">{profile.hostname}</span>
      <span>:</span>
      <span className="prompt-path">~</span>
      <span>$ </span>
    </span>
  )
}
