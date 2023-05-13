import React from 'react';
import './App.css';

import ShowsDetails from './pages/showdetails/ShowDetails';
import ShowSummary from './pages/showsummary/ShowSummary';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingForm from './pages/bookingform/bookingForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowsDetails/>}></Route>
        <Route path='/show/:id' element={<ShowSummary/>}></Route>
        <Route path='/booking-form' element={<BookingForm />}></Route>
      </Routes>
    </BrowserRouter>   
  );
}