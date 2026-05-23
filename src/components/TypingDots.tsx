type TypingDotsProps = {
  className?: string;
  dotClassName?: string;
};

/** Indicateur « typing » — 3 carrés animés */
export function TypingDots({ className = "", dotClassName = "bg-white" }: TypingDotsProps) {
  return (
    <span className={`inline-flex items-end gap-1 ${className}`} aria-hidden>
      <span className={`typing-dot ${dotClassName}`} style={{ animationDelay: "0ms" }} />
      <span className={`typing-dot ${dotClassName}`} style={{ animationDelay: "150ms" }} />
      <span className={`typing-dot ${dotClassName}`} style={{ animationDelay: "300ms" }} />
    </span>
  );
}
