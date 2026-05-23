type FigmaImageProps = {
  src: string;
  className?: string;
  alt?: string;
  "aria-hidden"?: boolean;
};

/** Image SVG/PNG — `?url` + styles compatibles Electron / Figma */
export function FigmaImage({
  src,
  className = "",
  alt = "",
  "aria-hidden": ariaHidden,
}: FigmaImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={ariaHidden}
      className={`figma-asset block max-w-none ${className}`}
      decoding="async"
      draggable={false}
    />
  );
}
