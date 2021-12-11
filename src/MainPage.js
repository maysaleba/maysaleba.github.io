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
import AdSense from 'react-adsense';

const MainPage = ({ filteredReviews, pageData, reviewsps }) => {
  var d = new Date();
  var lastd = new Date(d.setDate(d.getDate() - 3));
  var da = String(lastd.getDate()).padStart(2, "0");
  var mo = String(lastd.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = lastd.getFullYear();

  var lastmo = new Date(d.setDate(d.getDate() - 180));
  var damo = String(lastmo.getDate()).padStart(2, "0");
  var momo = String(lastmo.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yearmo = lastmo.getFullYear();

  let daysago = year + "-" + mo + "-" + da;
  let moago = yearmo + "-" + momo + "-" + damo;

  const newSwitchDiscounts = reviewssw.filter((x) => x.SaleStarted > daysago);
  const topSwitchDiscounts = reviewssw.filter((x) => x.SCORE > 70);
  const newPSDiscounts = reviewsps.filter((x) => x.SCORE > 75 && x.ReleaseDate > moago );
  const topPSDiscounts = reviewsps.filter((x) => x.SCORE > 70);

  return (
    <div>
      {/*     <SearchBox search={search} setSearch={setSearch}/>*/}
      <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>NEW SWITCH DISCOUNTS</b>

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
                Price={review.Price}
              />
            </div>
          ))}
        </Row>
        <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/#/switch"><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
      </Paper>
    {/*  <div align="center">
      <AdSense.Google
  client='ca-pub-4543556906953539'
  slot='3566322911'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>
</div>*/}
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
                Price={review.Price}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/#/switch"><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
      </Paper>
      <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>NEW PLAYSTATION DISCOUNTS</b>
          
        </div>
<hr className="linedividet"/>
        <Row xs={2} md={4} className="g-3">
          {newPSDiscounts.slice(0, 12).map((review, key) => (
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
                Price={review.Price}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/#/playstation"><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
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
                Price={review.Price}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div className="card-footer-custom" align="center"><a href="https://maysaleba.com/#/playstation"><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
      </Paper>
    </div>
  );
};

export default MainPage;
