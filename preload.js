"use strict";

const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
	"api", {
		testApi: () => ipcRenderer.invoke("test", 1, 99)
			.then((result) => {
				console.log("IPC api1 OK. add -> " + result)
			})
			.catch((err) => {
				console.log(err)
			}),
		testApi2: () => ipcRenderer.send("ipc-api2"),
	}
);
