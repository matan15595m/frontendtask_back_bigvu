const express = require('express')
const router = express.Router()
const course = require('../controllers/course.js')

router.get('/',course.getAllCourses)

router.get('/:id',course.getcourseById)

router.post('/',course.addNewcourse)

module.exports = router