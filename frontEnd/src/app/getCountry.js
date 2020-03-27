import React, { useState } from "react";
import useAxios from "axios";

const App = () => {
  const [country, setCountry] = useState([]);

  async function getCountry() {
    const res = await useAxios.get("https://restcountries.eu/rest/v2/all");
    const data = res.data;
    console.log(data);
    setCountry(data);
  }

  return (
    <div className="App">
      <button onClick={() => getCountry()}>GET COUNTRY</button>
      <button onClick={() => console.log(country)}>GET COUNTRY</button>
      <div>
        <ul>
          {!country === null || !country === []
            ? country.map((item, index) => <li key={index}>{item.name}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default App;
