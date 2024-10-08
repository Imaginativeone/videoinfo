const electron = require('electron')

const { app, BrowserWindow, ipcMain } = electron
// import os from 'os'
const os = require('os')

app.on('ready', () => {
  console.log('App is now ready')
  const mainWindow = new BrowserWindow({})
})

if (os.platform() === 'darwin' && os.arch() === 'x64') {
  app.disableHardwareAcceleration()
}

function custom(strings, ...values) {
  console.log('strings', strings)
  console.log('values',  values)
}

// const name = "Doug"
// const hobby = "weight lifting"
// custom`My name is ${name} and I love ${hobby}`

// import { app, BrowserWindow, ipcMain } from 'electron';
// import os from 'os';
// if (os.platform() === 'darwin' && os.arch() === 'x64') {
//   app.disableHardwareAcceleration();
// }
