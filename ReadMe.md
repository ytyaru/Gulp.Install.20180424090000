# このソフトウェアについて

Gulp環境構築する。

# 使い方

## node_modules インストール

```sh
$ cd (このディレクトリ)
$ ./install.sh
```

* package.json
* node_modules/
* dst/

ファイルサイズ約60MB。所要時間約3m30s。[※](memo/install.md)

## gulp

```sh
$ cd (このディレクトリ)
$ gulp
```

### トランスパイル

* `./src/stylus/**/*.styl`→`./dst/css/*`
* `./src/pug/**/*.pug`→`./*`

詳細は[gulpfile.js](gulpfile.js)参照。

### 起動

ローカルサーバ、ブラウザ、が起動し、./index.htmlが表示される。

ローカルサーバはターミナルで`Ctrl+C`キー入力すれば停止できる。(Ctrl+Zで強制終了してしまうとプロセスが残ってしまう模様)[※](run.md)

# 実装時にハマったこと

vimでインデント設定してやらないとエラーになる。[※](memo/vim.md)

# 開発環境

2018-04-24時点。

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * vim 7.4
        * Chromium 56.0.2924.84
        * Node.js 9.4.0
            * npm 5.6.0
                * n 2.1.7
                * Gulp 3.9.1
                    * gulp-stylus 2.7.0
                    * gulp-pug 4.0.1
                    * gulp-plumber 1.2.0
                    * gulp-notify 3.2.0
                    * browser-sync 2.23.7

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

