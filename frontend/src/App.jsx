import './styles/App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/NavbarComponent'

import Home from './screens/HomeScreen'
import About from './screens/AboutScreen'
import Stats from './screens/StatsScreen'
import GradeLevels from './screens/GradeLevels'
import Subjects from './screens/Subjects'
import { useReducer } from 'react';
import { initialState, reducer } from './state/reducer'
import { State, StateDispatch } from './state/state'
// import { store } from './state/store'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <State.Provider value={state}>
    <StateDispatch.Provider value={dispatch}>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutus' element={<About />} />
        <Route exact path='/mystats' element={<Stats />} />
        <Route exact path='/gradelevels' element={<GradeLevels />} />
        <Route exact path='/subjects' element={<Subjects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </StateDispatch.Provider>
    </State.Provider>
  )
}

export default App
