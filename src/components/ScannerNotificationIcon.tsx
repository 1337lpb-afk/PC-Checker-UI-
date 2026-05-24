import { FigmaImage } from "./FigmaImage";

type ScannerNotificationIconProps = {
  src: string;
  spinning?: boolean;
  className?: string;
};

export function ScannerNotificationIcon({
  src,
  spinning = false,
  className = "",
}: ScannerNotificationIconProps) {
  return (
    <div
      className={`absolute top-0 left-0 flex h-[46px] w-[47px] shrink-0 items-center justify-center ${className}`}
    >
      <FigmaImage
        src={src}
        alt=""
        className={`h-[46px] w-[47px] object-contain ${spinning ? "animate-scan-icon" : ""}`}
        aria-hidden
      />
    </div>
  );
}
