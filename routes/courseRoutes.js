const express = require('express')
const router = express.Router()
const createCourseController =  require('../controllers/courseControllers/createCourseController')
const getAllCourseController = require('../controllers/courseControllers/getAllCourseController')

router.post('/createCourse',createCourseController)
router.get('/getAllCourses',getAllCourseController)

module.exports = router