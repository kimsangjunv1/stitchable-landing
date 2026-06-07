/** Cubic-bezier easings — spring animations are intentionally excluded. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const
export const easeOutQuart = [0.22, 1, 0.36, 1] as const
export const easeInOutCubic = [0.65, 0, 0.35, 1] as const
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const

export const motionTransition = {
  fast: { duration: 0.45, ease: easeOutQuart },
  medium: { duration: 0.65, ease: easeOutQuart },
  slow: { duration: 0.85, ease: easeOutExpo },
  reveal: { duration: 0.7, ease: easeOutQuart },
} as const

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
} as const

export const slideFromLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
} as const

export const slideFromRightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
} as const
