var express = require('express');
var router = express.Router();
var atan2=0;
var atanh =0;
var cbrt =0
/* GET users listing. */
router.get('/', function(req, res, next) {
    var x= Math.random();
    var y = Math.random();
    atan2 = Math.atan2(x,y);
    atanh = Math.atanh(x);
    cbrt = Math.cbrt(x);
    //res.render('computation', {title: `Math.atan2(x,y) applied to ` + {x} +  + `is` + {atan2}  });
    //res.render('Math.atan2(x,y) applied to ' + x   + 'is' + atan2  );
    res.setHeader('Content-Type', 'text/html');

    res.send(  `f(atan2(${x},${y})) is ${atan2}`);
  
});

module.exports = router;