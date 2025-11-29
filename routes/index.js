const express = require('express');
const router = express.Router();
const res = require('express/lib/response');

router.get('/', (req, res) => res.send('hello world'))
router.get('/users', (req, res) => res.send('list of users'))
router.get('/profile', (req, res) => res.send('profile page'))

module.exports = router;