import { useState } from "react";

const CountryData = (props) => {
    console.log(props);
    const { countryProps} = props;
    const [handleShowSecret, setHandleShowSecret] = useState(false);

    const handleShowSectretButton =()=>{
        setHandleShowSecret(!handleShowSecret)
    }
    
    return (
        <div>
            <button style={handleShowSecret ? {background:'green'}: {background: ''}}  onClick={handleShowSectretButton}>{handleShowSecret ? 'Hide' : 'Show Country Secret'}</button>
            {handleShowSecret && ` ${countryProps.name.common}`}
        </div>
    );
};

export default CountryData;