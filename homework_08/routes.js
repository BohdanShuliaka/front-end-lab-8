const express       = require('express');
const router        = express.Router();
const handlers      = require('./controllers/handlers');
const bodyParser    = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/rockstars', handlers.getAll);

router.get('/rockstar/:id', handlers.getById);

router.post('/rockstar', handlers.create);

router.put('/rockstar/:id', handlers.update);

router.delete('/rockstar/:id', handlers.delete);

module.exports = router;