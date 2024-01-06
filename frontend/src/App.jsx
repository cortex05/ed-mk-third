import './styles/App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/NavbarComponent'

import Home from './screens/HomeScreen'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
