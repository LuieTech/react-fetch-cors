import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
})

export function getRandomBeer(){
  return service.get("/random").then(res => res.data) 
}

export function addBeer(beer) {

  return service.post('/new', beer).then((response) => response.data)

}