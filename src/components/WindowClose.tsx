export function WindowClose() {
  return (
    <button
      type="button"
      onClick={() => window.close()}
      className="electron-no-drag fixed top-3 right-3 z-[100] flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-lg leading-none text-white transition hover:bg-white/25"
      aria-label="Fermer l'application"
    >
      ×
    </button>
  );
}
