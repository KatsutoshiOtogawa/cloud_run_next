#!/bin/bash

## docker起動後、マウント後で無いと実行できない処理をここに書く。


function npm_package_install {
  npm install
}


function main {
  local root=$(pwd)
  npm_package_install
}

main
