import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import Paper from "@mui/material/Paper";
import reviewssw from "./csvjson.json";

const MainPage = ({ filteredReviews, pageData, reviewsps }) => {
const sortedReviews = sortJson([...reviewssw], "Popularity", "int", false);
const dsortedReviews = sortJson([...reviewssw], "SaleStarted", "date", false);
  
  const topSwitchDiscounts = sortedReviews.filter(review => review.SaleStarted !== '0000-00-00');;
  const newSwitchDiscounts = dsortedReviews.filter(review => review.SaleStarted !== '0000-00-00');;
  // const newSwitchDiscounts = reviewssw.filter((x) => x.SaleStarted > daysago);
  

function sortJson(element, prop, propType, asc) {
  let sortedElement = [...element]; // Create a copy of the element array to avoid mutating the original

  switch (propType) {
    case "int":
      sortedElement.sort(function (a, b) {
        const aValue = parseInt(a[prop]) || Number.MIN_SAFE_INTEGER;
        const bValue = parseInt(b[prop]) || Number.MIN_SAFE_INTEGER;

        return asc ? aValue - bValue : bValue - aValue;
      });
      break;
    case "date":
      // Filter entries where SCORE is not empty or 0 and date is not '0000-00-00'
      sortedElement = sortedElement.filter(item => item.SCORE !== "" && item.SCORE !== 0 && item[prop] !== '0000-00-00');

      // Sort by the date property
      sortedElement.sort(function (a, b) {
        let aValue = new Date(a[prop]);
        let bValue = new Date(b[prop]);

        // Handle invalid dates
        if (isNaN(aValue)) aValue = asc ? new Date(0) : new Date(8640000000000000);
        if (isNaN(bValue)) bValue = asc ? new Date(0) : new Date(8640000000000000);

        return asc ? aValue - bValue : bValue - aValue;
      });
      break;
    default:
      sortedElement.sort(function (a, b) {
        const aValue = a[prop] ? a[prop].toLowerCase() : "";
        const bValue = b[prop] ? b[prop].toLowerCase() : "";

        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
  }

  // Return the sorted and (if applicable) filtered element
  return sortedElement;
}



  
  const sortedSteamr = sortJson([...reviewsps], "Popularity", "int", false);
  const sortedSteamds = sortJson([...reviewsps], "SCORE", "int", false);
  const sortedSteamd = sortJson([...sortedSteamds], "SaleStarted", "date", false);
  const topPSDiscounts = sortedSteamr;
  const newPSDiscounts = sortedSteamd;
  

  return (
    <div>
      {/*     <SearchBox search={search} setSearch={setSearch}/>*/}
    <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>TRENDING SWITCH GAMES ON SALE</b>
          
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
                                          NorwayPrice={review.NorwayPrice}
                                          PolandPrice={review.PolandPrice}
                                          NewZealandPrice={review.NewZealandPrice}
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
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/switch" style={{ color: 'black' }}><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
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
                                          NorwayPrice={review.NorwayPrice}
                                          PolandPrice={review.PolandPrice}
                                          NewZealandPrice={review.NewZealandPrice}
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
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/switch" style={{ color: 'black' }}><b><u>VIEW ALL SWITCH GAMES</u></b></a></div>
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
          <b>TRENDING PLAYSTATION GAMES ON SALE</b>
          
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
                IsPS4={review.IsPS4}
                IsPS5={review.IsPS5}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div  className="card-footer-custom" align="center"><a href="https://maysaleba.com/playstation" style={{ color: 'black' }}><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
      </Paper>
        <Paper elevation={2} className="custom-container">
        <div className="card-header-custom">
          <b>NEW PLAYSTATION GAMES ON SALE</b>
          
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
                IsPS4={review.IsPS4}
                IsPS5={review.IsPS5}
              />
            </div>
          ))}
        </Row>
             <hr className="linedivideb"/>
        <div className="card-footer-custom" align="center"><a href="https://maysaleba.com/playstation" style={{ color: 'black' }}><b><u>VIEW ALL PLAYSTATION GAMES</u></b></a></div>
      </Paper>
    </div>
  );
};

export default MainPage;
