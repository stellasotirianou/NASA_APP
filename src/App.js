import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=mY5U7bQe6xACrnedLZj9il1o918YR0xNuk6S1F45"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <img src={data.hdurl}></img>
      <h2>{data.explanation}</h2>
    </div>
  );
}

export default App;
