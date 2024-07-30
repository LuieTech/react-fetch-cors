import { useEffect, useState } from "react";
import "./all-beers.css"
import { NavLink } from "react-router-dom";
import FilterBeers from "../../components/FindBeers";

function AllBeersPage() {
  const [data, setData] = useState([])
  const [beersList, setBeersList] = useState([])

  const getAllBeers = async () => {
    try{
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
      const data = await response.json();
      setData(data)
      setBeersList(data)

    } catch (e){
      console.log("This is the error: ", e)
    }
  }

  useEffect(() => {
    getAllBeers()
  }, [])

  const beers = beersList.map(beer => (
    <div key={beer._id} className="allBeers-box">
      <article className="article-box">
        <div>
          <NavLink to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt="" />
          </NavLink>
        </div>
        <div className="article-text">
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <p>{beer.contributed_by?.split("<")[0].trim()}</p>

        </div>
      </article>
    </div>
  ))

  function handleSearch(letter){
    const beerSearching = [...beersList].filter(beer => beer.name.toLowerCase().includes(letter.toLowerCase()))
    if(!letter) setBeersList(data)
    else{
      setBeersList(beerSearching)
    } 
  }

  return(
    <>
      <div className="boxes">
        <div className="find-beer">
         <FilterBeers  onSearch={handleSearch}/>  
        </div>
          {beers}
      </div>
    </>
    
    
  )
}

export default AllBeersPage;
