import { FormEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "@/components/Typewriter";
import { FigmaImage } from "@/components/FigmaImage";
import LockIcon from "./icon-lock.svg?react";
import vectorUrl from "./vector.svg?url";

const PIN_PLACEHOLDER = "SCANNER PIN";

export const ScannerLogin = () => {
  const [scannerPin, setScannerPin] = useState("");
  const inputId = useId();
  const navigate = useNavigate();
  const showTypingPlaceholder = scannerPin.length === 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!scannerPin.trim()) {
      return;
    }
    navigate("/scan");
  };

  return (
    <main className="electron-drag bg-[#2148c0] overflow-hidden w-full min-w-[1280px] min-h-[720px] relative">
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
        className="panel-enter absolute top-[330px] left-[490px] w-[302px] h-[138px] flex flex-col gap-3.5 electron-no-drag"
        aria-label="Scanner login"
      >
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          <div className="h-[45px] relative">
            <label
              htmlFor={inputId}
              className={`absolute top-0 left-0 w-[300px] h-[45px] rounded border border-solid border-white block transition-shadow ${
                showTypingPlaceholder ? "input-glow" : ""
              }`}
            >
              <span className="sr-only">{PIN_PLACEHOLDER}</span>
            </label>
            <div
              className="absolute top-[13px] left-3 w-5 h-5 pointer-events-none text-white"
              aria-hidden="true"
            >
              <LockIcon className="w-full h-full block" />
            </div>
            {showTypingPlaceholder && (
              <div
                className="absolute top-0 left-0 w-[300px] h-[45px] pl-[50px] pr-3 flex items-center pointer-events-none font-['Poppins'] font-light text-white/90 text-sm tracking-[0] leading-5"
                aria-hidden
              >
                <Typewriter
                  text={PIN_PLACEHOLDER}
                  loop
                  speed={75}
                  pauseMs={1800}
                  cursorClassName="bg-white"
                />
              </div>
            )}
            <input
              id={inputId}
              name="scannerPin"
              type="password"
              value={scannerPin}
              onChange={(event) => setScannerPin(event.target.value)}
              autoComplete="current-password"
              aria-label={PIN_PLACEHOLDER}
              className="absolute top-0 left-0 w-[300px] h-[45px] pl-[50px] pr-3 font-['Poppins'] font-light text-white text-sm tracking-[0] leading-5 bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="all-[unset] box-border h-[45px] relative cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded transition-transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Login"
          >
            <div className="absolute top-0 left-0 w-[300px] h-[45px] bg-white rounded shadow-[0px_4px_4px_#0000004c]" />
            <div className="absolute top-3 left-[127px] font-['Montserrat'] font-semibold text-[#2148c0] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
              LOGIN
            </div>
          </button>
        </form>
        <button
          type="button"
          className="ml-[158px] w-[130px] h-5 font-['Montserrat'] font-medium text-white text-base text-center tracking-[0] leading-[normal] cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
        >
          <Typewriter text="Don't Have Pin?" speed={38} startDelay={1200} showCursor={false} />
        </button>
      </section>
    </main>
  );
};

export default ScannerLogin;
