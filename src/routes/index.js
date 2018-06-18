const express = require('express'),
      asyncHandler = require('express-async-handler'),
      router = express.Router();

router.get('/', (req, res, next) => res.json({
    test : 'u4bi'
}));

router.get('/async', asyncHandler(async (req, res, next) => {

    let wait = ms => new Promise(r => setTimeout(r, ms)),
        arr = [];
    
    await wait(1000);
    await arr.push('text 1');

    await wait(1000);
    await arr.push('text 2');

    await wait(1000);
    await arr.push('text 3');

    await wait(1000);
    await arr.push('text 4');

    await wait(1000);
    await arr.push('text 5');

    res.json({
        test : 'async',
        data : arr
    });

}));

module.exports = router;