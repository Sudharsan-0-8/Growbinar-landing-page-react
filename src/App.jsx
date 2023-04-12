import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="">
      <Header />
      <Home />
    </div>
  )
}

export default App;