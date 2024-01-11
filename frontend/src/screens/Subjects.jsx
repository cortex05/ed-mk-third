import React, { useState, useContext } from 'react'
// import SubjectSwitchComponent from '../components/subjects/SubjectSwitchComponent'
// import { setActiveSubject, getCourseSummaries } from '../features/course/courseSlice'
import { State, StateDispatch } from '../state/state'
import { setTest } from '../state/actions'

import '../styles/screens/subjects.scss'

export default function Subjects() {
  const state = useContext(State)
  const dispatch = useContext(StateDispatch)
  // const { activeSubject } = useSelector(state => state.course)
  // const dispatch = useDispatch()
  
  const [showSubject, setShowSubject] = useState(false)
  // const [subjectSelection, setLocalSubject] = useState(activeSubject)

  // useEffect(() => {
  //   if(activeSubject){
  //     setShowSubject(true)
  //   }
  // }, [])

  const handleSelect = (selection) => {
    // setShowSubject(true)
    // setLocalSubject(selection)
    dispatch(setTest("ACTIVATE!"))
    // dispatch(setActiveSubject(selection))
    // dispatch(getCourseSummaries(selection.toLowerCase()))
  }
  return (
    <div className='subjects-screen'>
    <h1>The state for test is: {state.test}</h1>
    {
      !showSubject &&
      <div className='inner subjects-field'>
        <h1 className='sans'>Select a Subject</h1>
        <h4 className='subject-button' onClick={() => handleSelect("Math")} >Math</h4>
        <h4 className='subject-button' onClick={() => handleSelect("English")}>English</h4>
        <h4 className='subject-button' onClick={() => handleSelect("Science")}>Science</h4>
        <h4 className='subject-button' onClick={() => handleSelect("Economics")}>Economics</h4>
      </div>
      
    }
      
    </div>
  )
}

// : <div className='inner'>
//           <SubjectSwitchComponent subject={subjectSelection}/> 
//           <h5 onClick={() => setShowSubject(false)} className="navigation-button">Pick a different subject</h5>
//         </div>