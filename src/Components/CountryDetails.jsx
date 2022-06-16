import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";


const CountryDetails = ({countries, }) => {
    const {alpha3Code} = useParams()   
    // for iteration 1.4
    //const countryToShow = countries.filter((country)=> country.alpha3Code === alpha3Code)[0]

    //for iteration 4
    const [countryToShow, setCountryToShow] = useState("")
    const [chooseCountry, setChooseCountry] = useState(false)
    const apiURL = 'https://ih-countries-api.herokuapp.com/countries'
    useEffect(()=>{
        axios.get(`${apiURL}/${alpha3Code}`)
        .then(response => {
            setCountryToShow(response.data);
            setChooseCountry(true)
        })
    }, [alpha3Code])

     
    return ( 
        chooseCountry ? 
        <div className="col-7">
            <h1>{countryToShow.name.common}</h1>       
            <table className="table">
              <thead></thead>
              <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{countryToShow.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countryToShow.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {countries
                                .filter(country=> countryToShow.borders.includes(country.alpha3Code))
                                .map(border => 
                                <li key={border.alpha3Code}>
                                    <Link to={`/${border.alpha3Code}`}>{border.name.common}</Link>
                                </li>)
                                }  
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        : <div className="col-7"></div>
     ) 
}
 
export default CountryDetails;