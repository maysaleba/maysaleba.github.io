import React, { useEffect, useMemo, useState } from "react";
import usePagination from "./usePagination.js";
import reviewssw from "./csvjson.json";
import reviewspsx from "./csvjsonus.json";
import sgreviewspsx from "./csvjsonsg.json";
import hkreviewspsx from "./csvjsonhk.json";
import trreviewspsx1 from "./csvjsontr.json";
import trreviewspsx2 from "./csvjsontr2.json";
import trreviewspsx3 from "./csvjsontr3.json";
import trreviewspsx4 from "./csvjsontr4.json";
import trreviewspsx5 from "./csvjsontr5.json";
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



let reviewsps = reviewspsx.filter((review) => review.SaleEnds >= today);
let sgreviewsps = sgreviewspsx.filter((review) => review.SaleEnds >= today);
let hkreviewsps = hkreviewspsx.filter((review) => review.SaleEnds >= today);
let trreviewspsx0 = trreviewspsx1.concat(trreviewspsx2).concat(trreviewspsx3).concat(trreviewspsx4).concat(trreviewspsx5)
let trreviewsps = trreviewspsx0.filter((review) => review.SaleEnds >= today);


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
  const [latestDropDown, setLatestDropDown] = useState("Top Rated");

  useEffect(() => {
    const reviews = reviewssw.concat(reviewsps).concat(sgreviewsps).concat(hkreviewsps).concat(trreviewsps);
    sortJson(reviews, "SCORE", "string", false);
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
    onLatestChange("Top Rated");
    onLatestDrop("Top Rated");
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
      return (
        review.Title.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e").replace(/\s/g, '').toLowerCase()) &&
        review.genre.toLowerCase().includes(filterField.toLowerCase()) &&
        review.platform.toLowerCase().includes(platformField.toLowerCase()) && 
        review.ESRBRating.toLowerCase().includes(regionFilter.toLowerCase()) &&
        (review.SalePrice < priceRangeField && review.SalePrice > priceRangeLow)
      );
    })
  );



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
              reviewsps={reviewsps}
            />
            <Helmet>
              <meta charset="utf-8" />
              <title>
                May Sale Ba? - Get the latest prices on Nintendo Switch and Sony
                Playstation deals in Philippine Peso!
              </title>
              <meta
                name="description"
                content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
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
        path="/playstation"
        render={(props) => (
          <div>
            {setPlatformField("Playstation")}
            {setPlatformDropDown("Playstation")}
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
              <title>Sony Playstation - US - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsps.length +
                  " Sony Playstation deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />
            <Route
        path="/playstation-us"
        render={(props) => (
          <div>
            {setPlatformField("Playstation")}
            {setPlatformDropDown("Playstation - US")}
            {setRegionFilter("US")}
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
              <title>Sony Playstation - US - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsps.length +
                  " Sony Playstation deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />
      <Route
        path="/playstation-sg"
        render={(props) => (
          <div>
            {setPlatformField("Playstation")}
            {setPlatformDropDown("Playstation - SG")}
            {setRegionFilter("SGD")}
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
              <title>Sony Playstation - SG - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsps.length +
                  " Sony Playstation deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />
            <Route
        path="/playstation-hk"
        render={(props) => (
          <div>
            {setPlatformField("Playstation")}
            {setPlatformDropDown("Playstation - HK")}
            {setRegionFilter("HKD")}
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
              <title>Sony Playstation - HK - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsps.length +
                  " Sony Playstation deals in Philippine Peso!"
                }
              />
            </Helmet>
          </div>
        )}
      />

                  <Route
        path="/playstation-tr"
        render={(props) => (
          <div>
            {setPlatformField("Playstation")}
            {setPlatformDropDown("Playstation - TR")}
            {setRegionFilter("TRD")}
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
              <title>Sony Playstation - US - May Sale Ba?</title>
              <meta
                name="description"
                content={
                  "Get to know about " +
                  reviewsps.length +
                  " Sony Playstation deals in Philippine Peso!"
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
                content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
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
                content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
              />
            </Helmet>
          </div>
        )}
      />
    </Router>
  );
}