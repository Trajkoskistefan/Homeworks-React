import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  const currency = country.currencies ? Object.values(country.currencies)[0]?.name : "N/A";
  const language = country.languages ? Object.values(country.languages)[0] : "N/A";

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={country.name.common} style={{ width: "300px" }} />
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Currency:</strong> {currency}</p>
      <p><strong>Continent:</strong> {country.continents?.[0]}</p>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Time Zone:</strong> {country.timezones?.[0]}</p>
      <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
        View on Google Maps
      </a>
    </div>
  );
}

export default CountryDetail;