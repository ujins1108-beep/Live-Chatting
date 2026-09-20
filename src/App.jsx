import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import Community from './pages/community/community.jsx'

export default function App() {
  

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </>
  )
}
