/**
 * スプラッシュ画面を表示してから起動する
 *
 */

//------------------------------------
// モジュール
//------------------------------------
const { app, BrowserWindow } = require('electron')

//------------------------------------
// グローバル変数
//------------------------------------
// ウィンドウ管理用
let mainWin
let splashWin

/**
 * スプラッシュ画面を作成する
 */
function createSplash () {
  // ウィンドウを新たに開く
  splashWin = new BrowserWindow({
    show: false,
    frame: false,   // フレームレスにする
    width: 800,
    height: 322,
  })

  // スプラッシュ用のHTMLを表示
  splashWin.loadFile('public/splash.html')

  // 準備が整ったら表示
  splashWin.once('ready-to-show', () => {
    splashWin.show()
  })
}

/**
 * メインウィンドウを作成する
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

  // アプリ本体のHTMLを表示
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
  // スプラッシュを最初に表示
  createSplash()

  // 2秒経過したらアプリ画面を表示
  setTimeout(()=>{
    splashWin.destroy()     // スプラッシュを削除
    createWindow()          // アプリを開始
  }, 2000)
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
