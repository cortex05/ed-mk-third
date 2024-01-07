import React, {Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { getSubjectsForYear, getActiveSubject, setActiveSubject, blankSubjectsForYear } from '../features/year/yearSlice'
// import SubjectDisplay from '../components/SubjectDisplayComponent'

// import '../styles/GradeLevelScreen.css'
// import GRADESUBJECTS from '../data/GradeSubjects'
import { getOrder } from '../functions'

const GradeLevelsScreen = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const [currentSelection, setCurrentSelection] = useState("Select")
  const [order, setOrder] = useState(null)
  
  const onHandleSelect = (e) => {
    // setActiveSubject("")
    // dispatch(blankSubjectsForYear())
    let selection = e.target.value
    let pick = getOrder(selection)
    console.log(pick)
    // setCurrentSelection(selection)

    setOrder(pick)
    // if(pick === 7 || pick === 10){
      console.log("inside")
      // REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT 
      // dispatch(getSubjectsForYear(pick))
      // navigate(`/gradelevels/${pick}`)
      // REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT REDIRECT 
    // }
  } 
    
  return (
    <div className="grade-level">
    <div className="inner">
      <h1 className='sans'>Grade Overviews</h1>
      <h3 className='sans'>Use the selector below to pick a grade and see an overview of what to expect for that year.</h3>
      <div className="level-selector">
        <h4 className='serif_bold'>What grade level would you like to look at?</h4>
        <select onChange={(e) => onHandleSelect(e)}>
          <option value={null}>No Selection</option>
          <option value="6th Grade">6th grade</option>
          <option value="9th Grade">9th grade</option>
        </select>
      </div>
      {/*
        currentSelection === "Select"
        ? <div></div>
        : <SubjectDisplay 
            gradeLevel={currentSelection}
            order={order}/>
  */}
    </div>
    </div>
  )
}


export default GradeLevelsScreen