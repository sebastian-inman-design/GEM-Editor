const { app, BrowserWindow } = require('electron')

const mainURL = process.env.NODE_ENV === 'dev'
  ? `http://localhost:8080/#/`
  : `file://${__dirname}/public/index.html`

const settingsURL = process.env.NODE_ENV === 'dev'
  ? `http://localhost:8080/#/settings`
  : `file://${__dirname}/public/settings.html`

app.on('ready', () => {

  const main = new BrowserWindow({
    width: 1569,
    height: 844,
    center: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#2D2D2D',
    webPreferences: { nodeIntegration: true }
  }).loadURL(mainURL)

  const settings = new BrowserWindow({
    width: 700,
    height: 400,
    parent: main,
    modal: true,
    show: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#2D2D2D',
    webPreferences: { nodeIntegration: true }
  }).loadURL(settingsURL)

})

// Quit the application when all windows are closed.
app.on('window-all-closed', () => app.quit())