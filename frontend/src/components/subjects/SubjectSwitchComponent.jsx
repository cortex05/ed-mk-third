import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { temporarySubjectFetch } from '../../Utils'
// import { setActiveCourse, getActiveCourseUnits } from '../../features/course/courseSlice';
// get summaries for math here are the properties.
// order, subject, courseId, summary

export default function SubjectSwitchComponent({subject}) {
  const [subjectCourseSummaries, setSubjectCourseSummaries] = useState([])
  useEffect(() => {
    setSubjectCourseSummaries(temporarySubjectFetch())
  }, [])
  const navigate = useNavigate()

  const handleRedirect = (order, course) => {
    // dispatch(setActiveCourse(course))
    // dispatch(getActiveCourseUnits(course))
      
    navigate(`/${subject.toLowerCase()}/${course}`)
  }

  if(subjectCourseSummaries.length > 0){
    return (
      <div className='switch'>
        <h1 className='sans'>Here is the overview for:</h1>
        <h2>{subject}</h2>
        {
          subjectCourseSummaries.map((gradeLevel, index) => {
              return (
                <div className='grade-subject-link' key={index}>
                  <div onClick={() => handleRedirect(gradeLevel.order, gradeLevel.courseId)}>
                    <span>{gradeLevel.summary}</span>
                  </div>
                </div>
              ) 
          })
        }
      </div>
    )
  } else {
    return <div>No courses for {subject} Created yet.</div>
  }
}