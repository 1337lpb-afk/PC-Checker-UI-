/** Preload Electron — made by OWXLD */
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("scanner", {
  platform: process.platform,
});
