import React, { useEffect, useMemo, useState } from "react";
import usePagination from "./usePagination.js";
import reviewssw from "./csvjson.json";
import reviewsst from "./all_games.json";

import CardGroup from "./CardGroup";
import "./App.css";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Content from "./Content";
import NaviBar from "./NaviBar";
import styled from "styled-components";
import Search from "./Search";
import GiftCards from "./GiftCards";
import FAQ from "./FAQ";
import MainPage from "./MainPage";
import { Helmet } from "react-helmet";
import axios from "axios";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

var today = new Date();
// var lastd = new Date(today.setDate(today.getDate()+1));
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

let hour = today.getHours();

today = yyyy + "-" + mm + "-" + dd;



export default function Main() {
function sortJson(element, prop, propType, asc) {
  switch (propType) {
    case "int":
      element = element.sort(function (a, b) {
        const aValue = parseInt(a[prop]) || Number.MIN_SAFE_INTEGER;
        const bValue = parseInt(b[prop]) || Number.MIN_SAFE_INTEGER;

        return asc ? aValue - bValue : bValue - aValue;
      });
      break;
    default:
      element = element.sort(function (a, b) {
        const aValue = a[prop].toLowerCase();
        const bValue = b[prop].toLowerCase();

        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
  }

  // Return the sorted element
  return element;
}

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ left: 0, top: 0, behavior: "instant" });
    }, [pathname]);

    return null;
  }

  // var theURL = "https://www.npmjs.com/package/adasddasdas";
  // var theURL = "https://api.exchangerate.host/latest?base=PHP&v=" + today + "T" + hour;
  var theURL = "x";
  var theURLa =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php.json";

  const [datam, setDatam] = React.useState({});
  const [makeswitch, setMakeswitch] = React.useState(null);

  // useEffect(async () => {
  //   const response = await fetch (theURL);
  //   const data = await response.json();
  //   // setDatam(data.rates);
  //   setDatam(data.php);
  // }, []);

  useEffect(() => {
    axios
      .get(theURL)
      .then((response) => {
        setDatam(response);
        setDatam(response.data.rates); // if using exchangerate.host
        // setDatam(response.data.php) // if using currency-api
      })
      .catch((error) => {
        console.log(error);
        axios.get(theURLa).then((response) => {
          setDatam(response);
          setMakeswitch("2");
          setDatam(response.data.php);
          // if using exchangerate.host
          // setDatam(response.data.php) // if using currency-api
        });
      });
  }, [theURL]);

  const [priceRangeField, setPriceRangeField] = useState(99999);
  const [priceRangeLow, setPriceRangeLow] = useState(0);
  const [priceRangeDropDown, setPriceRangeDropDown] =
    useState("All Price Range");
  const [platformField, setPlatformField] = useState("");
  const [filterField, setFilterField] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [genreDropDown, setGenreDropDown] = useState("All Genres");
  const [platformDropDown, setPlatformDropDown] = useState("All Platforms");
  const [latestField, setLatestField] = useState([]);
  const [latestDropDown, setLatestDropDown] = useState("Popular");

  useEffect(() => {
    const sortedswitch =  sortJson(reviewssw, "Popularity", "int", false);
    const sortedsteam = sortJson(reviewsst, "SCORE", "int", false);
    const reviews = sortedswitch.concat(sortedsteam)
    // /.concat(reviewsst);
   
    setLatestField(reviews);
  }, []);

  const onPriceRangeDrop = (dropDownValue) =>
    setPriceRangeDropDown(dropDownValue);
  const onPlatformDrop = (dropDownValue) => setPlatformDropDown(dropDownValue);
  const onLatestDrop = (dropDownValue) => setLatestDropDown(dropDownValue);
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);

  const clearPriceRange = (event) => {
    setPriceRangeField(99999);
  };

  const clearFilter = (event) => {
    clearPriceRange();
    clearSearchChange();
    onDropDownChange("All Genres");
    onPriceRangeDrop("All Price Range");
    onPlatformChange("");
    onPlatformDrop("All Platforms");
    onFilterChange("");
    onLatestChange("Popular");
    onLatestDrop("Popular");
  };

  const clearGenre = (event) => {
    setFilterField("");
  };

  const onPriceRangeChange = (filterPriceRange) => {
    if (filterPriceRange === "All Price Range") {
      setPriceRangeField(99999);
      setPriceRangeLow(0);
    }
    if (filterPriceRange === "< P2500") {
      setPriceRangeField(50);
      setPriceRangeLow(35.1);
    }
    if (filterPriceRange === "< P1750") {
      setPriceRangeField(35);
      setPriceRangeLow(20.1);
    }
    if (filterPriceRange === "< P1000") {
      setPriceRangeField(20);
      setPriceRangeLow(10.1);
    }
    if (filterPriceRange === "< P500") {
      setPriceRangeField(10);
      setPriceRangeLow(5.1);
    }
    if (filterPriceRange === "< P250") {
      setPriceRangeField(5);
      setPriceRangeLow(0);
    }
  };

  const onLatestChange = (filterLatest) => {
    if (filterLatest === "Popular") {
      sortJson(latestField, "Popularity", "int", false);
    }
    if (filterLatest === "Top Rated") {
      sortJson(latestField, "SCORE", "int", false);
    }
    if (filterLatest === "New Discounts") {
      sortJson(latestField, "SCORE", "int", false);
      sortJson(latestField, "SaleStarted", "string", false);
    }
    if (filterLatest === "Latest Release") {
      sortJson(latestField, "SCORE", "int", false);
      sortJson(latestField, "ReleaseDate", "string", false);
    }
    if (filterLatest === "Price ↓") {
      sortJson(latestField, "SCORE", "int", false);
      sortJson(latestField, "SalePrice", "int", false);
    }
    if (filterLatest === "Price ↑") {
      sortJson(latestField, "SCORE", "int", false);
      sortJson(latestField, "SalePrice", "int", true);
    } else {
    }
  };

  const onPlatformChange = (filterPlatform) => {
    setPlatformField(filterPlatform);
  };

    const onRegionChange = (regionFilter) => {
    setRegionFilter(regionFilter);
  };

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre);
  };

  const [searchQuery, setSearchQuery] = useState(query || "");

  const clearSearchChange = (event) => {
    setSearchQuery("");
  };



  let filteredReviews = useMemo(() =>
    latestField.filter((review) => {
const cleanFilterField = filterField.replace(/[^a-zA-Z0-9é, -]/g, "").replace("é", "e").replace(/\s/g, '').toLowerCase();

      const filterGenres = cleanFilterField.split(',').map(genre => genre.trim());

      if (review.platform === "Steam") {

      return (
        review.Title.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase()) &&
        filterGenres.some(filterGenre => review.genre.toLowerCase().includes(filterGenre)) &&
        review.platform.toLowerCase().includes(platformField.toLowerCase()) && 
        (review.SalePrice / 50 < priceRangeField && review.SalePrice / 50 > priceRangeLow)
      );
    } else {
            return (
        review.Title.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase()) &&
        filterGenres.some(filterGenre => review.genre.toLowerCase().includes(filterGenre)) &&
        review.platform.toLowerCase().includes(platformField.toLowerCase()) && 
        (review.SalePrice < priceRangeField && review.SalePrice > priceRangeLow)
      );
    }

    }));



  let { pageData, page, maxPage, jumpPage } = usePagination(
    filteredReviews,
    40
  );



  useEffect(() => {
    if (
      searchQuery ||
      filterField ||
      latestDropDown ||
      platformField ||
      regionFilter ||
      priceRangeField
    )
      jumpPage(1);
  }, [
    searchQuery,
    filterField,
    latestDropDown,
    platformField,
    regionFilter,
    priceRangeField,
    jumpPage,
  ]);


  const BackgroundContainer = styled.div`
    -blur-radius: 20px;
    position: absolute;
    width: 100%;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #6e7290;
    z-index: -1;

    &:after {
      --color-background--rgb: 103, 103, 171;
      content: "";
      position: absolute;
      height: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      background: linear-gradient(
        0deg,
        rgba(var(--color-background--rgb), 1) 0,
        rgba(var(--color-background--rgb), 0.987) 8.1%,
        rgba(var(--color-background--rgb), 0.951) 15.5%,
        rgba(var(--color-background--rgb), 0.896) 22.5%,
        rgba(var(--color-background--rgb), 0.825) 29%,
        rgba(var(--color-background--rgb), 0.741) 35.3%,
        rgba(var(--color-background--rgb), 0.648) 41.2%,
        rgba(var(--color-background--rgb), 0.55) 47.1%,
        rgba(var(--color-background--rgb), 0.45) 52.9%,
        rgba(var(--color-background--rgb), 0.352) 58.8%,
        rgba(var(--color-background--rgb), 0.259) 64.7%,
        rgba(var(--color-background--rgb), 0.175) 71%,
        rgba(var(--color-background--rgb), 0.104) 77.5%,
        rgba(var(--color-background--rgb), 0.049) 84.5%,
        rgba(var(--color-background--rgb), 0.013) 91.9%,
        rgba(var(--color-background--rgb), 0)
      );
    }
  `;

  const Background = styled.div`
    --blur-radius: 20px;
    background-image: url(${reviewssw[0].Image});
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: calc(var(--blur-radius) * -1) calc(var(--blur-radius) * -1);
    background-size: cover;
    background-position: 50%;
    mix-blend-mode: overlay;
    filter: blur(var(--blur-radius));
  `;

  return (
    <Router>
      <ScrollToTop />
      <BackgroundContainer>
        <Background />
      </BackgroundContainer>

      <NaviBar
        onPlatformChange={onPlatformChange}
        onPlatformDrop={onPlatformDrop}
        clearFilter={clearFilter}
        clearSearchChange={clearSearchChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <Search
              onPlatformChange={onPlatformChange}
              onPlatformDrop={onPlatformDrop}
              clearPriceRange={clearPriceRange}
              onPriceRangeDrop={onPriceRangeDrop}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              clearGenre={clearGenre}
              onDropDownChange={onDropDownChange}
            />
            <MainPage
              filteredReviews={filteredReviews}
              pageData={pageData}
              reviewsps={reviewsst}
            />
            <Helmet>
              <meta charset="utf-8" />
              <title>
                May Sale Ba? - Get the latest prices on Nintendo Switch and Steam deals in Philippine Peso!
              </title>
              <meta
                name="description"
                content="Get to know about the latest Nintendo and Steam deals from digital platforms in Philippine Peso!"
              />
            </Helmet>
          </div>
        )}
      />

      <Route
        path="/allgames"
        exact
        render={(props) => (
          <div>
          {setRegionFilter("")}
            <Search
              onPlatformChange={onPlatformChange}
              onPlatformDrop={onPlatformDrop}
              clearPriceRange={clearPriceRange}
              onPriceRangeDrop={onPriceRangeDrop}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              clearGenre={clearGenre}
              onDropDownChange={onDropDownChange}
            />
            <CardGroup
              clearPriceRange={clearPriceRange}
              priceRangeDropDown={priceRangeDropDown}
              onPriceRangeDrop={onPriceRangeDrop}
              onPriceRangeChange={onPriceRangeChange}
              clearGenre={clearGenre}
              onPlatformDrop={onPlatformDrop}
              onPlatformChange={onPlatformChange}
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

      <Route
        path="/switch"
        render={(props) => (
          <div>
            {setPlatformField("Switch")}
            {setPlatformDropDown("Switch")}
            {setRegionFilter("")}
            <Search
              onPlatformChange={onPlatformChange}
              onPlatformDrop={onPlatformDrop}
              clearPriceRange={clearPriceRange}
              onPriceRangeDrop={onPriceRangeDrop}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              clearGenre={clearGenre}
              onDropDownChange={onDropDownChange}
            />
            <CardGroup
              clearPriceRange={clearPriceRange}
              priceRangeDropDown={priceRangeDropDown}
              onPriceRangeDrop={onPriceRangeDrop}
              onPriceRangeChange={onPriceRangeChange}
              clearGenre={clearGenre}
              onPlatformDrop={onPlatformDrop}
              onPlatformChange={onPlatformChange}
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
            <Helmet>
              <meta charset="utf-8" />
              <title>Nintendo Switch - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewssw.length +
                  " Nintendo Switch deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />
    
                  <Route
        path="/steam"
        render={(props) => (
          <div>
            {setPlatformField("Steam")}
            {setPlatformDropDown("Steam")}
            {setRegionFilter("")}
            <Search
              onPlatformChange={onPlatformChange}
              onPlatformDrop={onPlatformDrop}
              clearPriceRange={clearPriceRange}
              onPriceRangeDrop={onPriceRangeDrop}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              clearGenre={clearGenre}
              onDropDownChange={onDropDownChange}
            />
            <CardGroup
              clearPriceRange={clearPriceRange}
              priceRangeDropDown={priceRangeDropDown}
              onPriceRangeDrop={onPriceRangeDrop}
              onPriceRangeChange={onPriceRangeChange}
              clearGenre={clearGenre}
              onPlatformDrop={onPlatformDrop}
              onPlatformChange={onPlatformChange}
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
            <Helmet>
              <meta charset="utf-8" />
              <title>Steam - PH - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsst.length +
                  " Steam deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />
            
     
           

                  
      <Route
        path="/games/:games"
        exact
        render={({ match }) => (
          <div>
            <Content makeswitch={makeswitch} datam={datam} match={match} />
          </div>
        )}
      />
      <Route
        path="/giftcards"
        render={(props) => (
          <div>
            <GiftCards
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Helmet>
              <meta charset="utf-8" />
              <title>Gift Cards - May Sale Ba?</title>
              <meta
                name="description"
                content="Get to know about the latest Nintendo and Steam deals from digital platforms in Philippine Peso!"
              />
            </Helmet>
          </div>
        )}
      />
      <Route
        path="/faq"
        render={(props) => (
          <div>
            <FAQ />
            <Helmet>
              <meta charset="utf-8" />
              <title>FAQ - May Sale Ba?</title>
              <meta
                name="description"
                content="Get to know about the latest Nintendo and Steam deals from digital platforms in Philippine Peso!"
              />
            </Helmet>
          </div>
        )}
      />
    </Router>
  );
}
