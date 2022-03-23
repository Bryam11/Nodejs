const express = require('express')
const router = express.Router();
const { getItems, createItem } = require('../controllers/tracks')

//Todo http://localhost/tracks GET, POST, DELETE, PUT
//? siempre comillas dobles

router.get("/", getItems);
router.post("/", createItem);

module.exports = router