import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from './Order';
import Feedback from './Feedback';

function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/feedback' element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Page