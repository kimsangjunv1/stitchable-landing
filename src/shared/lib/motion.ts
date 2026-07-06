import { cubicBezier } from "motion";

export const revealEase = cubicBezier(0.22, 1, 0.36, 1);
export const emphasisEase = cubicBezier(0.33, 1, 0.68, 1);

export const revealViewport = {
    once: true,
    amount: 0.6,
} as const;
