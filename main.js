"use strict";

const { app, BrowserWindow, ipcMain } = require("electron");

var mainWindow = null;


function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: { 
			nodeIntegration: false,
			contextIsolation: false,
			preload: __dirname + "/preload.js",
		}
	});

	mainWindow.webContents.loadURL("file://" + __dirname + "/index.html");
	//mainWindow.loadFile("index.html");
	// Dev tool を自動起動
	mainWindow.webContents.openDevTools();

	
	/* for IPC test */
	ipcMain.on('ping', (event, msg) => {
		console.log(msg) // msg from web page
		mainWindow.webContents.send('pong', 'hi') // send to web page
	});
	/* for IPC test */

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
};


app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on("ready", createWindow);


app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});