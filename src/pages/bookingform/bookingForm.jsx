import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './bookingform.css'
function BookingForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

//   const location = useLocation();
  const params = useParams();
//   console.log(params)
//   const movieName = location.state?.movieName;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
        setErrorMessage('Please enter your name, email and phone.');
        return;
    }
    const bookingData = {
      movieName: params.name,
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
      <p className='booking-movie-name'>Movie: <span>{params.name}</span></p>
      <form className='form-group' onSubmit={handleSubmit}>
        <label>
          <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <input type="number" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;