import { MADE_BY_LABEL } from "@/constants/credits";

/** Signature visible — made by OWXLD */
export function MadeByOwxld() {
  return (
    <p
      className="electron-no-drag pointer-events-none fixed bottom-3 left-4 z-[90] font-['Montserrat'] text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 select-none"
      aria-label={MADE_BY_LABEL}
    >
      {MADE_BY_LABEL}
    </p>
  );
}
