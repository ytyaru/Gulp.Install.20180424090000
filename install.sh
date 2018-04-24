#pj=/tmp/work/Gulp.TestProject
pj=$(cd $(dirname $0); pwd)
[ -d $pj/node_modules ] && { echo "node_modules/はすでに存在します。"; return; }
#mkdir -p $pj
cd $pj
npm init
npm i -D gulp
npm i -D gulp-stylus
npm i -D gulp-pug
npm i -D gulp-plumber
npm i -D gulp-notify
npm i -D browser-sync

. ./init_project.sh
