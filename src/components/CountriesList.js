import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(data);
    })();
  }, []);

  if (!countries.length) {
    return <p>Loading . . .</p>;
  }

  return (
    <>
      {countries.map((country, i) => {
        return (
          <Link key={i} to={`/${country.cca3}`}>
            <div style={{ flex: 1, flexDirection: 'column' }}>
              <img src={country.flags.svg} alt="" style={{ width: '64px' }} />
              {country.name.common}
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default CountryDetails;
