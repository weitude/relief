import logo from './logo.svg';
import './App.css';
import SignIn from "./containers/SignIn";
import UserPage from './containers/UserPage';
import Post from './containers/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { React, useState, useEffect } from 'react'

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<UserPage/>} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>

        </Router>
  );
}

export default App;
