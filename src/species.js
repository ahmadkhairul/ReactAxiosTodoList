import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "axios";

const App = () => {
  const [species, setSpecies] = useState([]);
  const [value, setValue] = useState(" ");

  async function getSpecies() {
    const res = await useAxios.get("http://127.0.0.1:8000/api/v1/species");
    const { data } = res.data;
    setSpecies(data);
  }

  async function saveSpecies(name) {
    try {
      const save = { name };
      const res = await useAxios.post(
        "http://127.0.0.1:8000/api/v1/species",
        save
      );
      const message = res.data.message;
    } catch (error) {
      const { data, status } = error.response;
      if (status > 399) {
        console.log(data.message);
      }
    }
  }

  async function deleteSpecies(id) {
    const res = await useAxios.delete(
      "http://127.0.0.1:8000/api/v1/species/" + id
    );
    const message = res.data.message;
  }

  useEffect(() => {
    getSpecies();
  }, [species.id]);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/Species">Species</Link>
      <h1>Species CRUD</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveSpecies(value);
          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Add New Species"
          onChange={event => {
            setValue(event.target.value);
          }}
          value={value}
        />
      </form>
      <ul>
        {species.map((spec, index) => (
          <li key={index.toString()}>
            {spec.name}
            <button
              onClick={() => {
                deleteSpecies(spec.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
