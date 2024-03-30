import React, {useEffect} from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfigartion, getGenres } from "../src/store/homeSlice.js";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// components
import Home from "./pages/home/Home.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Details from "./pages/details/Details.jsx";
import Explore from "./pages/explore/Explore.jsx";
import SearchResuls from "./pages/searchResults/SearchResuls.jsx";

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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:id" element={<SearchResuls/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
