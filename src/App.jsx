import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import LastPage from './Components/LastPage';
import Second from './Components/Second';
import MentorCards from './Components/MentorCards';
import SLastPage from './Components/SLastPage';
import TopCompanies from './Components/TopCompanies';
import Webinar from './Components/Webinar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Internships from './Components/Internships.jsx';


function App() {
  return (
   

      <div className="">
        <Header />
        <Home className="mb-96 md:mb-40" />
        <TopCompanies/>
        <Second />
        <MentorCards className="mb-20" />
        <SLastPage />
        <LastPage className='mt-40' />
        <Footer className="" />

          <Routes>
              <Route path="/intern" element={<Internships />} />
          </Routes>
      </div>
  )
}

export default App;