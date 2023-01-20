import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import Paper from "@mui/material/Paper";
import reviewssw from "./csvjson.json";

const MainPage = ({ filteredReviews, pageData, reviewsps }) => {
  var d = new Date();
  var lastd = new Date(d.setDate(d.getDate() - 7));
  var da = String(lastd.getDate()).padStart(2, "0");
  var mo = String(lastd.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = lastd.getFullYear();

  var lastmo = new Date(d.setDate(d.getDate() - 320));
  var damo = String(lastmo.getDate()).padStart(2, "0");
  var momo = String(lastmo.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yearmo = lastmo.getFullYear();

  let daysago = year + "-" + mo + "-" + da;
  let moago = yearmo + "-" + momo + "-" + damo;


console.log(daysago)

  const newSwitchDiscounts = reviewssw.filter((x) => x.SaleStarted > daysago);
  const topSwitchDiscounts = reviewssw.filter((x) => x.SCORE > 70);


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

  
  sortJson(reviewsps, "SCORE", "string", false);
  const newPSDiscounts = reviewsps.filter((x) => x.SCORE > 70 && x.ReleaseDate > moago );
  const topPSDiscounts = reviewsps;

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
                                          CanadaPrice={review.CanadaPrice}
                                          PeruPrice={review.PeruPrice}
                                          ArgentinaPrice={review.ArgentinaPrice}
                                          AustraliaPrice={review.AustraliaPrice}
                                          ColombiaPrice={review.ColombiaPrice}
                                          SouthafricaPrice={review.SouthafricaPrice}
                                          BrazilPrice={review.BrazilPrice}
                                          RussiaPrice={review.RussiaPrice}
                                          PolandPrice={review.PolandPrice}
                                          ChilePrice={review.ChilePrice}
                                          MexicoPrice={review.MexicoPrice}
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
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/switch"><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
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
                                          CanadaPrice={review.CanadaPrice}
                                          PeruPrice={review.PeruPrice}
                                          ArgentinaPrice={review.ArgentinaPrice}
                                          AustraliaPrice={review.AustraliaPrice}
                                          ColombiaPrice={review.ColombiaPrice}
                                          SouthafricaPrice={review.SouthafricaPrice}
                                          BrazilPrice={review.BrazilPrice}
                                          RussiaPrice={review.RussiaPrice}
                                          PolandPrice={review.PolandPrice}
                                          ChilePrice={review.ChilePrice}
                                          MexicoPrice={review.MexicoPrice}
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
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/switch"><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
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
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/playstation"><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
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
        <div className="card-footer-custom" align="center"><a href="https://maysaleba.com/playstation"><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
      </Paper>
    </div>
  );
};

export default MainPage;
