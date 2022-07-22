import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/'  element={<LandingPage/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
