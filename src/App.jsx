import React, { useState } from 'react';
import { useReplit } from '@replit/extensions/react';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import LastPage from './Components/LastPage';
import Second from "./Components/SecondPage";
function App() {
  return (
    <div>
      <Second />
    </div>
  )
}

export default App;