import './App.css';
import Home from './containers/Home';
import {HashRouter, Route, Routes} from 'react-router-dom';
import SignUp from "./containers/SignUp";
import Post from "./containers/Post";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/post/:id" element={<Post/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
