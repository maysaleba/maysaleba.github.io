import React, { useEffect, useMemo, useState } from "react";
import usePagination from "./usePagination.js";
import reviewssw from "./csvjson.json";
import reviewsst from "./csvjsontr.json";

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
import Pasabuy from "./Pasabuy";
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

// Minimal route wrapper: sets defaults once, renders Search + CardGroup + Helmet
function ListPage({ defaults, SearchCmpProps, CardGroupProps, HelmetProps }) {
  const { setPlatformField, setPlatformDropDown, setRegionFilter } = CardGroupProps;

  React.useEffect(() => {
    if (defaults?.platform !== undefined) {
      setPlatformField(defaults.platform);
      setPlatformDropDown(defaults.platformLabel ?? (defaults.platform || "All Platforms"));
    }
    if (defaults?.region !== undefined) {
      setRegionFilter(defaults.region);
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search {...SearchCmpProps} />
      <CardGroup {...CardGroupProps} />
      {HelmetProps && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{HelmetProps.title}</title>
          <meta name="description" content={HelmetProps.description} />
        </Helmet>
      )}
    </>
  );
}



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

    case "date":
      element = element.sort(function (a, b) {
        const aDate = new Date(a[prop]);
        const bDate = new Date(b[prop]);
        return asc ? aDate - bDate : bDate - aDate;
      });
      break;

    default:
      element = element.sort(function (a, b) {
        const aValue = (a[prop] || '').toString().toLowerCase();
        const bValue = (b[prop] || '').toString().toLowerCase();
        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
  }

  return element;
}


  
  const reviewsswf = reviewssw.filter(review => review.SaleStarted !== '0000-00-00');
  const reviewsstf = reviewsst.filter(review => 
  review.PlusPrice !== undefined &&
  review.ReleaseDate !== undefined &&
  review.SaleEnds !== undefined &&
  review.SaleStarted !== undefined &&
  review.Publisher !== undefined &&
  review.genre !== undefined &&
  review.description !== undefined
);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ left: 0, top: 0, behavior: "instant" });
    }, [pathname]);

    return null;
  }

 const theURLa =
    "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";

  const [datam, setDatam] = React.useState({});
  const [makeswitch, setMakeswitch] = React.useState(null);

  useEffect(() => {
    axios
      .get(theURLa)
      .then((response) => {
        // Uncomment one depending on the API structure you want:
        // setDatam(response.data.rates);   // if API has "rates"
        setDatam(response.data.quotes);        // if API has "php"
        setMakeswitch("1");
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, []);


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

const [originalData, setOriginalData] = useState([]);

useEffect(() => {
  const sortedSwitch = sortJson(reviewsswf, "Popularity", "int", false);  
  const sortedPlaystation = sortJson(reviewsstf, "Popularity", "int", false);
  const reviews = sortedPlaystation.concat(sortedSwitch);

  setOriginalData(reviews);     // keep pristine copy
  setLatestField(reviews);      // default shown list
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

// Put this near your other constants
const PRICE_MAP = {
  "All Price Range": [0, Number.POSITIVE_INFINITY],
  "≤ P100":          [0, 100],
  "≤ P250":          [101, 250],
  "≤ P500":          [251, 500],
  "≤ P750":          [501, 750],
  "≤ P1,000":        [751, 1000],
  "≤ P1,500":        [1001, 1500],
  "≤ P2,000":        [1501, 2000],
  "≤ P2,500":        [2001, 2500],
  "≤ P3,500+":       [2501, Number.POSITIVE_INFINITY],
};

const onPriceRangeChange = (label) => {
  const [min, max] = PRICE_MAP[label] ?? PRICE_MAP["All Price Range"];
  setPriceRangeLow(min);
  setPriceRangeField(max);
};


const SORTERS = {
  "Popular":        (a, b) => b.Popularity - a.Popularity,
  "Top Rated":      (a, b) => b.SCORE - a.SCORE,
  "New Discounts":  (a, b) => new Date(b.SaleStarted) - new Date(a.SaleStarted) || (b.SCORE - a.SCORE),
  "Latest Release": (a, b) => new Date(b.ReleaseDate) - new Date(a.ReleaseDate),
  "Price ↓":        (a, b) => (a._lowestPHP - b._lowestPHP),
  "Price ↑":        (a, b) => (b._lowestPHP - a._lowestPHP),
};

const onLatestChange = (label) => {
  const withLowest = originalData.map(r => ({ ...r, _lowestPHP: lowestPhpFor(r) }));
  const sortFn = SORTERS[label] || SORTERS["Popular"];
  setLatestField([...withLowest].sort(sortFn));
  setLatestDropDown(label);
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


// --- Lowest PHP price across regions (mirrors Content.js) ---
function lowestPhpFor(review) {
  if (!datam || !datam.PHP) return Infinity; // until FX loads, keep it out of “cheap” buckets

  // Exchange factors (PHP per 1 unit of currency)
  const usd = Number(datam.PHP) / Number(datam.USD);
  const ars = Number(datam.PHP) / Number(datam.ARS);
  const aud = Number(datam.PHP) / Number(datam.AUD);
  const brl = Number(datam.PHP) / Number(datam.BRL);
  const cad = Number(datam.PHP) / Number(datam.CAD);
  const nzd = Number(datam.PHP) / Number(datam.NZD);
  const cop = Number(datam.PHP) / Number(datam.COP);
  const mxn = Number(datam.PHP) / Number(datam.MXN);
  const pen = Number(datam.PHP) / Number(datam.PEN);
  const pln = Number(datam.PHP) / Number(datam.PLN);
  const nok = Number(datam.PHP) / Number(datam.NOK);
  const zar = Number(datam.PHP) / Number(datam.ZAR);
  const sgd = Number(datam.PHP) / Number(datam.SGD);
  const hkd = Number(datam.PHP) / Number(datam.HKD);
  const trd = Number(datam.PHP) / Number(datam.TRY);
  const jpy = Number(datam.PHP) / Number(datam.JPY);
  const krw = Number(datam.PHP) / Number(datam.KRW);

  // Build region→PHP map using available fields
  const prices = {};

  // Switch uses USD "SalePrice" as base; PS uses Peso “SalePrice”
  // We still include both in the candidate list (converted to PHP if needed).
  if (Number.isFinite(+review.SalePrice)) {
    prices.US = +review.SalePrice * (review.platform === "Playstation" ? 1 : usd);
  }
  if (Number.isFinite(+review.Price)) {
    // full/original price as fallback candidate
    prices._FULL = +review.Price * (review.platform === "Playstation" ? 1 : usd);
  }

  // Other regions (if present on the record), all converted to PHP
  if (Number.isFinite(+review.CanadaPrice))       prices.Canada        = +review.CanadaPrice * cad;
  if (Number.isFinite(+review.PeruPrice))         prices.Peru          = +review.PeruPrice * pen;
  if (Number.isFinite(+review.AustraliaPrice))    prices.Australia     = +review.AustraliaPrice * aud;
  if (Number.isFinite(+review.ColombiaPrice))     prices.Colombia      = +review.ColombiaPrice * cop;
  if (Number.isFinite(+review.SouthafricaPrice))  prices["South Africa"]= +review.SouthafricaPrice * zar;
  if (Number.isFinite(+review.BrazilPrice))       prices.Brazil        = +review.BrazilPrice * brl;
  if (Number.isFinite(+review.NorwayPrice))       prices.Norway        = +review.NorwayPrice * nok;
  if (Number.isFinite(+review.PolandPrice))       prices.Poland        = +review.PolandPrice * pln;
  if (Number.isFinite(+review.NewZealandPrice))   prices["New Zealand"]= +review.NewZealandPrice * nzd;
  if (Number.isFinite(+review.MexicoPrice))       prices.Mexico        = +review.MexicoPrice * mxn;
  if (Number.isFinite(+review.HongKongPrice))     prices["Hong Kong"]  = +review.HongKongPrice * hkd;
  if (Number.isFinite(+review.KoreaPrice))        prices.Korea         = +review.KoreaPrice * krw;
  if (Number.isFinite(+review.JapanPrice))        prices.Japan         = +review.JapanPrice * jpy;
  if (Number.isFinite(+review.SingaporePrice))    prices.Singapore     = +review.SingaporePrice * sgd;
  if (Number.isFinite(+review.TurkeyPrice))       prices.Turkey        = +review.TurkeyPrice * trd;

  // Argentina special handling (same shape as Content.js: ARS + 21% VAT + service/fee component)
  if (Number.isFinite(+review.ArgentinaPrice)) {
    const basePhp = +review.ArgentinaPrice * ars;
    // In Content.js you sort, then flag Argentina and show notes; for list filtering we just
    // fold taxes/fees into the effective PHP so it compares apples to apples.
    // Keeping it aligned with Content.js math pattern:
    const usdPerPhp = usd; // already PHP per USD
    const regionalityTax =
      +review.ArgentinaPrice * ars * 1.21 * ((1500 - 12100 * ars) / (12100 * ars));
    const argentinaVat = (basePhp * 1.21) - basePhp;
    prices.Argentina = basePhp + argentinaVat + regionalityTax;
  }

  // Strip non-finite/<=0, then return the minimum
  const vals = Object.values(prices).filter(v => Number.isFinite(v) && v > 0);
  return vals.length ? Math.min(...vals) : Infinity;
}


let filteredReviews = useMemo(() =>
  latestField.filter((review) => {
    const cleanFilterField = filterField
      .replace(/[^a-zA-Z0-9é, -]/g, "")
      .replace("é", "e").replace(/\s/g, '').toLowerCase();

    const filterGenres = cleanFilterField.split(',').map(g => g.trim());

    const lowPhp = lowestPhpFor(review);
    const fxReady = Number.isFinite(lowPhp) && lowPhp !== Infinity;

    // If FX not ready yet, don't fail the price filter
    const pricePass = fxReady
      ? (lowPhp <= priceRangeField && lowPhp >= priceRangeLow)
      : true;

    return (
      review.Title.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e")
        .replace(/\s/g, '').toLowerCase()
        .includes(
          searchQuery.replace(/[^a-zA-Z0-9é ]/g, "").replace("é","e")
          .replace(/\s/g, '').toLowerCase()
        ) &&
      filterGenres.some(filterGenre => review.genre.toLowerCase().includes(filterGenre)) &&
      review.platform.toLowerCase().includes(platformField.toLowerCase()) &&
      pricePass
    );
  }), [latestField, filterField, searchQuery, platformField, priceRangeField, priceRangeLow, datam]
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

// ---- props for child components (Search + CardGroup) ----
const SearchCmpProps = {
  onPlatformChange,
  onPlatformDrop,
  clearPriceRange,
  onPriceRangeDrop,
  searchQuery,
  setSearchQuery,
  clearGenre,
  onDropDownChange,
};

const CardGroupProps = {
  clearPriceRange,
  priceRangeDropDown,
  onPriceRangeDrop,
  onPriceRangeChange,
  clearGenre,
  onPlatformDrop,
  onPlatformChange,
  platformDropDown,
  onLatestDrop,
  onLatestChange,
  latestDropDown,
  clearFilter,
  genreDropDown,
  onDropDownChange,
  onFilterChange,
  clearSearchChange,
  onRegionChange,
  searchQuery,
  page,
  setSearchQuery,
  jumpPage,
  filteredReviews,
  pageData,
  maxPage,
  // for ListPage init defaults
  setPlatformField,
  setPlatformDropDown,
  setRegionFilter,
};

// ---- route table (defaults + Helmet text per route) ----
const ROUTES = [
  {
    path: "/allgames",
    defaults: { platform: "", platformLabel: "All Platforms", region: "" },
    helmet: {
      title: "All Games - May Sale Ba?",
      description: "Get the latest Nintendo and Playstation deals in Philippine Peso!",
    },
  },
  {
    path: "/switch",
    defaults: { platform: "Switch", platformLabel: "Switch", region: "" },
    helmet: {
      title: "Nintendo Switch - May Sale Ba?",
      description: `Get to know about ${reviewssw.length} Nintendo Switch deals in Philippine Peso!`,
    },
  },
  {
    path: "/switch-2",
    defaults: { platform: "Switch 2", platformLabel: "Switch 2", region: "" },
    helmet: {
      title: "Nintendo Switch 2 - May Sale Ba?",
      description: `Get to know about ${reviewssw.length} Nintendo Switch deals in Philippine Peso!`,
    },
  },
  {
    path: "/Playstation",
    defaults: { platform: "Playstation", platformLabel: "Playstation", region: "" },
    helmet: {
      title: "Playstation - PH - May Sale Ba?",
      description: `Get to know about ${reviewsstf.length} Playstation deals in Philippine Peso!`,
    },
  },
];


return (
  <Router>
    <ScrollToTop />
    <NaviBar
      onPlatformDrop={onPlatformDrop}
      clearFilter={clearFilter}
      clearSearchChange={clearSearchChange}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />

    <BackgroundContainer>
      <Background />
    </BackgroundContainer>

    {/* Home */}
    <Route
      path="/"
      exact
      render={() => (
        <div>
          <Search {...SearchCmpProps} />
          <MainPage
            filteredReviews={filteredReviews}
            pageData={pageData}
            reviewsps={reviewsstf}
          />
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {`May Sale Ba? - Get the latest prices on Nintendo Switch and Playstation deals in Philippine Peso!`}
            </title>
            <meta
              name="description"
              content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
            />
          </Helmet>
        </div>
      )}
    />

    {/* List routes (no setters in JSX!) */}
    {ROUTES.map((r) => (
      <Route
        key={r.path}
        path={r.path}
        exact
        render={() => (
          <ListPage
            defaults={r.defaults}            // e.g. { platform: "Switch", platformLabel: "Switch", region: "" }
            SearchCmpProps={SearchCmpProps}  // Search props you already build above
            CardGroupProps={CardGroupProps}  // CardGroup props you already build above
            HelmetProps={r.helmet}           // title/description per route
          />
        )}
      />
    ))}

    {/* Detail page */}
    <Route
      path="/games/:games"
      exact
      render={({ match }) => (
        <div>
          <Content makeswitch={makeswitch} datam={datam} match={match} />
        </div>
      )}
    />

    {/* Gift Cards */}
    <Route
      path="/giftcards"
      render={() => (
        <div>
          <GiftCards searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Helmet>
            <meta charSet="utf-8" />
            <title>Gift Cards - May Sale Ba?</title>
            <meta
              name="description"
              content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
            />
          </Helmet>
        </div>
      )}
    />

    {/* FAQ */}
    <Route
      path="/faq"
      render={() => (
        <div>
          <FAQ searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Helmet>
            <meta charSet="utf-8" />
            <title>FAQ - May Sale Ba?</title>
            <meta
              name="description"
              content="Get to know about the latest Nintendo and Playstation deals from digital platforms in Philippine Peso!"
            />
          </Helmet>
        </div>
      )}
    />

    {/* Pasabuy */}
    <Route
      path="/pasabuy"
      render={() => (
        <div>
          <Pasabuy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Helmet>
            <meta charSet="utf-8" />
            <title>Pasabuy - May Sale Ba?</title>
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
