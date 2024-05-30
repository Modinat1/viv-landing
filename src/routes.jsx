import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import LandingPage from './pages/LandingPage';

const AppRoute = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/user' element={<Layout/>}>

        </Route>
    </Routes>
    </Router>
  )
}

export default AppRoute