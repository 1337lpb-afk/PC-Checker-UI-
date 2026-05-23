import { useTypewriter } from "./useTypewriter";

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  loop?: boolean;
  pauseMs?: number;
  showCursor?: boolean;
  cursorClassName?: string;
};

export function Typewriter({
  text,
  className = "",
  speed,
  startDelay,
  enabled = true,
  loop = false,
  pauseMs,
  showCursor = true,
  cursorClassName = "",
}: TypewriterProps) {
  const { display, done } = useTypewriter(text, {
    speed,
    startDelay,
    enabled,
    loop,
    pauseMs,
  });

  return (
    <span className={className}>
      {display}
      {showCursor && (
        <span
          className={`typing-cursor ${done ? "typing-cursor-idle" : ""} ${cursorClassName}`}
          aria-hidden
        />
      )}
    </span>
  );
}
