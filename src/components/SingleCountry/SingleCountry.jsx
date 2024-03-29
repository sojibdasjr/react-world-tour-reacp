import { useState } from "react";
import "./SingleCountry.css";
import CountryDetails from "../CountryDetailes/CountryDetails";
const SingleCountry = ({
  countryProps,
  handleVisitedCountry,
  handleVisitedFlag,
}) => {
  const { name, area, capital, flags, population, region } = countryProps;
  const [visit, setVisit] = useState(false);
  const [color, setColor] = useState(true);
  const [isFlag, setIsFlag] = useState(false);
  const [boxCss, setBoxCss] = useState(false);
  const handleVisit = () => {
    setVisit(!visit);
    setColor(!color);
    setBoxCss(!boxCss);
    handleVisitedCountry(countryProps);
    handleVisitedFlag(countryProps.flags.png);
  };
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
  };
//
  const handleFlag = () => {
    setIsFlag(!isFlag);
  };

  return (
    <div className={boxCss ? " SingleCountry_Condition " : "SingleCountry_Box"}>
      <h3>Country Name : {name.common} </h3>
      <h4>Population : {population}</h4>
      <h5>Capital : {capital}</h5>
      <h5>
        Region : {region} & Area : {area}
      </h5>

      <button onClick={handleFlag} style={{ marginRight: "25px" }}>
        {isFlag ? "Hide Flag" : "Show Flag"}
      </button>
      {isFlag && <img style={{ margin: "20px" }} src={flags.png} alt="" />}
      <button
        style={color ? { background: "" } : buttonStyle}
        onClick={handleVisit}
      >
        {" "}
        {visit ? "Visited" : "Visit"}
      </button>
      <p>{visit ? `Visite this ${name.common}` : "I want to Visit"}</p>
      <hr />
      <CountryDetails
        countryProps={countryProps}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryDetails>
    </div>
  );
};

export default SingleCountry;
