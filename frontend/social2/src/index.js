import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router";
import './index.css';
import App from './App';
import Post from "./pages/post.js";
import Login from "./pages/login/login.js";

export default function app() {

  return (
    <div>
      <Routes>
      <Route   path="/" element={<App></App>}/>
      <Route  path="post"  element={<Post/>} />
      <Route  path="login"  element={<Login/>} />

      </Routes>
      </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
     {app()}
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
