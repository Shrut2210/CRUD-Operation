import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fac from './Fac';
import Details from './Details';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Insert from './Insert';
// import Update from './Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fac />}></Route>
        <Route path="/:id" element={<Details />}></Route>
        <Route path="/insert/:id" element={<Insert />}></Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
