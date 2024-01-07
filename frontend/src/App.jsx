import './styles/App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/NavbarComponent'

import Home from './screens/HomeScreen'
import About from './screens/AboutScreen'
import Stats from './screens/StatsScreen'
import GradeLevels from './screens/GradeLevels'
import Subjects from './screens/Subjects'

function App() {

  return (
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
  )
}

export default App
