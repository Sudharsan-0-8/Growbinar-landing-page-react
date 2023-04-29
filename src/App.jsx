import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import LastPage from './Components/LastPage';
import Second from './Components/Second';
import MentorCards from './Components/MentorCards';

function App() {
  return (
    <div className="">
      <Header />
      <Home className="mb-96 md:mb-40" />
      <Second />
      <MentorCards className="mb-20" />
      {/* <LastPage /> */}
      <Footer className="" />
    </div>
  )
}

export default App;