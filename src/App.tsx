/**
 * Scanner PC — React + Electron
 * @author OWXLD — made by OWXLD
 */
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { MadeByOwxld } from "./components/MadeByOwxld";
import { WindowClose } from "./components/WindowClose";
import ScannerLogin from "./screens/ScannerLogin";
import Scanner from "./screens/Scanner";
import Finish from "./screens/Finish";

export default function App() {
  return (
    <>
      <WindowClose />
      <MadeByOwxld />
      <AnimatedRoutes>
        <Routes>
          <Route path="/" element={<ScannerLogin />} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatedRoutes>
    </>
  );
}
