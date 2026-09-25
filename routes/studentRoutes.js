const express = require('express')
const router = express.Router()
const createStudentController = require('../controllers/studentController/createStudentController')
const getAllStudentController = require('../controllers/studentController/getAllStudent')
const singleUserController = require('../controllers/studentController/singleStudentController')
const entrollmentController = require('../controllers/studentController/entrollmentController')
const deleteStudentController = require('../controllers/studentController/deleteStudentController')

router.post('/createStudent',createStudentController)
router.get('/getAllStudent',getAllStudentController)
router.get('/singleUser/:id',singleUserController)
router.post('/entrollment/student/:StudentID/entroll/:CourseID',entrollmentController)
router.delete('/deleteStudent/:id',deleteStudentController)

module.exports = router