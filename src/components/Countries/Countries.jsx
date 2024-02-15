import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = country =>{
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>World Tour : {countries.length} </h2>
      <div>
        <h3>Visited Country : {visitedCountry.length}  </h3>
        <ul>
          {visitedCountry.map(country =><li key={country.cca3}>{country.name.common}</li>)}
        </ul>
      </div>
      <div className="countries_container">
        {countries.map((country) => (
          <SingleCountry handleVisitedCountry ={ handleVisitedCountry}
            countryProps={country}
            key={country.cca2}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
