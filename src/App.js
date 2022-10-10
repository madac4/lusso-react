import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/scss/style.scss';

import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Catalog />} />
        </Routes>
    );
}

export default App;
