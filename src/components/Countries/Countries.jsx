import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>World Tour : {countries.length} </h2>
      <div className="countries_container">
        {countries.map((country) => (
          <SingleCountry
            countryProps={country}
            key={country.cca2}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
