import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import LastPage from './Components/LastPage';
import SLastPage from './Components/SLastPage';
function App() {
  return (
    <div>
      <SLastPage/>
    </div>
  )
}

export default App;