import { FigmaImage } from "@/components/FigmaImage";
import { Typewriter } from "@/components/Typewriter";
import CompleteIcon from "./icon-complete.svg?react";
import DoneIcon from "./icon-done.svg?react";
import vectorUrl from "./vector.svg?url";

export const Finish = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <main
      className="electron-drag bg-[#2148c0] overflow-hidden w-full min-w-[1280px] min-h-[720px] relative"
      aria-label="Scan finished screen"
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
        className="banner-pop electron-no-drag absolute top-[564px] left-[-11px] w-[520px] h-[120px] flex bg-[#08c552] rounded-[9px]"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        <div className="mt-[39px] w-[342.25px] h-[47.57px] ml-[32.3px] relative">
          <p className="absolute top-0 left-[62px] w-[280px] font-['Inter'] font-semibold text-white text-base tracking-[0] leading-[normal]">
            <Typewriter
              text="The scan is finished !"
              speed={45}
              startDelay={300}
              cursorClassName="bg-white"
            />
          </p>
          <p className="absolute top-[29px] left-[62px] w-[277px] font-['Inter'] font-normal text-white text-sm tracking-[0] leading-[normal]">
            <Typewriter
              text="You can close the program if you want"
              speed={26}
              startDelay={1400}
              showCursor={false}
            />
          </p>
          <div className="absolute top-px left-0 w-[46px] h-[39px] flex items-center justify-center bg-[#74ff7438] rounded-[23.22px/19.71px]">
            <DoneIcon className="w-4 h-auto block" aria-hidden />
          </div>
        </div>
      </section>
      <div
        className="icon-pop absolute top-[209px] left-[533px] w-[213px] h-[213px] pointer-events-none"
        aria-label="Completed scan illustration"
        role="img"
      >
        <CompleteIcon className="w-full h-full block" />
      </div>
      <button
        type="button"
        onClick={handleClose}
        className="electron-no-drag panel-enter absolute bottom-8 right-8 px-6 py-2 bg-white text-[#2148c0] font-['Montserrat'] font-semibold rounded cursor-pointer shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        Fermer
      </button>
    </main>
  );
};

export default Finish;
