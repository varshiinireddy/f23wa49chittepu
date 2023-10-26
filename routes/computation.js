var express = require('express');
var router = express.Router();
var sin=0;
var sin =0;
var cbrt =0
/* GET users listing. */
router.get('/', function(req, res, next) {
    var x= Math.random();
    var y = Math.random();
    sin = Math.sin(x,y);
    sin = Math.sin(x);
    cbrt = Math.cbrt(x);
    //res.render('computation', {title: `Math.sin(x,y) applied to ` + {x} +  + `is` + {sin}  });
    //res.render('Math.sin(x,y) applied to ' + x   + 'is' + sin  );
    res.setHeader('Content-Type', 'text/html');

    res.send(  `f(sin(${x},${y})) is ${sin}`);
  
});

module.exports = router;