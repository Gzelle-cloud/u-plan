import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Today from './Today';
import Welcome from './Welcome';
import Ideas from './Ideas';
import LanguageSwitcher from './LanguageSwitcher';
import Navbar from './Navbar';
 
function App() {

  return (
    <>
      <LanguageSwitcher />
      <Router>      
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/tasks" element={<Today />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App;
