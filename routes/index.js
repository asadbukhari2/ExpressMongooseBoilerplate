const express = require('express');
require('express-group-routes');
const router = express.Router();

const { userController, authController } = require('../controllers');

router.group('/v1', router => {
  // user Routes
  router.post('/user-register', userController.userRegister);

  // auth Routes
  router.post('/user-login', authController.userLogin);
});

module.exports = router;
