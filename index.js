/**
 * スプラッシュ画面を表示する
 *
 */

//------------------------------------
// モジュール
//------------------------------------
const { app, BrowserWindow, ipcMain, screen } = require('electron')

//------------------------------------
// 定数
//------------------------------------

//------------------------------------
// グローバル変数
//------------------------------------
// ウィンドウ管理用
let mainWin


/**
 * ウィンドウを作成する
 */
function createWindow () {
  // ウィンドウを新たに開く
  mainWin = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // ウィンドウ内に指定HTMLを表示
  mainWin.loadFile('public/index.html')

  // 準備が整ったら表示
  mainWin.once('ready-to-show', () => {
    mainWin.show()
  })
}

//------------------------------------
// [app] イベント処理
//------------------------------------
// 初期化が終了したらウィンドウを新規に作成する
app.whenReady().then(()=>{
  createWindow();
})


// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  // macOS以外はアプリを終了する
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// アプリがアクティブになった時の処理
// (macOSはDocのアイコンがクリックされたとき）
app.on('activate', () => {
  // ウィンドウがすべて閉じられている場合は新しく開く
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
