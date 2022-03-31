const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const { createItem, getItem, getItems, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');

/**
 * Listar items
 */
router.get("/", getItems);
/**
 * obtiene detalle de un item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Elimina un item
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * Create Item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);


module.exports = router;