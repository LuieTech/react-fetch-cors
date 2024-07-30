import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import AllBeersPage from "./pages/all-beers/AllBeersPage";
import BeerDetailsPage from "./pages/beer-details/BeerDetailsPage"
import RandomBeersPage from "./pages/random-beer/RandomBeerPage";
import AddBeerPage from "./pages/add -beer/AddBeerPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage />}/>
        <Route path="/random-beer" element={<RandomBeersPage />}/>
        <Route path="/new-beer"  element={<AddBeerPage />}/>
        <Route path="beers/:beerId" element={<BeerDetailsPage />} />

      </Routes>
    </div>
  );
}

export default App;
