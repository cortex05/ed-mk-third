const express = require('express')
const router = express.Router()
const { addCourse, getSpecificCourse } = require('../controllers/courseController')

router.route('/').post(addCourse)
router.route('/:courseId').get(getSpecificCourse)

module.exports = router