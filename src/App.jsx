import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Today from './components/tasks/Today';
import Welcome from './components/welcome/Welcome';
import Ideas from './components/ideas/Ideas';
import LanguageSwitcher from './components/language/LanguageSwitcher';
import Navbar from './Navbar';
import Workshop from './components/workshop/Workshop';
 
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
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App;
