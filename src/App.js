import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import axios from 'axios';

import countriesJson from './countries.json';

function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true);

  const apiURL = "https://ih-countries-api.herokuapp.com/countries"

  useEffect(()=>{
    axios.get(apiURL)
        .then(response => {
          setCountries(response.data);
          setFetching(false);
        })
  }, [])

  return (
    <div className="App">
      
      <Navbar  />

      {fetching && <p>Loading ...</p>}
      
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
