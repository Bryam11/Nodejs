const express = require('express')
const router = express.Router();

const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks')

//Todo http://localhost/tracks GET, POST, DELETE, PUT
//? siempre comillas dobles

/**
 *  Lista los items
 */
router.get("/", getItems);
/**
 *  Crea los items
 */
router.post("/", validatorCreateItem, createItem);
/**
 *  obtener detalle Item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 *  Actualizar detalle Item
 */
router.put("/:id", validatorGetItem, validatorGetItem, updateItem);
/**
 *  Eliminar Item
 */
router.delete("/:id", validatorGetItem, validatorGetItem, deleteItem);

module.exports = router