const { contextBridge, ipcRenderer } = require('electron');

// Expõe uma API segura para o index.html acessar funcionalidades do Electron
contextBridge.exposeInMainWorld('electronAPI', {
  showNotification: (opts) => ipcRenderer.invoke('show-notification', opts),
  isElectron: true,
  platform: process.platform,
});
