import type { ComponentType, SVGProps } from "react";

type FigmaIconProps = SVGProps<SVGSVGElement> & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Calque SVG Figma en composant inline (évite les bugs `<img>` + %) */
export function FigmaIcon({ icon: Icon, className = "", ...props }: FigmaIconProps) {
  return (
    <Icon
      className={`figma-icon-layer block max-w-none ${className}`}
      aria-hidden
      {...props}
    />
  );
}
