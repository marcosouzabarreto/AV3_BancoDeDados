const { Router } = require('express');
const TeacherController = require('./app/controllers/TeacherController');
const CoordinatorController = require('./app/controllers/CoordinatorController');
const UserController = require('./app/controllers/UserController');
const AdminController = require('./app/controllers/AdminController');

const Authenticator = require('./app/utils/Authenticator');
const CourseController = require('./app/controllers/CourseController');
const SubjectController = require('./app/controllers/SubjectController');

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

// COURSES
router.get('/courses', CourseController.index);
router.get('/courses/:id', CourseController.show);
router.get('/courses/coordinator/:id', CourseController.showByCoordinatorId);
// router.get('/courses/subjects/:id', CourseController.showCourseSubjects);
router.post('/courses', CourseController.store);
router.delete('/courses/:id', CourseController.delete);

// LOGIN
router.post('/login', Authenticator.login);
router.post('/cadastro', UserController.store); // TODO: figure out how to make this look prettier

// SUBJECTS
router.get('/subjects', SubjectController.index);
router.post('/subjects', SubjectController.store);

module.exports = router;
