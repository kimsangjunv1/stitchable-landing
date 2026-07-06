"use client";

import { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { revealEase, revealViewport } from "@/shared/lib/motion";
import { cn } from "@/shared/lib/utils";

type ClippedRevealTextProps<T extends ElementType> = {
    as?: T;
    className?: string;
    lineClassName?: string;
    lines: ReactNode[];
    delay?: number;
    stagger?: number;
};

export function ClippedRevealText<T extends ElementType = "div">({
    as,
    className,
    lineClassName,
    lines,
    delay = 0,
    stagger = 0.08,
}: ClippedRevealTextProps<T>) {
    const prefersReducedMotion = useReducedMotion();
    const Component = (as ?? "div") as ElementType;

    return (
        <Component className={className}>
            {lines.map((line, index) => (
                <span
                    className={cn("block overflow-hidden", lineClassName)}
                    key={index}
                >
                    <motion.span
                        className="block will-change-transform"
                        initial={prefersReducedMotion ? false : { y: "100%", opacity: 0.28 }}
                        whileInView={prefersReducedMotion ? undefined : { y: "0%", opacity: 1 }}
                        viewport={revealViewport}
                        transition={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      duration: 0.9,
                                      delay: delay + index * stagger,
                                      ease: revealEase,
                                  }
                        }
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </Component>
    );
}
