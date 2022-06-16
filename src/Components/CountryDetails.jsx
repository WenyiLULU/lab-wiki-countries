import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const {alpha3Code} = useParams()   
    const countryToShow = countries.filter((country)=> country.alpha3Code === alpha3Code)[0]
    return ( 
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
     );
}
 
export default CountryDetails;