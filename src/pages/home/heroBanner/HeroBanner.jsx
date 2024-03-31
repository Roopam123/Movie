import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyloadimg/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [backgroundImg, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate("");

  // get Data from the react-redux
  const stateData = useSelector((state) => state?.home?.url)

  // Api call
  const { data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {
    backgroundHandeler()
  }, [data])

  // Method for the set background img
  const backgroundHandeler = () => {
    let bg = data?.results?.[Math.floor(Math.random() * data?.results.length)]?.backdrop_path
    setBackground(stateData?.backdrop_sizes + bg)
  }

  // method for the search handeler
  const searchHandeler = (event) => {
    event.preventDefault()
    if (event.key === "Enter" && query.length > 0) {
      console.log("Hello Roopam");
      navigate(`/search/:${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      {!loading &&
        <div className="brackdrop-img">
          <Img src={backgroundImg} />
        </div>}
      <ContentWrapper>
        <div className="hearoBannerContent">
          <span className='title'>Welcome</span>
          <span className='subTitle'>
            millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder='search for a movies and tv shows...'
              onChange={(e) => {
                setQuery(e.target.value)
              }}
              onKeyUp={searchHandeler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner;
