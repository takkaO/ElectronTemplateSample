"use strict";

// preload.js
const electron = require('electron');
// add global variables to your web page
function init(){
	global.isElectron = true;
	global.ipcRenderer = electron.ipcRenderer;
	global.remote = electron.remote;
	// also OK
	//window.isElectron = true;
	//window.ipcRenderer = ipcRenderer;
	//window.remote = electron.remote;
}

init();