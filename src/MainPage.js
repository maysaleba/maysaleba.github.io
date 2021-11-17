import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import FilterDropDown from "./FilterDropDown";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import reviewssw from "./csvjson.json";
import reviewspsx from "./csvjsonus.json";
import { Link } from "react-router-dom";

const MainPage = ({ filteredReviews, pageData, reviewsps }) => {
  var d = new Date();
  var lastd = new Date(d.setDate(d.getDate() - 3));
  var da = String(d.getDate()).padStart(2, "0");
  var mo = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = d.getFullYear();

  let daysago = year + "-" + mo + "-" + da;

  const newSwitchDiscounts = reviewssw.filter((x) => x.SaleStarted > daysago);
  const topSwitchDiscounts = reviewssw.filter((x) => x.SCORE > 70);
  const topPSDiscounts = reviewsps.filter((x) => x.SCORE > 70);

  return (
    <div>
      {/*     <SearchBox search={search} setSearch={setSearch}/>*/}
      <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>NEW ESHOP DISCOUNTS</b>

        </div>
         <hr className="linedividet"/>

        <Row xs={2} md={4} className="g-3">
          {newSwitchDiscounts.slice(0, 12).map((review, key) => (
            <div key={key}>
              <Cards
                Score={review.SCORE}
                Title={review.Title}
                SaleEnds={review.SaleEnds}
                Genre={review.genre}
                Slug={review.Slug}
                Image={review.Image}
                SalePrice={review.SalePrice}
                Discount={review.PercentOff}
                URL={review.URL}
                Platform={review.platform}
                PlusPrice={review.PlusPrice}
              />
            </div>
          ))}
        </Row>
        <hr className="linedivideb"/>
        <div align="center"><Link to="/allgames">VIEW ALL GAMES</Link></div>
      </Paper>
      <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>TOP RATED SWITCH GAMES</b>
          
        </div>
<hr className="linedividet"/>
        <Row xs={2} md={4} className="g-3">
          {topSwitchDiscounts.slice(0, 12).map((review, key) => (
            <div key={key}>
              <Cards
                Score={review.SCORE}
                Title={review.Title}
                SaleEnds={review.SaleEnds}
                Genre={review.genre}
                Slug={review.Slug}
                Image={review.Image}
                SalePrice={review.SalePrice}
                Discount={review.PercentOff}
                URL={review.URL}
                Platform={review.platform}
                PlusPrice={review.PlusPrice}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div align="center"><Link to="/allgames">VIEW ALL GAMES</Link></div>
      </Paper>
        <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>TOP RATED PLAYSTATION GAMES</b>
          
        </div>
<hr className="linedividet"/>
        <Row xs={2} md={4} className="g-3">
          {topPSDiscounts.slice(0, 12).map((review, key) => (
            <div key={key}>
              <Cards
                Score={review.SCORE}
                Title={review.Title}
                SaleEnds={review.SaleEnds}
                Genre={review.genre}
                Slug={review.Slug}
                Image={review.Image}
                SalePrice={review.SalePrice}
                Discount={review.PercentOff}
                URL={review.URL}
                Platform={review.platform}
                PlusPrice={review.PlusPrice}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div align="center"><Link to="/allgames">VIEW ALL GAMES</Link></div>
      </Paper>
    </div>
  );
};

export default MainPage;
