import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from './Order';
import Feedback from './Feedback';
import Table from './Table';
import Home from './Home';

function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/feedback' element={<Feedback />} />
        <Route exact path='/table' element={<Table />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Page