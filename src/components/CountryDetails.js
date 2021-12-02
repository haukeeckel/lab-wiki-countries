import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function CountryDetails() {
  const [detail, setDetail] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha/${alpha3Code}/`
      );

      let country = {
        alpha3Code: alpha3Code,
        name: data[0].name.common,
        capital: data[0].capital[0],
        area: data[0].area,
        population: data[0].population,
        borders: data[0].borders,
      };

      setDetail(country);
    })();
  }, [alpha3Code]);

  if (!detail) {
    return <p>Loading . . .</p>;
  }

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>Capital: {detail.capital}</p>
      <p>Population: {detail.population}</p>
      <p>Area: {detail.area}</p>
      <p> Borders:</p>
      <ul>
        {detail.borders.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default CountryDetails;
