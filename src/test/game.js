require('./game.css')
const $  = require('jquery');
var img1 = require('./images/fllower_1.png');
console.log(img1)
// $("#div1").css({background:`url(${img1})`,color:"#f45"})

$("#div1").css({color:"#f45",background:"url('./images/fllower_1.png')"})