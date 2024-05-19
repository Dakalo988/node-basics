const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControlle');

router.post ('users', userController.addUser);
router.get('/user', userController.getAlluser);
router.put('/user/:id', userController.deleteUser);
router.delete('/user/:id',userController.deleteUser)
module.exports = router;