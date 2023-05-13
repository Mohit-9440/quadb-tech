import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './bookingform.css'
function BookingForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const movieName = location.state?.movieName;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
        setErrorMessage('Please enter your name, email and phone.');
        return;
    }
    const bookingData = {
      movieName,
      name,
      email,
      phone,
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    alert('Booking data saved to local storage!');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className='booking-form-container'>
      <h1>Booking Form</h1>
      <p>Movie: {props.movieName}</p>
      <form className='form-group' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;