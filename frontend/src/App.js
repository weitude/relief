import './App.css';
import Home from './containers/Home';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import SignUp from "./containers/SignUp";


function App() {
    return (
        <HashRouter >
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>

        </HashRouter>
    );
}

export default App;
