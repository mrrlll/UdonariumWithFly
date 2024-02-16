
[ユドナリウム（Udonarium）](https://github.com/TK11235/udonarium)の私家改造版、高度とかチャットテキストの色とか立ち絵（ユドナリウムだとキャラクターの画像と紛らわしいのでスタンドと呼称）とか。

配布用ファイルは用意していないので、自分で配置したい場合はcloneしてbuildする必要があります。

本家ユドナリウムはバージョン1.16.0より推奨ブラウザにデスクトップ版Mozilla Firefoxが追加されましたが、Udonarium with Flyの推奨ブラウザは現状デスクトップ版Google Chromeのみです。

[お試しページ](https://nanasunana.github.io/)

## ToDo的なもの（優先順位ではない）

* ソースをきれいにする(特に高度、💭周り)
* ~~ランダムチャート作成機能~~ ダイスボット表実装済
* 管理パネル作ってキャラクター画像切り替えと顔ICの上限増やす
* ~~カットイン的なもの~~ 実装済。ユドナリウム リリィと同様に音楽ファイルを別にアップすると再リンクする
* 投票、効果音
* ~~キャラクターコマの身長指定？~~ 実装済
* ~~スタンドがダイスボット結果末尾に反応~~ 反応するように
* サイコロ・フィクションの判定ヘルパ
* 地形の4面に別の画像を設定

## 実験的機能（ほとんどテストされていない、一部環境から利用できない不具合あり）

### BCDice-API対応

下記のようにconfig.yamlにBCDice-APIのエンドポイントURLを記述するとBCDice-API経由でダイスボットが反応します。

デフォルトの対応APIバージョンは2です、バージョン1が必要の場合は下記のdice配下のapiキーの値に1と記述してください（APIバージョン1はBCDice-API 3.0.0で削除されました）。APIバージョン3には現状対応していません。なお、判定結果の成功、失敗での色分けに対応するためにはAPIバージョンが2以上である必要があります。

```
webrtc:
  key: [SkywayのAPIキー]
  config: #未使用
    iceServers: #未使用
      - url: stun:stun.skyway.io:3478
      - url: turn:homeo@turn.bistri.com:80
        credential: homeo
app: #未使用
dice:
  url: [BCDice-APIのエンドポイントURL]
  api: [APIバージョン]
```

**↓↓↓↓　以下、ユドナリウム本家より　↓↓↓↓**


# ユドナリウム

[ユドナリウム（Udonarium）][1]はWebブラウザで動作するボードゲームオンラインセッション支援ツールです。

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TK11235/udonarium/blob/master/LICENSE)

[![Udonarium](docs/images/ss.jpg "スクリーンショット")][1]

## クイックスタート

今すぐ試したり利用したりできる公開サーバを用意しています。  
推奨ブラウザはデスクトップ版Google Chrome、またはデスクトップ版Mozilla Firefoxです。

[**ユドナリウムをはじめる**][1]

## 目次

- [機能](#機能)
- [サーバ設置](#サーバ設置)
- [開発者クイックスタート](#開発者クイックスタート)
- [開発に寄与する](#開発に寄与する)
- [今後の開発](#今後の開発)
- [License](#license)

## 機能

- **ブラウザ間通信**
  - WebRTCを利用したブラウザ間通信を実現しています。  
    サーバサイドを介さずに全ての機能をWebブラウザ上で完結させることを目指しています。
- **軽量 & リアルタイム**
  - 軽量で快適に動作し、ユーザの操作は他のユーザにリアルタイムに反映されます。
- **遊ぶ機能**
  - ルーム機能
  - 複数テーブル管理、テーブルマスク
  - 立体地形
  - コマ、カード、共有メモ
  - チャット送受信、チャットパレット
  - ダイスボット（[BCDice](https://github.com/bcdice/bcdice-js)）
  - 画像ファイル共有
  - BGM再生
  - セーブデータ生成（ZIP形式）

## サーバ設置

ユーザ自身でWebサーバを用意し、そのサーバにユドナリウムを設置して利用することができます。  

1. [リリース版（**udonarium.zip**）](../../releases/latest)をダウンロードして解凍し、Webサーバに配置してください。  
**開発者向けのソースコードをダウンロードしないように注意して下さい。**
1. [旧SkyWay](https://support.skyway.io/hc/)のAPIキーを`assets/config.yaml`に記述します。  
    - [旧SkyWay](https://support.skyway.io/hc/)のCommunity Edition(無料版)の新規登録は終了しています。
    - [新SkyWay](https://skyway.ntt.com/)への対応はユドナリウム 1.16.0時点では実装途中です。
1. サーバに配置したユドナリウムの`index.html`にアクセスして動作することを確認してみてください。  
上手く動作しない時は付属の`上手くサーバで動かない時Q&A.txt`を参照してください。

ユドナリウムはサーバーサイドの処理を持たないためCGIやデータベースは必要はありません。

## 開発者クイックスタート

ソースコードはそのままでは実行できません。  
開発環境を用意してビルドする必要があります。

### 開発環境

[Node.js](https://nodejs.org/)と[npm](https://www.npmjs.com/)が必要です。  

言語はTypeScriptを用い、[Angular](https://angular.io/)で実装されています。  
開発を効率化するCLIツールとして[Angular CLI](https://github.com/angular/angular-cli)を利用しています。

インストール手順は[Angular公式ページのセットアップ](https://angular.jp/guide/setup-local)が参考になります。

#### Angular CLI

リポジトリからソースコードをダウンロードした後、初回起動時のコマンドは以下のようになります。

```bash
cd "ソースコードを展開したディレクトリの場所"
npm install
ng serve
```

`ng serve`を実行すると`http://localhost:4200/`で開発用サーバが起動します。  
いずれかのソースコードを変更すると、アプリケーションは自動的にリロードされます。

`ng build`でプロジェクトのビルドを実行します。ビルド成果物は`dist/`ディレクトリに格納されます。  

#### 旧SkyWay

**[旧SkyWay](https://support.skyway.io/hc/)のCommunity Edition(無料版)の新規登録は終了しています。**

このアプリケーションは通信処理にWebRTCを使用しています。  
WebRTC向けのシグナリングサーバとして[旧SkyWay](https://support.skyway.io/hc/ja)を利用しているため、動作確認のために旧SkyWayのAPIキーが必要です。

取得したAPIキーの情報は`src/assets/config.yaml`に記述します。

#### 新SkyWay

**[新SkyWay](https://skyway.ntt.com/)を使用した通信処理はユドナリウム 1.16.0時点では実装途中です。**

開発者向けのプレビュー版機能として実装しています。本番環境では使用しないでください。  
開発者自身でコード修正やセキュリティ対応を実施してプライベートな動作確認を行う場合のみ、[commit: 1bf7d86](https://github.com/TK11235/udonarium/commit/1bf7d866d97b791d226dc9b8c23de0357bf478b4) を参考にコードを書き替えてビルドを行ってください。

## 開発に寄与する

バグを報告したり、ドキュメントを改善したり、開発の手助けをしたりしたいですか？

報告や要望の窓口として[GitHubのIssue](https://github.com/TK11235/udonarium/issues)、または[Twitter](https://twitter.com/TK11235)を利用できます。  
コードの[Pull Request](https://github.com/TK11235/udonarium/pulls)も歓迎です。

### 報告

バグ報告では、バグを再現できる必要十分な条件について、分かっている範囲で詳しく書いてください。  
基本的には「報告を受けて改修 → 次回更新時に反映」の流れで対応する予定です。

### 要望

機能要望では「何故それが必要なのか」について説明があると良いです。  
ただ、難易度や優先度の都合によりそっとしたままになる可能性があります。

### Pull Request

作成したコードやドキュメントをこのリポジトリに反映させたい時はPull Request（PR）を送ってください。  

PRのコードが完全ではない場合でも作業中PRとして送ることができます。  
その場合、作業中である旨をPRタイトルか説明文に付け加えてください。

## 今後の開発

最低限必要となる機能は実装されていますが、作業すべき課題が残されています。

- UIデザインおよび操作性の改善
- モバイル向け対応
- 機能追加
- ドキュメント整備

## License

[MIT License](https://github.com/TK11235/udonarium/blob/master/LICENSE)

[1]: https://udonarium.app/
