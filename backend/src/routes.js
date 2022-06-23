const { Router } = require('express');
const TeacherController = require('./app/controllers/TeacherController');
const CoordinatorController = require('./app/controllers/CoordinatorController');

const UserController = require('./app/controllers/UserController');

const router = Router();

// USERS
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);
router.post('/users', UserController.store);
// router.put('/users/:id', UserController.update);

// TEACHERS
router.get('/teachers', TeacherController.index);
router.get('/teachers/:id', TeacherController.show);

// COORDINATORS
router.get('/coordinators', CoordinatorController.index);
module.exports = router;
