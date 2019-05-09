"use strict";

const ipcRenderer = window.ipcRenderer;
const remote = window.remote;

window.addEventListener("load", function () {
	if (window.isElectron) {
		console.log("OK");

		ipcRenderer.on('pong', (event, msg) => console.log(msg));
		ipcRenderer.send('ping', 'hello');
	}
});
