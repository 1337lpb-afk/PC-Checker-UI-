import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "@/components/Typewriter";
import { TypingDots } from "@/components/TypingDots";
import { FigmaImage } from "@/components/FigmaImage";
import group260Url from "./group-260.png?url";
import vectorUrl from "./vector.svg?url";

const SCAN_DURATION_MS = 5000;
const SCAN_LINES = [
  "Initializing scanners",
  "Scanning system files",
  "Analyzing processes",
  "Checking registry",
  "Finalizing report",
] as const;

export const Scanner = () => {
  const navigate = useNavigate();
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate("/finish");
    }, SCAN_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLineIndex((current) => (current + 1) % SCAN_LINES.length);
    }, 1100);

    return () => window.clearInterval(interval);
  }, []);

  const statusLine = SCAN_LINES[lineIndex];

  return (
    <main
      className="electron-drag bg-[#2148c0] overflow-hidden w-full min-w-[1280px] min-h-[720px] relative"
      aria-label="Scanner status screen"
    >
      <div
        className="absolute -top-px left-[-362px] w-[1642px] h-[1083px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-[359px] left-0 w-[724px] h-[724px] bg-[#264ec9] rounded-[362px]" />
        <div className="absolute top-[435px] left-[76px] w-[572px] h-[572px] bg-[#234bc5] rounded-[286px]" />
        <div className="absolute top-[502px] left-[143px] w-[438px] h-[438px] bg-[#274ec7] rounded-[219px]" />
        <FigmaImage
          className="absolute top-px left-[778px] w-[864px] h-[720px] object-contain opacity-20"
          alt=""
          src={vectorUrl}
        />
      </div>
      <section
        className="inline-flex flex-col items-center gap-5 absolute top-[310px] left-[600px]"
        aria-label="Scanner activity indicator"
      >
        <div className="square-loader" role="status" aria-label="Scanning in progress">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="font-['Inter'] text-white/90 text-sm min-w-[220px] flex items-center gap-2">
          <Typewriter
            key={statusLine}
            text={statusLine}
            speed={32}
            showCursor
            cursorClassName="bg-white"
          />
          <TypingDots />
        </p>
      </section>
      <aside
        className="notify-slide electron-no-drag absolute top-[583px] -left-2 h-[120px] flex px-[37.6px] py-0 items-center min-w-[520px] bg-white rounded-lg shadow-lg"
        aria-label="Scanner notification"
      >
        <div className="w-[378px] flex">
          <div className="w-[381.81px] h-[54px] relative">
            <FigmaImage
              className="absolute top-0 left-0 w-[47px] h-[46px] object-contain"
              alt=""
              src={group260Url}
            />
            <h1 className="absolute top-0 left-[62px] w-[200px] font-['Inter'] font-medium text-black text-base tracking-[0] leading-[normal]">
              <Typewriter text="Scanners" speed={55} startDelay={400} showCursor={false} />
            </h1>
            <p className="absolute top-8 left-[62px] w-[316px] font-['Inter'] font-normal text-[#7f7f7f] text-sm tracking-[0] leading-[normal]">
              <Typewriter
                text="The scanners are scanning your computer"
                speed={28}
                startDelay={900}
                showCursor={false}
              />
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Scanner;
