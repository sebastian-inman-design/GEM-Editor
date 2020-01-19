const { app, BrowserWindow } = require('electron')

app.on('ready', () => {

  const main = new BrowserWindow({
    width: 1569,
    height: 844,
    center: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#2D2D2D',
    webPreferences: {
      nodeIntegration: true
    }
  })

  if(process.env.NODE_ENV === 'dev') {

    main.loadURL(`http://localhost:5000`)
    main.webContents.openDevTools()

  }else{

    main.loadURL(`file://${__dirname}/dist/index.html`)

  }

})

// Quit the application when all windows are closed.
app.on('window-all-closed', () => app.quit())