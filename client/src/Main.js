import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const Main = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>kailash</h1>} />
          <Route path="blogs" element={<>blogs</>} />
          <Route path="contact" element={<>how r u dude</>} />
          <Route path="*" element={<>Error</>} />
        </Route>
      </Routes>

  )
}

export default Main