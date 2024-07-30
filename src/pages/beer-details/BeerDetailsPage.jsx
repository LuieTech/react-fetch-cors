import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./BeerDetails.css"

function BeerDetailsPage() {

  const {beerId} = useParams()
  const [beerDetails, setBeerDetails] = useState({})

  const getBeer = async (beerId) => {
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/"+beerId)
    const data = await response.json()
    console.log(data)
    setBeerDetails(data)
  }

  useEffect(() => {
      getBeer(beerId)
  }, [beerId])
  

  return (
    <div className='beer-box'>
      {beerDetails && (
        <div key={beerDetails._id} className='box'>
          <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: "300px" }}/>
          <div className='box-text'>
            <div className='div-1'>
              <h2>{beerDetails.name}</h2>
              <span className='text-smal'>{beerDetails.attenuation_level}</span>
            </div>
            <div className='div-2'>
              <p>{beerDetails.tagline}</p>
              <p>{beerDetails.first_brewed}</p>
            </div>
            
            <p>{beerDetails.description}</p>
            <p>Contributed by: {beerDetails.contributed_by?.split("<")[0].trim()}</p>
          </div>
          
      </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;

