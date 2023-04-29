import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { WatchList } from './components/WatchList'
import { Add } from './components/Add'
import { GlobalProvider } from './Context/GlobalState'
import Watched from './components/Watched'


function App() {
  

  return (
    <>
    <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<WatchList/>}/>
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </Router>
    </GlobalProvider>
    
    </>
    
    
    
  )
}

export default App
