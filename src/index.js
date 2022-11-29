import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Porfolio from './pages/Porfolio/Porfolio';
import Contact from './pages/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path='resume' element={<Resume />}></Route>
        <Route path='porfolio' element={<Porfolio />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='*' element={<Navigate to={'/'} />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


