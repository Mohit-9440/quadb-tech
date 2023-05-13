import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  './showdetails.css';

function ShowsDetails() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  function formatDate(premiered) {
    const dateObj = new Date(premiered);
    const options = { month: 'long', year: 'numeric' };
    return dateObj.toLocaleString('en-US', options);
  }

  return (
    <div className='container'>
      <div className='heading'>Shows</div>
      <div className='list-ul'>
        {shows.map((show) => (
          <div className='list-li' key={show.show.id}>
            <h2 className='show-name'>{show.show.name}</h2>
            <img
              className='show-image' 
              src={show.show.image?.original} 
              alt={show.show.name} 
            />
            <p className='show-data'>Genre: <span>{show.show.genres.join(', ')}</span> </p>
            <p className='show-data'>
              Premiered:{' '}
              <span>{formatDate(show.show.premiered)}</span>
            </p>
            <p className='show-data'>IMDb Rating : <span>{show.show.rating.average? show.show.rating.average : 'N/A'}</span></p>
            <p className='show-data'>Language : <span>{show.show.language}</span></p>
            <Link className='show-info' to={`/show/${show.show.id}`}>More Info</Link>          
        </div>
        ))}
      </div>
    </div>
  );
}
export default ShowsDetails;