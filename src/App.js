import React, {useEffect} from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfigartion, getGenres } from "../src/store/homeSlice.js";
import Home from "./pages/home/Home.jsx";

function App() {

  useEffect(() => {
    apiTesting();
  },[]);

  // useDispech used for the add data in a store
  const dispatch = useDispatch();
  // useSeletor is used for the get data from the store
  const url = useSelector((state) => state?.home?.url);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        // add data in a store
        dispatch(getApiConfigartion(res));
        dispatch(getGenres(res));
      })
      .catch((error) => {
        console.log("error on the api testing", error);
      });
  };
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
