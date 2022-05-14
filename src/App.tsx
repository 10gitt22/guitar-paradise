import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import Auth from 'pages/Auth'
import Store from 'pages/Store'
import Builder from 'pages/Builder'
import Workshop from 'pages/Workshop'

import ProfileMenu from 'components/layouts/ProfileMenu'

const App: React.FC<{}> = () => {
  return (
    <div className='App'>
      <main>
        <ProfileMenu />
        <Routes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/builder' element={<Builder/>}/>
          <Route path='/workshop' element={<Workshop/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App