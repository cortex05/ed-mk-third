import './styles/App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/NavbarComponent'

import Home from './screens/HomeScreen'
import About from './screens/AboutScreen'
import Stats from './screens/StatsScreen'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutus' element={<About />} />
        <Route exact path='/mystats' element={<Stats />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
