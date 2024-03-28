import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log("error on the api testing", error);
      });
  };
  return (
    <div>
      <h1>Hello</h1>
      {console.log(data.results)}
    </div>
  );
}

export default App;
