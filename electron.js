const { app, BrowserWindow } = require('electron')

let main

const createWindow = () => {

  main = new BrowserWindow({
    width: 1569,
    height: 844,
    center: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#2D2D2D',
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true,
      nativeWindowOpen: true
    }
  })

  if(process.env.NODE_ENV === 'dev') {

    main.loadURL(`http://localhost:5000`)
    main.webContents.openDevTools()

  }else{

    main.loadFile(`build/index.html`)

  }

  // Emitted when the window is closed.
  main.on('closed', () => {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    main = null
    
  })

}

// Create the application window.
app.on('ready', () => createWindow())

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if(process.platform !== 'darwin') app.quit()

})


// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {

  if(main == null) createWindow()

})