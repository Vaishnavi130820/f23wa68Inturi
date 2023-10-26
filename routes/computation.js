var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
  
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.imul(x,y);
let y2=Math.log(y);
let y3=Math.log10(x);
  res.send('Math.imul() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.log() applied to '+y+' is '+y2+"<br>"+'Math.log10()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.imul(x,x);
  let y2=Math.log(x);
  let y3=Math.log10(x);

  res.send('Math.imul() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.log() applied to '+y+' is '+y2+"<br>"+'Math.log10()  applied to '+x+' is'+y3);
}
});

module.exports = router;