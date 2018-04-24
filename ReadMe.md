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

* ./stylus/*


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

使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[jQuery](https://jquery.com/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright JS Foundation and other contributors](https://jquery.org/license/)
[highlight](https://highlightjs.org/)|[BSD-3-clause](https://spdx.org/licenses/BSD-3-Clause-Clear.html)|[Copyright (c) 2006, Ivan Sagalaev](https://github.com/isagalaev/highlight.js/blob/master/LICENSE)
[marked](https://github.com/markedjs/marked)|[MIT](https://opensource.org/licenses/MIT)|[Copyright (c) 2011-2018, Christopher Jeffrey.](https://github.com/markedjs/marked/blob/master/LICENSE.md)
