import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Footer className="mt-96" />
    </div>
  )
}

export default App;