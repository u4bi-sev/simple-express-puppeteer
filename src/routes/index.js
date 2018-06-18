const express = require('express'),
      router = express.Router();

router.get('/', (req, res, next) => res.json({
    test : 'u4bi'
}));

module.exports = router;