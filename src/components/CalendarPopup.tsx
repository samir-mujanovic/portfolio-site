import { useEffect, useMemo, useState } from 'react'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const

type CalendarPopupProps = {
  now: Date
}

export function CalendarPopup({ now }: CalendarPopupProps) {
  const year = now.getFullYear()
  const month = now.getMonth()
  const [view, setView] = useState(() => new Date(year, month, 1))

  useEffect(() => {
    setView(new Date(year, month, 1))
  }, [year, month])

  const cells = useMemo(() => buildMonthCells(view), [view])

  const weekday = now.toLocaleDateString('en-US', { weekday: 'long' })
  const heading = `${now.toLocaleDateString('en-US', { month: 'long' })} ${now.getDate()} ${year}`
  const monthLabel = view.toLocaleDateString('en-US', { month: 'long' })

  const shiftMonth = (delta: number) => {
    setView((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1))
  }

  return (
    <div className="calendar-panel">
      <div className="calendar-header">
        <p className="calendar-weekday">{weekday}</p>
        <p className="calendar-heading">{heading}</p>
      </div>

      <div className="calendar-nav">
        <button
          type="button"
          className="calendar-nav-btn"
          aria-label="Previous month"
          onClick={() => shiftMonth(-1)}
        >
          ‹
        </button>
        <span className="calendar-month">{monthLabel}</span>
        <button
          type="button"
          className="calendar-nav-btn"
          aria-label="Next month"
          onClick={() => shiftMonth(1)}
        >
          ›
        </button>
      </div>

      <div className="calendar-grid" role="grid" aria-label={`${monthLabel} calendar`}>
        {WEEKDAYS.map((day, index) => (
          <span className="calendar-dow" key={`${day}-${index}`} role="columnheader">
            {day}
          </span>
        ))}
        {cells.map((cell) => {
          const isToday =
            cell.date.getFullYear() === now.getFullYear() &&
            cell.date.getMonth() === now.getMonth() &&
            cell.date.getDate() === now.getDate()

          return (
            <span
              key={cell.key}
              className={[
                'calendar-day',
                cell.inMonth ? 'is-current' : 'is-outside',
                isToday ? 'is-today' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              role="gridcell"
              aria-current={isToday ? 'date' : undefined}
            >
              {String(cell.date.getDate()).padStart(2, '0')}
            </span>
          )
        })}
      </div>
    </div>
  )
}

type Cell = {
  key: string
  date: Date
  inMonth: boolean
}

function buildMonthCells(view: Date): Cell[] {
  const year = view.getFullYear()
  const month = view.getMonth()
  const first = new Date(year, month, 1)
  const startOffset = first.getDay()
  const start = new Date(year, month, 1 - startOffset)
  const cells: Cell[] = []

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    cells.push({
      key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      date,
      inMonth: date.getMonth() === month,
    })
  }

  return cells
}
