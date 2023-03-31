import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/AboutUs"
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Sign from "./components/SignUp"
import Contact from "./components/Contact"
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";


function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Sign/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
