import React, { useState } from "react";
import axios from "axios";
import "./Imagecard.css";

const Imagecard = () => {
  const [photo, setPhoto] = useState("");
  const [access] = useState("WYWuHaI7mHUyIxu3OIahrhVsu0LK2ZYqSRdZsUMwOB0");
  const [result, setResult] = useState([]);

  const inputChange = (e) => {
    setPhoto(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    const url =
      "https://api.unsplash.com/search/photos?query=" +
      photo +
      "&client_id=" +
      access;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  return (
    <div className="box">
      <form name="search">
        <input type="text" name="search" onChange={inputChange} />
        <button type="submit" onClick={submitChange}>
          Search
        </button>
        <div className="image_container">
          {result.map((item, index) => (
            <img
              key={index}
              src={item.urls.regular}
              alt="This is is loading..."
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Imagecard;
