var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { id } = req.query;
  if (!id) {
    return res.json({ message: 'no id' });
  }
  res.json(data.find(v => v.id == id));
});

data = [
  {
    id: 1,
    name: 'num 1',
    to_relationships: [
      { id: 2, name: 'num 2' },
      { id: 3, name: 'num 3' },
      { id: 4, name: 'num 4' }
    ],
    from_relationships: [
      { id: 5, name: 'num 5' }
    ],
  },
  {
    id: 4,
    name: 'num 4',
    to_relationships: [
      { id: 5, name: 'num 5' },
      { id: 6, name: 'num 6' },
      { id: 7, name: 'num 7' }
    ],
    from_relationships: [
      { id: 1, name: 'num 1' }
    ],
  }
]

module.exports = router;
