import { shallowRef } from 'vue'

type Theme = 'light' | 'dark'

const storageKey = 'theme'
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

function readOverride(): Theme | null {
  try {
    const stored = sessionStorage.getItem(storageKey)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

let override = readOverride()
export const activeTheme = shallowRef<Theme>('light')

function applyTheme() {
  activeTheme.value = override ?? (systemDark.matches ? 'dark' : 'light')
  document.documentElement.dataset.theme = activeTheme.value
}

export function toggleTheme() {
  override = activeTheme.value === 'dark' ? 'light' : 'dark'
  applyTheme()
  try {
    sessionStorage.setItem(storageKey, override)
  } catch {
    // The choice still works until this page closes if storage is unavailable.
  }
}

systemDark.addEventListener('change', applyTheme)
applyTheme()
