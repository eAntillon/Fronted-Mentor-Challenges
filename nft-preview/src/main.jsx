import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NftComponent from './NftComponent'
import './main.css'
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NftComponent/>} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
)
