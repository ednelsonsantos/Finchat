const { app, BrowserWindow, shell, Notification, ipcMain } = require('electron');
const path = require('path');

// Manter referência para evitar garbage collection
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 420,
    height: 820,
    minWidth: 360,
    minHeight: 600,
    title: 'FinChat',
    backgroundColor: '#f5f5f3',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    // Simula um smartphone em modo app
    autoHideMenuBar: true,
  });

  // Carrega o index.html diretamente (sem servidor)
  win.loadFile(path.join(__dirname, '..', 'index.html'));

  // Abre links externos no navegador do sistema (não dentro do Electron)
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  win.on('closed', () => { win = null; });
}

// Notificações nativas via Electron (substitui a Notification API do browser)
ipcMain.handle('show-notification', (_event, { title, body, tag }) => {
  if (!Notification.isSupported()) return;
  const notif = new Notification({ title, body, icon: path.join(__dirname, 'icon.png') });
  notif.on('click', () => { if (win) win.focus(); });
  notif.show();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS: recriar janela ao clicar no ícone do dock
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // No macOS mantém o app vivo mesmo sem janelas
  if (process.platform !== 'darwin') app.quit();
});
