import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { profile } from '../data/profile'
import type { WindowMode } from '../lib/window'
import { AppWindow } from './AppWindow'

const LINKEDIN_URL = profile.socials.find((s) => s.name === 'LinkedIn')!.url
const GITHUB_URL = profile.socials.find((s) => s.name === 'GitHub')!.url

type BrowserWindowProps = {
  mode: WindowMode
  onModeChange: (mode: WindowMode) => void
  zIndex?: number
  onFocus?: () => void
}

export function BrowserWindow({
  mode,
  onModeChange,
  zIndex,
  onFocus,
}: BrowserWindowProps) {
  const [url, setUrl] = useState(LINKEDIN_URL)
  const [draft, setDraft] = useState(LINKEDIN_URL)

  const go = (next: string) => {
    const trimmed = next.trim()
    if (!trimmed) return
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`
    setUrl(withProtocol)
    setDraft(withProtocol)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    go(draft)
  }

  const page = resolvePage(url)

  return (
    <AppWindow
      mode={mode}
      onModeChange={onModeChange}
      title={page.title}
      offset={36}
      zIndex={zIndex}
      onFocus={onFocus}
      className="browser-window"
    >
      <div className="browser">
        <div className="browser-chrome">
          <div className="browser-nav">
            <button type="button" className="browser-nav-btn" aria-label="Back" disabled>
              ‹
            </button>
            <button type="button" className="browser-nav-btn" aria-label="Forward" disabled>
              ›
            </button>
            <button
              type="button"
              className="browser-nav-btn"
              aria-label="Reload"
              onClick={() => go(url)}
            >
              ↻
            </button>
          </div>
          <form className="browser-url" onSubmit={onSubmit}>
            <span className="browser-lock" aria-hidden="true" />
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Escape') setDraft(url)
              }}
              spellCheck={false}
              aria-label="Address bar"
            />
          </form>
          <div className="browser-shortcuts">
            <button type="button" onClick={() => go(LINKEDIN_URL)}>
              LinkedIn
            </button>
            <button type="button" onClick={() => go(GITHUB_URL)}>
              GitHub
            </button>
          </div>
        </div>

        <div className="browser-viewport">
          {page.kind === 'linkedin' ? <LinkedInPage /> : null}
          {page.kind === 'github' ? <GitHubPage /> : null}
          {page.kind === 'external' ? (
            <ExternalPage url={url} onOpen={() => window.open(url, '_blank', 'noopener,noreferrer')} />
          ) : null}
        </div>
      </div>
    </AppWindow>
  )
}

function resolvePage(url: string) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '')
    if (host.includes('linkedin.com')) {
      return { kind: 'linkedin' as const, title: `${profile.name} | LinkedIn` }
    }
    if (host.includes('github.com')) {
      return { kind: 'github' as const, title: `${profile.name} · GitHub` }
    }
  } catch {
    /* ignore */
  }
  return { kind: 'external' as const, title: 'Browser' }
}

function LinkedInPage() {
  return (
    <div className="li-page">
      <div className="li-banner" />
      <div className="li-card">
        <img className="li-avatar" src={profile.avatar} alt="" />
        <div className="li-identity">
          <h2>{profile.name}</h2>
          <p className="li-headline">{profile.role}</p>
          <p className="li-meta">{profile.location} · 500+ connections</p>
          <div className="li-actions">
            <a
              className="li-btn li-btn-primary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn profile
            </a>
            <a className="li-btn" href={`mailto:${profile.email}`}>
              Message
            </a>
          </div>
        </div>
      </div>

      <section className="li-section">
        <h3>About</h3>
        <p>{profile.summary}</p>
      </section>

      <section className="li-section">
        <h3>Licenses & certifications</h3>
        <ul className="li-list">
          {profile.certificates.map((cert) => (
            <li key={cert.name}>
              <strong>{cert.name}</strong>
              <span>
                {cert.issuer} · Issued {cert.issued}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="li-section">
        <h3>Featured projects</h3>
        <ul className="li-list">
          {profile.projects.slice(0, 4).map((project) => (
            <li key={project.name}>
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.name}
              </a>
              <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="li-note">
        LinkedIn blocks embedding inside other sites, so this is an in-desktop
        preview. Use <strong>Open LinkedIn profile</strong> for the live page.
      </p>
    </div>
  )
}

function GitHubPage() {
  return (
    <div className="gh-page">
      <div className="gh-header">
        <img className="gh-avatar" src={profile.avatar} alt="" />
        <div>
          <h2>{profile.name}</h2>
          <p className="gh-handle">@{profile.socials[0].handle}</p>
          <p>{profile.role}</p>
          <p className="gh-meta">{profile.location}</p>
          <a
            className="li-btn li-btn-primary"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub profile
          </a>
        </div>
      </div>
      <div className="gh-repos">
        {profile.projects.map((project) => (
          <a
            key={project.name}
            className="gh-repo"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{project.name}</strong>
            <span>{project.description}</span>
            <em>{project.stack}</em>
          </a>
        ))}
      </div>
    </div>
  )
}

function ExternalPage({ url, onOpen }: { url: string; onOpen: () => void }) {
  return (
    <div className="browser-fallback">
      <h2>This site can’t be shown inside the desktop browser</h2>
      <p>
        Many sites (including LinkedIn) block being embedded. Open it in your
        real browser instead:
      </p>
      <code>{url}</code>
      <button type="button" className="li-btn li-btn-primary" onClick={onOpen}>
        Open in new tab
      </button>
    </div>
  )
}
