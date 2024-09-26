const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false, // 隐藏默认的顶部功能栏
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            nodeIntegration: true, // 允许使用 Node.js API
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
    // win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
