import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
   const {countryProps} = props;
    
    return (
        <div>
            <h4>Countries Details :  {countryProps.name.common} </h4>
            <hr />
            <CountryData
            {...props}>

            </CountryData>
        </div>
    );
};

export default CountryDetails;