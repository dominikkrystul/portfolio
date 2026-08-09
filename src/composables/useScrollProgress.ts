import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  readonly,
  shallowRef,
  type Ref,
} from 'vue'

export function useScrollProgress(target: Readonly<Ref<HTMLElement | null>>) {
  const progress = shallowRef(0)
  let animationFrame: number | undefined

  function updateProgress() {
    const element = target.value
    if (!element) return

    const { height, top } = element.getBoundingClientRect()
    const scrollableDistance = Math.max(1, height - window.innerHeight)
    const nextProgress = Math.min(1, Math.max(0, -top / scrollableDistance))

    progress.value = nextProgress
  }

  function requestUpdate() {
    if (animationFrame) return

    animationFrame = window.requestAnimationFrame(() => {
      animationFrame = undefined
      updateProgress()
    })
  }

  onMounted(async () => {
    await nextTick()
    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
  })

  onBeforeUnmount(() => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame)
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
  })

  return readonly(progress)
}
