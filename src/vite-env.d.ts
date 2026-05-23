/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?url" {
  const src: string;
  export default src;
}

interface ScannerApi {
  platform: string;
}

declare global {
  interface Window {
    scanner?: ScannerApi;
  }
}

export {};
