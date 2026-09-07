import { useEffect, useState } from 'react'

export type BatteryInfo = {
  supported: boolean
  charging: boolean
  level: number | null
}

type BatteryManager = EventTarget & {
  charging: boolean
  level: number
}

type NavigatorWithBattery = Navigator & {
  getBattery?: () => Promise<BatteryManager>
}

export function useBattery(): BatteryInfo {
  const [battery, setBattery] = useState<BatteryInfo>({
    supported: false,
    charging: false,
    level: null,
  })

  useEffect(() => {
    const nav = navigator as NavigatorWithBattery
    if (!nav.getBattery) return

    let mounted = true
    let manager: BatteryManager | null = null

    const onChange = () => {
      if (!mounted || !manager) return
      setBattery({
        supported: true,
        charging: manager.charging,
        level: Math.round(manager.level * 100),
      })
    }

    nav.getBattery().then((next) => {
      manager = next
      onChange()
      next.addEventListener('chargingchange', onChange)
      next.addEventListener('levelchange', onChange)
    })

    return () => {
      mounted = false
      manager?.removeEventListener('chargingchange', onChange)
      manager?.removeEventListener('levelchange', onChange)
    }
  }, [])

  return battery
}
