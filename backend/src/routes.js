const { Router } = require('express');
const TeacherController = require('./app/controllers/TeacherController');

const UserController = require('./app/controllers/UserController');

const router = Router();

// USERS
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);
router.post('/users', UserController.store);

// TEACHERS
router.get('/teachers', TeacherController.index);
router.get('/teachers/:id', TeacherController.show);

// router.put('/users/:id', UserController.update);

module.exports = router;
