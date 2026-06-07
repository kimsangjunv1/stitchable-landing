import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type SectionThemeProps = {
  theme: "light" | "dark";
  children: ReactNode;
  className?: string;
  shellClassName?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
};

export function SectionTheme({
  theme,
  children,
  className,
  shellClassName,
  as: Tag = "div",
}: SectionThemeProps) {
  return (
    <Tag
      className={cn(
        "w-full",
        theme === "light" ? "vp-section-light" : "vp-section-dark",
        className,
      )}
      data-section-theme={theme}
    >
      <div className={cn("vp-page-shell", shellClassName)}>{children}</div>
    </Tag>
  );
}
