import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList'

import countriesJson from './countries.json'

function App() {

  const [countries, setCountries] = useState(countriesJson)

  return (
    <div className="App">
      
      <Navbar  />
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
