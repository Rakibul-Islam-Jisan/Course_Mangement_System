const express = require('express')
const router = express.Router()
const createCourseController =  require('../controllers/courseControllers/createCourseController')
const getAllCourseController = require('../controllers/courseControllers/getAllCourseController')
const singleCourseController = require('../controllers/courseControllers/singleCourseController')
const deleteSingleCourseController = require('../controllers/courseControllers/deleteSingleCourseController')

router.post('/createCourse',createCourseController)
router.get('/getAllCourses',getAllCourseController)
router.get('/singleCourse/:id',singleCourseController)
router.delete('/deleteCourse/:id',deleteSingleCourseController)

module.exports = router