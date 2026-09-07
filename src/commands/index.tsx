import type { ReactNode } from 'react'
import { bannerArt, profile } from '../data/profile'

export type CommandName =
  | 'whois'
  | 'whoami'
  | 'social'
  | 'projects'
  | 'certificates'
  | 'history'
  | 'help'
  | 'email'
  | 'clear'
  | 'banner'

export const COMMANDS: { name: CommandName; description: string }[] = [
  { name: 'whois', description: 'Who is Samir Mujanovic?' },
  { name: 'whoami', description: 'Who are you?' },
  { name: 'social', description: 'Display social networks' },
  { name: 'projects', description: 'View coding projects' },
  { name: 'certificates', description: 'View certificates' },
  { name: 'history', description: 'View command history' },
  { name: 'help', description: 'You obviously already know what this does' },
  { name: 'email', description: 'Contact me' },
  { name: 'clear', description: 'Clear terminal' },
  { name: 'banner', description: 'Display the header' },
]

export const COMMAND_NAMES = COMMANDS.map((command) => command.name)

export type CommandContext = {
  history: string[]
}

export type CommandResult =
  | { type: 'clear' }
  | { type: 'output'; body: ReactNode }

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="term-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export function Banner() {
  return (
    <div className="banner">
      <pre className="banner-art">{bannerArt}</pre>
      <p className="banner-role">
        {profile.role}  ·  {profile.location}
      </p>
      <p className="banner-hint">
        Type <span className="term-cmd">help</span> to see available commands.
      </p>
    </div>
  )
}

function Whois() {
  return (
    <div className="term-block">
      <div className="whois-head">
        <img className="whois-avatar" src={profile.avatar} alt="" />
        <div>
          <p className="term-title">{profile.name}</p>
          <p className="term-muted">{profile.role}</p>
          <p className="term-muted">{profile.location}</p>
        </div>
      </div>
      <p>{profile.whois}</p>
      <p>
        <span className="term-label">skills</span>
        {profile.skills.join('  ·  ')}
      </p>
    </div>
  )
}

function Whoami() {
  return (
    <div className="term-block">
      <p className="term-title">{profile.name}</p>
      <p>{profile.summary}</p>
    </div>
  )
}

function Social() {
  return (
    <div className="term-block">
      {profile.socials.map((item) => (
        <p key={item.name}>
          <span className="term-label">{item.name.toLowerCase()}</span>
          <Link href={item.url}>{item.handle}</Link>
        </p>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <div className="term-block">
      {profile.projects.map((project) => (
        <div className="term-item" key={project.name}>
          <p>
            <span className="term-cmd">{project.name}</span>
            <span className="term-muted">  {project.stack}</span>
          </p>
          <p>{project.description}</p>
          <p>
            <Link href={project.url}>{project.url.replace('https://', '')}</Link>
          </p>
        </div>
      ))}
    </div>
  )
}

function Certificates() {
  return (
    <div className="term-block">
      {profile.certificates.map((cert) => (
        <div className="term-item" key={cert.name}>
          <p className="term-cmd">{cert.name}</p>
          <p className="term-muted">
            {cert.issuer}  ·  issued {cert.issued}  ·  expires {cert.expires}
          </p>
          {cert.credentialId ? (
            <p className="term-muted">id {cert.credentialId}</p>
          ) : null}
          {cert.url ? (
            <p>
              <Link href={cert.url}>view credential</Link>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  )
}

function Help({ onRun }: { onRun?: (command: string) => void }) {
  return (
    <div className="term-block">
      <p className="term-muted">Available commands:</p>
      <div className="help-grid">
        {COMMANDS.map((command) => (
          <div className="help-row" key={command.name}>
            <button
              type="button"
              className="term-cmd term-cmd-btn"
              onClick={() => onRun?.(command.name)}
            >
              {command.name}
            </button>
            <span>{command.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Email() {
  return (
    <div className="term-block">
      <p>Want to get in touch?</p>
      <p>
        <span className="term-label">email</span>
        <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
      </p>
      <p className="term-muted">Click the address or copy it from here.</p>
    </div>
  )
}

function HistoryList({ history }: { history: string[] }) {
  if (history.length === 0) {
    return <p className="term-muted">No commands yet.</p>
  }

  return (
    <div className="term-block">
      {history.map((item, index) => (
        <p key={`${item}-${index}`}>
          <span className="term-muted">{String(index + 1).padStart(4, ' ')}</span>
          {'  '}
          {item}
        </p>
      ))}
    </div>
  )
}

export function runCommand(
  raw: string,
  context: CommandContext,
  extras?: { onRunHelpCommand?: (command: string) => void },
): CommandResult {
  const input = raw.trim()
  if (!input) return { type: 'output', body: null }

  const [name] = input.split(/\s+/)
  const command = name.toLowerCase()

  switch (command) {
    case 'clear':
      return { type: 'clear' }
    case 'banner':
      return { type: 'output', body: <Banner /> }
    case 'whois':
      return { type: 'output', body: <Whois /> }
    case 'whoami':
      return { type: 'output', body: <Whoami /> }
    case 'social':
      return { type: 'output', body: <Social /> }
    case 'projects':
      return { type: 'output', body: <Projects /> }
    case 'certificates':
      return { type: 'output', body: <Certificates /> }
    case 'help':
      return {
        type: 'output',
        body: <Help onRun={extras?.onRunHelpCommand} />,
      }
    case 'email':
      return { type: 'output', body: <Email /> }
    case 'history':
      return { type: 'output', body: <HistoryList history={context.history} /> }
    default:
      return {
        type: 'output',
        body: (
          <p>
            Command not found: <span className="term-error">{name}</span>. Type{' '}
            <span className="term-cmd">help</span> to see available commands.
          </p>
        ),
      }
  }
}

export function completeCommand(input: string) {
  const prefix = input.trim()
  if (!prefix) return COMMAND_NAMES[0]
  const matches = COMMAND_NAMES.filter((name) => name.startsWith(prefix.toLowerCase()))
  return matches.length === 1 ? matches[0] : null
}
