let express = require('express');
let router = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');

// require control models
let user_controller = require('../controllers/userController');
const user = require('../models/user');

/* url - /donation 
   everything is under this url as it reduces error with front end
*/

router.get('/', user_controller.index);

// register, we don't want to have authentication to register
router.post('/registration', user_controller.registration);
// login
router.post('/', passport.authenticate('local', {session: false}), user_controller.authenticate);
// logout
router.get('/logout', passport.authenticate('jwt', {session: false}), user_controller.logout);
// authentication
router.get('/authenticated', passport.authenticate('jwt', {session: false}), user_controller.authenticated);

// router.get('/donation', passport.authenticate('jwt', {session: false}), user_controller.dashboard_get_users);

module.exports = router;