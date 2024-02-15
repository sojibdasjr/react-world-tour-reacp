import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  // handle Visited Country Event
  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  // handle Visited Flag envent
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag]
    setVisitedFlag(newVisitedFlag)
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>World Tour : {countries.length} </h2>
      <div>
        <h3>Visited Country : {visitedCountry.length} </h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* Display visited Country */}
      <div className="flag_container">
        {
          visitedFlag.map((flag, idx)=> <img key={idx} src={flag} alt=""></img>)
        }
      </div>

      {/* Display Flag */}

      <div className="countries_container">
        {countries.map((country) => (
          <SingleCountry
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag = {handleVisitedFlag}
            countryProps={country}
            key={country.cca2}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
