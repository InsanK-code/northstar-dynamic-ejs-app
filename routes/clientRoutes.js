
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getHome);
router.get('/clients', clientController.getClients);
router.get('/clients/:id', clientController.getClientDetails);

module.exports = router;
