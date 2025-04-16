import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.name.common}`}
      style={{
        display: "block",
        border: "1px solid #ccc",
        padding: "1rem",
        width: "200px",
        textDecoration: "none",
        color: "black"
      }}
    >
      <img src={country.flags.svg} alt={country.name.common} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
      <h3>{country.name.common}</h3>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </Link>
  );
}

export default CountryCard;