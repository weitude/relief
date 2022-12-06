import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./containers/SignUp";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>

      </Router>
  );
}

export default App;
