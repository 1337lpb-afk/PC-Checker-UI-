import { useEffect, useState } from "react";

type Options = {
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  loop?: boolean;
  pauseMs?: number;
};

export function useTypewriter(text: string, options: Options = {}) {
  const {
    speed = 42,
    startDelay = 0,
    enabled = true,
    loop = false,
    pauseMs = 2200,
  } = options;

  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplay("");
      setDone(false);
      return;
    }

    let index = 0;
    let typingTimer = 0;
    let pauseTimer = 0;
    let cancelled = false;

    const clearAll = () => {
      window.clearTimeout(typingTimer);
      window.clearTimeout(pauseTimer);
    };

    const typeForward = () => {
      if (cancelled) return;
      if (index <= text.length) {
        setDisplay(text.slice(0, index));
        setDone(index === text.length);
        if (index < text.length) {
          index += 1;
          typingTimer = window.setTimeout(typeForward, speed);
        } else if (loop) {
          pauseTimer = window.setTimeout(() => {
            index = 0;
            setDone(false);
            typeForward();
          }, pauseMs);
        }
      }
    };

    typingTimer = window.setTimeout(typeForward, startDelay);

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [text, speed, startDelay, enabled, loop, pauseMs]);

  return { display, done };
}
