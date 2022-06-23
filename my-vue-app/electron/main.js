import {app, BrowserWindow, ipcMain} from 'electron'
import path from 'path'

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false, // 是否开启隔离上下文
            nodeIntegration: true, // 渲染进程使用node API
            preload: path.join(__dirname, "./preload.js")
        }
    })
    // 判断环境
    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, '../index.html'))
    }else {
        const url = 'http://localhost:3000'
        win.loadURL(url)
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().lengeh === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.plateform !== 'darwin') {
        app.quit()
    }
})

// 监听 渲染进程 方法
ipcMain.on('window-new', (e, data) => {
    console.log(data)
})