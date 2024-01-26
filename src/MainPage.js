import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import Paper from "@mui/material/Paper";
import reviewssw from "./csvjson.json";

const MainPage = ({ filteredReviews, pageData, reviewsps }) => {
  var d = new Date();
  var lastt = new Date(d.setDate(d.getDate() - 1));
  var dato = String(lastt.getDate()).padStart(2, "0");
  var moto = String(lastt.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yearto = lastt.getFullYear();
  




  var lastd = new Date(d.setDate(d.getDate() - 1));
  var da = String(lastd.getDate()).padStart(2, "0");
  var mo = String(lastd.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = lastd.getFullYear();

  var lastmo = new Date(d.setDate(d.getDate() - 320));
  var damo = String(lastmo.getDate()).padStart(2, "0");
  var momo = String(lastmo.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yearmo = lastmo.getFullYear();

  let todayd = yearto + "-" + moto + "-" + dato;
  let daysago = year + "-" + mo + "-" + da;
  let moago = yearmo + "-" + momo + "-" + damo;




const sortedReviews = sortJson([...reviewssw], "Popularity", "int", false);
  
  const topSwitchDiscounts = sortedReviews;
  const newSwitchDiscounts = reviewssw.filter((x) => x.SaleStarted > daysago);
  


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


  
  sortJson(reviewsps, "SCORE", "int", false);
  const newPSDiscounts = reviewsps.filter((x) => x.SaleStarted >= todayd );
  const topPSDiscounts = reviewsps;

  return (
    <div>
      {/*     <SearchBox search={search} setSearch={setSearch}/>*/}
    <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>POPULAR SWITCH GAMES ON SALE</b>
          
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
                                          ESRBRating={review.ESRBRating}
                                  />

            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/switch"><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
      </Paper>
      <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>NEW SWITCH GAMES ON SALE</b>

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
                                          ESRBRating={review.ESRBRating}
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
          <b>NEW STEAM GAMES ON SALE</b>
          
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
                ESRBRating={review.ESRBRating}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/steam"><b><u>VIEW ALL STEAM GAMES</u></b></a></div>
      </Paper>
        <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>TOP RATED STEAM GAMES ON SALE</b>
          
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
                ESRBRating={review.ESRBRating}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div className="card-footer-custom" align="center"><a href="https://maysaleba.com/steam"><b><u>VIEW ALL STEAM GAMES</u></b></a></div>
      </Paper>
    </div>
  );
};

export default MainPage;
