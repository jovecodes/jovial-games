import React from 'react';
import './App.css';
import './styles/bootstrap.css'
import JovialNavbar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
// import Layout from './components/Layout';
import NoPage from './components/NoPage';
import Engine from './components/Engine';
import Games from './components/Games';

function App() {
    return (
        <div className="App">
            <JovialNavbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Home />} />
                        <Route path="engine" element={<Engine />} />
                        <Route path="games" element={<Games />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
