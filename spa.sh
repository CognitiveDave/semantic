#! /bin/bash
npm run build
mkdir ./dist/static
mkdir ./dist/static/css
mkdir ./dist/static/js
mkdir ./dist/static/img
cp ./dist/css/*.* ./dist/static/css
cp ./dist/js/*.* ./dist/static/js
cp ./dist/img/*.* ./dist/static/img