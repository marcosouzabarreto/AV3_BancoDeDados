const { Router } = require('express');
const TeacherController = require('./app/controllers/TeacherController');
const CoordinatorController = require('./app/controllers/CoordinatorController');
const UserController = require('./app/controllers/UserController');
const AdminController = require('./app/controllers/AdminController');

const Authenticator = require('./app/utils/Authenticator');

const router = Router();

// USERS
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);
router.post('/users', UserController.store);

// TEACHERS
router.get('/teachers', TeacherController.index);
router.get('/teachers/:id', TeacherController.show);

// COORDINATORS
router.get('/coordinators', CoordinatorController.index);
router.get('/coordinators/:id', CoordinatorController.show);

// ADMINS
router.get('/admins', AdminController.index);
router.get('/admins/:id', AdminController.show);

// LOGIN
router.post('/login', Authenticator.login);
router.post('/cadastro', UserController.store); // TODO: figure out how to make this look prettier

module.exports = router;
