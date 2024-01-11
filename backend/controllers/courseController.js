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
    units: req.body.units
  })

  res.status(200).json(course)
})

// @description     Get goals
//@route             GET /api/goals/:gradeorder
// @access          Public
// const getSchoolYear = asyncHandler(async (req, res) => {
//   const schoolYear = await Year.find({ order: req.params.gradeorder})

//   res.status(200).json(schoolYear)
// })

module.exports = {

  addCourse
}