// Import module Electron

const { BrowserWindow, app } = require('electron');

// Create a new window

/**
 * @description Create a new window
 */
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        darkTheme: true,
        autoHideMenuBar: true
    });

    win.loadFile('./src/html/index.html'); // load the main html file
}

// create a new window when the app is launched

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

// Exit the program if all windows are closed

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
});
