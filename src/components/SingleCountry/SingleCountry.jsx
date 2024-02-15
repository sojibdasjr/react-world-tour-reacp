import './SingleCountry.css'
const SingleCountry = ({ countryProps }) => {
  const { name, area, capital, flags, population, region } = countryProps;

  return (
    <div className="SingleCountry_Box">
      <h3>Country Name : {name.common} </h3>
      <h4>Population : {population}</h4>
      <h5>Capital : {capital}</h5>
      <h5>
        Region : {region} & Area : {area}
      </h5>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default SingleCountry;
