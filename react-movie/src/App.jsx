import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { WatchList } from './components/WatchList'
import { Watched } from './components/Watched'
import { Add } from './components/Add'


function App() {
  

  return (
    <>
   
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>

      </Routes>
    </Router>
    </>
    
    
    
  )
}

export default App
