"use client"

import { motion, useInView, type HTMLMotionProps } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/shared/lib/utils"
import { motionTransition } from "@/shared/lib/motion"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  amount?: number
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight"
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "variants">

const variantMap = {
  fadeUp: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
} as const

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  variant = "fadeUp",
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={{ ...motionTransition.reveal, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  stagger?: number
  once?: boolean
  amount?: number
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  once = true,
  amount = 0.15,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: ReactNode
  className?: string
  variant?: keyof typeof variantMap
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={variantMap[variant]}
      transition={motionTransition.reveal}
    >
      {children}
    </motion.div>
  )
}
