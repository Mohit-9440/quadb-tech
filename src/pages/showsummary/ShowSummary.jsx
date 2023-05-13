import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import './showsummary.css'
function ShowSummary() {
    const [show, setShow] = useState([]);
    const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id]);

  return (
    <div className='summary-card-wrapper'> 
        <div className='summary-card'>
            {show.name && (
                <>
                    <h1>{show.name}</h1>
                    <img src={show.image?.original} alt={show.name} />
                    <p className='show-summary' dangerouslySetInnerHTML={{__html: show.summary}}></p>
                    <Link to={{
                        pathname: `/booking-form/${show.name}`,
                        state: { movieName: show.name }
                        }}>
                        <button className='book-ticket'>Book a Ticket</button>
                    </Link>   
                </>
            )}       
        </div>
    </div>
  );
}
export default ShowSummary;

