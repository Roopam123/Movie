import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfigartion } from "../src/store/homeSlice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/Home.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Details from "./pages/details/Details.jsx";
import Explore from "./pages/explore/Explore.jsx";
import SearchResuls from "./pages/searchResults/SearchResuls.jsx";
// Components
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const dispatch = useDispatch();
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        if (res.status === 200) {
          const configData = {
            backdrop_sizes: res?.data?.images?.secure_base_url + "original",
            poster_sizes: res?.data?.images?.secure_base_url + "original",
            profile_sizes: res?.data?.images?.secure_base_url + "original",
          };
          dispatch(getApiConfigartion(configData));
        }
      })
      .catch((error) => {
        console.log("error on the api testing", error);
      });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResuls />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
