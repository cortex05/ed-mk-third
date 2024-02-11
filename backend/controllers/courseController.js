const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')

// @description     add schoolYear subject
//@route             POST /api/course/
// @access          Public
const addCourse = asyncHandler(async (req, res) => {
  if(!req.body){
    res.status(400)
    throw new Error('Please add a course')
  }

  const course = await Course.create({
    name: req.body.name,
    courseId: req.body.courseId,
    units: req.body.units
  })

  res.status(200).json(course)
})

// @description     Get Specific course
//@route             GET /api/course/:courseId
// @access          Public
const getSpecificCourse = asyncHandler(async (req, res) => {
  const specificCourse = await Course.find({ courseId: req.params.courseId})

  res.status(200).json(specificCourse)
})

module.exports = {
  addCourse,
  getSpecificCourse
}