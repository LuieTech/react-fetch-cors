import { useEffect, useState } from "react";
import { getRandomBeer } from "../../service/beer-service";

function RandomBeersPage() {

  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    getRandomBeer()
      .then(data => setRandomBeer(data))
  }, [])

  const beer = randomBeer && (
      <div key={randomBeer._id} className='box'>
        <img src={randomBeer.image_url} alt={randomBeer.name} style={{ width: "300px" }}/>
        <div className='box-text'>
          <div className='div-1'>
            <h2>{randomBeer.name}</h2>
            <span className='text-smal'>{randomBeer.attenuation_level}</span>
          </div>
          <div className='div-2'>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
          </div>
          
          <p>{randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by?.split("<")[0].trim()}</p>
        </div>
    </div>
    )

  return(
    <div className='beer-box'>
      {beer}
  </div>
  )
}

export default RandomBeersPage;
