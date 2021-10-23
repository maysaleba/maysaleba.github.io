import React, { useEffect, useMemo, useState } from "react";
import usePagination from "./usePagination.js";
import reviewssw from "./csvjson.json";
import reviewsps from "./csvjsonus.json";
import CardGroup from "./CardGroup2";
import "./App.css";
import { HashRouter as Router, Route, useLocation, Switch } from "react-router-dom";
import Content from "./Content";
import NaviBar from "./NaviBar";
import styled from 'styled-components';
import Search from './Search';



export default function Main() {
  function sortJson(element, prop, propType, asc) {
    switch (propType) {
      case "int":
        element = element.sort(function (a, b) {
          if (asc) {
            return parseInt(a[prop]) > parseInt(b[prop])
              ? 1
              : parseInt(a[prop]) < parseInt(b[prop])
              ? -1
              : 0;
          } else {
            return parseInt(b[prop]) > parseInt(a[prop])
              ? 1
              : parseInt(b[prop]) < parseInt(a[prop])
              ? -1
              : 0;
          }
        });
        break;
      default:
        element = element.sort(function (a, b) {
          if (asc) {
            return a[prop].toLowerCase() > b[prop].toLowerCase()
              ? 1
              : a[prop].toLowerCase() < b[prop].toLowerCase()
              ? -1
              : 0;
          } else {
            return b[prop].toLowerCase() > a[prop].toLowerCase()
              ? 1
              : b[prop].toLowerCase() < a[prop].toLowerCase()
              ? -1
              : 0;
          }
        });
    }
  }


  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');


  function ScrollToTop() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: 'instant'});
  }, [pathname]);


    return null;
  }

  const [platformField, setPlatformField] = useState("");
  const [filterField, setFilterField] = useState("");
  const [genreDropDown, setGenreDropDown] = useState("All Genres");
  const [platformDropDown, setPlatformDropDown] = useState("All Platforms")
  const [latestField, setLatestField] = useState([]);
  const [latestDropDown, setLatestDropDown] = useState("New Discounts");

  useEffect(() => {
    const reviews = reviewssw.concat(reviewsps);
    sortJson(reviews, "SaleStarted", "string", false);
    setLatestField(reviews);
  }, []);



  const onPlatformDrop = (dropDownValue) => setPlatformDropDown(dropDownValue);
  const onLatestDrop = (dropDownValue) => setLatestDropDown(dropDownValue);
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);

  const clearFilter = (event) => {
    setFilterField("");
    setPlatformField("");
  };

  const clearGenre = (event) => {
    setFilterField("");
  }

  const onLatestChange = (filterLatest) => {
    if (filterLatest === "Top Rated") {
      sortJson(latestField, "SCORE", "string", false);
    }
    if (filterLatest === "New Discounts") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SaleStarted", "string", false);
    }
    if (filterLatest === "Latest Release") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "ReleaseDate", "string", false);
    }
    if (filterLatest === "Price ↓") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SalePrice", "int", false);
    }
    if (filterLatest === "Price ↑") {
      sortJson(latestField, "SCORE", "string", false);
      sortJson(latestField, "SalePrice", "int", true);
    } else {
    }
  };

  const onPlatformChange = (filterPlatform) => {
    setPlatformField(filterPlatform)
  }

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre);
  };

  const [searchQuery, setSearchQuery] = useState(query || "");

  const clearSearchChange = (event) => {
    setSearchQuery("");
  };

  let filteredReviews = useMemo(() =>
    latestField.filter((review) => {
      return (
        review.Title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        review.genre.toLowerCase().includes(filterField.toLowerCase()) &&
        review.platform.toLowerCase().includes(platformField.toLowerCase())
        );
    })
  );



  let { pageData, page, maxPage, jumpPage } = usePagination(
    filteredReviews,
    24
  );

  useEffect(() => {
    if (searchQuery || filterField || latestDropDown || platformField) jumpPage(1);
  }, [searchQuery, filterField, latestDropDown, platformField, jumpPage]);





const BackgroundContainer = styled.div`
    -blur-radius: 20px;
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #6e7290;
      z-index: -1;


      &:after {
    --color-background--rgb: 110,114,144;
    content: "";
    position: absolute;
    height: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    background: linear-gradient(
0deg,rgba(var(--color-background--rgb),1) 0,rgba(var(--color-background--rgb),.987) 8.1%,rgba(var(--color-background--rgb),.951) 15.5%,rgba(var(--color-background--rgb),.896) 22.5%,rgba(var(--color-background--rgb),.825) 29%,rgba(var(--color-background--rgb),.741) 35.3%,rgba(var(--color-background--rgb),.648) 41.2%,rgba(var(--color-background--rgb),.55) 47.1%,rgba(var(--color-background--rgb),.45) 52.9%,rgba(var(--color-background--rgb),.352) 58.8%,rgba(var(--color-background--rgb),.259) 64.7%,rgba(var(--color-background--rgb),.175) 71%,rgba(var(--color-background--rgb),.104) 77.5%,rgba(var(--color-background--rgb),.049) 84.5%,rgba(var(--color-background--rgb),.013) 91.9%,rgba(var(--color-background--rgb),0));
}`


const Background = styled.div`
      --blur-radius: 20px;
       background-image: 
       url(${reviewssw[0].Image});
position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: calc(var(--blur-radius)*-1) calc(var(--blur-radius)*-1);
    background-size: cover;
    background-position: 50%;
    mix-blend-mode: overlay;
    filter: blur(var(--blur-radius));
`


  return (
    <Router>
    <BackgroundContainer>
    <Background  />
    </BackgroundContainer>
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <NaviBar />
            <Search 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              clearGenre = {clearGenre} 
              onDropDownChange={onDropDownChange}/>
            <CardGroup
              clearGenre = {clearGenre}
              onPlatformDrop = {onPlatformDrop}
              onPlatformChange = {onPlatformChange}
              platformDropDown={platformDropDown}
              onLatestDrop={onLatestDrop}
              onLatestChange={onLatestChange}
              latestDropDown={latestDropDown}
              clearFilter={clearFilter}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
              onFilterChange={onFilterChange}
              clearSearchChange={clearSearchChange}
              searchQuery={searchQuery}
              page={page}
              setSearchQuery={setSearchQuery}
              jumpPage={jumpPage}
              filteredReviews={filteredReviews}
              pageData={pageData}
              maxPage={maxPage}
            />
          </div>
        )}
      />
      <Route path="/games/:games" component={Content} />
      <ScrollToTop />
    </Router>
  );
}
