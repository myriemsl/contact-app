import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Dashboard from './Dashboard';
import Footer from '../Components/Footer';
import EditContact from '../Components/EditContact';


const Layout = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/:id" element={<EditContact/>}/> 
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout;