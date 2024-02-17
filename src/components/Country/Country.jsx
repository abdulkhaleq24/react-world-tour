import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited)
    }
    const passWithParams = ()=>{
        handleVisitedCountry(country);
    }
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited?'purple':'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {visited && 'I have visited the country.'}
        </div>
    );
};

export default Country;