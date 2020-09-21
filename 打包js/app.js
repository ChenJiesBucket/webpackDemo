//es6 module
import sum from './sum.js'

//commonjs
var minus = require('./minus.js')

//amd 
require(['./mult'],function(mult){
    console.log('2*3= '+mult(2,3))
})



console.log('23+24=',sum(23,24));

console.log('24-23=',minus(24,23));
//运行命令 ：webpack app.js bundle.js  version 3
//version 4 用 webpack app.js -o bundle.js