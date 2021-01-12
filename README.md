# Electron Sample - splash
アプリ起動時にスプラッシュ画面を表示するサンプルです。

<video src="doc/movie/electron-splash.mp4" controls autoplay></video>

## 解説ページ
* [[Electron] アプリ起動時にスプラッシュ画面を表示する
](https://blog.katsubemakito.net/nodejs/electron/splash)

## 準備
Gitでリポジトリを取得します。
```shellsession
$ git clone https://github.com/katsube/electron-sample-splash.git
```

Node.jsがインストールされている環境で以下のコマンドを実行し、必要なライブラリを取得します。
```shellsession
$ cd electron-sample-splash
$ npm install
```

## 実行方法
以下でプレビューを行います。
```shellsession
$ npm start
```

ビルドは以下の通り。各OS用のインストーラーが作成されます。
```shellsession
$ npm run build-win
$ npm run build-mac
```
