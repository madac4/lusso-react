import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/scss/style.scss';

import ScrollToTop from './hooks/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Modal from './components/Modal';

function App() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="catalog" element={<Catalog />} />
                {/* <Route path="catalog/:category" element={<Catalog />} /> */}
                {/* <Route path="/product/:id" element={<Modal />} /> */}
            </Routes>
        </ScrollToTop>
    );
}

export default App;
