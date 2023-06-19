const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');

router.get('/photos/:user', userCtrl.getPhotosByUser);
router.post('/photos', userCtrl.uploadPhoto);
router.put('/photos', userCtrl.updatePhotoDescription);
router.delete('/photos/:user', userCtrl.deleteAllPhotosByUser);
router.delete('/photos', userCtrl.deletePhoto);

module.exports = router;