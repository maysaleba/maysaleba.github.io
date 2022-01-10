import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";
import Badge2 from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import noimage from './noimage.jpg';
import download from "./download.gif";
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

           let hour = today.getHours();

  today = yyyy + "-" + mm + "-" + dd;


  // var theURL = "https://api.exchangerate.host/latest?base=PHP&v=" + today + "T" + hour;
            var theURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php.json'
            function httpGet(theUrl) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", theURL, false); // false for synchronous request
                xmlHttp.send(null);
                return xmlHttp.response;
            }

            let fxc = httpGet();
            const fxcp = JSON.parse(fxc)
            
            // console.log(fxcp.php.usd);

            var usdExchange = 1 / fxcp.php.usd;
            var arsExchange = 1 / fxcp.php.ars;
            var audExchange = 1 / fxcp.php.aud;
            var brlExchange = 1 / fxcp.php.brl;
            var cadExchange = 1 / fxcp.php.cad;
            var clpExchange = 1 / fxcp.php.clp;
            var copExchange = 1 / fxcp.php.cop;
            var mxnExchange = 1 / fxcp.php.mxn;
            var penExchange = 1 / fxcp.php.pen;
            var plnExchange = 1 / fxcp.php.pln;
            var rubExchange = 1 / fxcp.php.rub;
            var zarExchange = 1 / fxcp.php.zar;


            // var usdExchange = 1 / fxcp.rates.USD;
            // var arsExchange = 1 / fxcp.rates.ARS;
            // var audExchange = 1 / fxcp.rates.AUD;
            // var brlExchange = 1 / fxcp.rates.BRL;
            // var cadExchange = 1 / fxcp.rates.CAD;
            // var clpExchange = 1 / fxcp.rates.CLP;
            // var copExchange = 1 / fxcp.rates.COP;
            // var mxnExchange = 1 / fxcp.rates.MXN;
            // var penExchange = 1 / fxcp.rates.PEN;
            // var plnExchange = 1 / fxcp.rates.PLN;
            // var rubExchange = 1 / fxcp.rates.RUB;
            // var zarExchange = 1 / fxcp.rates.ZAR;


            console.log("USD\n" + usdExchange + "\nARS\n" + arsExchange + "\nAUD\n" + audExchange + "\nBRL\n" + brlExchange + "\nCAD\n" + cadExchange + "\nCLP\n" + clpExchange + "\nCOP\n" + copExchange 
              + "\nMXN\n" + mxnExchange + "\nPEN\n" + penExchange + "\nPLN\n" + plnExchange + "\nRUB\n" + rubExchange + "\nZAR\n" + zarExchange);

const Cards = ({ Title, Image, Score, SaleEnds, Genre, Slug, SalePrice, Discount, URL, Platform, PlusPrice, Price, CanadaPrice, 
PeruPrice, ArgentinaPrice, AustraliaPrice, ColombiaPrice, SouthafricaPrice, BrazilPrice, RussiaPrice, PolandPrice, ChilePrice, MexicoPrice }) => {
  // var d = new Date();
  // var lastd = new Date(d.setDate(d.getDate() - 3));
  // var da = String(d.getDate()).padStart(2, "0");
  // var mo = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var year = d.getFullYear();

  // var daysago = year + "-" + mo + "-" + da;
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date();
            const secondDate = new Date(SaleEnds);
            // const diffDays = Math.round((secondDate - firstDate) / oneDay);

            function DaysLeft(props) {
              // const isExpired = props.isExpired;
              const diffDays = Math.round((secondDate - firstDate) / oneDay);

              if (diffDays >= 0) {
                return (
                  <Badge bg="warning" text="dark">
                    {diffDays} days left
                  </Badge>
                );
              }
              return (
                <Badge bg="secondary" text="light">
                  Expired
                </Badge>
              );
            }

            function OpenScore(score) {
              const hasScore = score.hasScore;
              if (hasScore === "-1" || hasScore === "") {
                return null;
              }
              return (
                <div className="d-flex justify-content-left opencritic-container">
                  {/*<span className="opencritic-logo" />*/}
                  <span className="opencritic-logo score-text">{Score}</span>
                </div>
              );
            }

            function PercentOff(props) {
              return (
                <Badge pill bg="danger">
                  {"-"+Discount}
                </Badge>
              );
            }

            function PesoPrice(props){

              if (props.psorsw === "Switch"){
                var pricesobj = {
                  "Canada": CanadaPrice * cadExchange,
                  "Peru": PeruPrice * penExchange,
                  "Argentina": ArgentinaPrice * arsExchange * 1.43,
                  "Australia": AustraliaPrice * audExchange,
                  "Colombia": ColombiaPrice * copExchange,
                  "Southafrica": SouthafricaPrice * zarExchange,
                  "Brazil": BrazilPrice * brlExchange,
                  "Russia": RussiaPrice * rubExchange,
                  "Poland": PolandPrice * plnExchange,
                  "Chile": ChilePrice * clpExchange,
                  "Mexico": MexicoPrice * mxnExchange,
                  "US": SalePrice * usdExchange
                }

               Object.entries(pricesobj).forEach(([k, v]) => {
                            if (v === 0) delete pricesobj[k];
                        });

               // console.log(pricesobj)


//                 const entries = Object.entries(pricesobj).sort(([, a], [, b]) => a - b);

// var rank1 = entries[0][0] + ": " + entries[0][1]
// var rank2 = entries[1][0] + ": " + entries[1][1]
// var rank3 = entries[2][0] + ": " + entries[2][1]

//  console.log(rank1 + "\n" + rank2 + "\n" + rank3);


                var smallest = '';
                var smallestprice;
                        for (var key in pricesobj) {
                          if (smallest !== '' && pricesobj[key] < pricesobj[smallest]) {
                            smallest = key;
                            smallestprice = pricesobj[key]
                          } else if (smallest === '') {
                            smallest = key;
                            smallestprice = pricesobj[key]
                          }
                        }
                        // console.log("smallest---", smallest + "\n" + smallestprice);

                        function SmallestFlag() {
                            if (smallest === "US")
                            {
                              return (
                                  <span className="usregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Argentina"){
                              return (
                                  <span className="arregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Australia"){
                              return (
                                  <span className="auregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Brazil"){
                              return (
                                  <span className="brregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Canada"){
                              return (
                                  <span className="caregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Chile"){
                              return (
                                  <span className="clregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Colombia"){
                              return (
                                  <span className="coregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Mexico"){
                              return (
                                  <span className="mxregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Peru"){
                              return (
                                  <span className="peregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Poland"){
                              return (
                                  <span className="plregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Russia"){
                              return (
                                  <span className="ruregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else if (smallest === "Southafrica"){
                              return (
                                  <span className="zaregion-logo" style={{fontWeight: 'bold'}}>{"₱"+Math.round(smallestprice)}</span>
                                )
                            }
                            else {
                              return null;
                            }


                        }


                   return (
                    <>
                    <SmallestFlag/>
</>
                )
              } if  (props.psorsw === "Playstation"){
                   return (
                 <span style={{fontWeight: 'light'}}>
                  {"₱"+Math.round((props.saleprice * usdExchange))}
                  </span>
                )
            } if  (props.psorsw === "ogprice"){
                   return (
                 <span style={{fontWeight: 'light'}}>
                  {"₱"+Math.round((props.saleprice * usdExchange))}
                  </span>
                )
            }
          }


                      function PesoPlusPrice(props){

              if (props.psorsw === "Switch"){
                   return null;
              } if  (props.psorsw === "Playstation"){



                  if (PlusPrice == 0) {
                      return (
                         <span className="psplusbadge" style={{fontWeight: 'bold'}}>
                  FREE
                  </span>

                        )
                  }
else {return (
                 <span className="psplusbadge" style={{fontWeight: 'bold'}}>
                  {"₱"+Math.round((PlusPrice * usdExchange))}
                  </span>
                )}

                   
            }
          }


            function PlatformBadge(props) {
              const platform = props.hasBadge
              if (platform === "Switch" )
              {
                return (<span className="img-responsive float-end nbadges nintendo"></span>)
              } if (platform === "Playstation")
              {
                return (<span className="img-responsive float-end pbadges playstation"></span>)
              }
             
            }


            const StyledBadge = styled(Badge2)(({ theme }) => ({
  '& .MuiBadge-badge': {
    // size:50,
    height: 30,
    width: 60,
    bottom: 10,
    right: 25,
    // backgroundColor: "red"
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


  return (
    
    <Col>
    <Link to={`/games/${Slug}`} className="linkto" style={{color: 'black', textDecoration: 'none'}}>
      <Card className="border-0">
      
        <LazyLoadImage 
        effect="opacity"

        key={Image}
        className="card-img" 
        src={Image}
    onError={event => {
          event.target.src = noimage
          event.onerror = null
        }}
        visibleByDefault={Image}
         />


        <Card.ImgOverlay className="card-img-overlay">
          <PlatformBadge hasBadge={Platform}/>
          {/*<span className="img-responsive float-end nbadges nintendo"></span>*/}
          <OpenScore hasScore={Score} />
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title className="card-title">{Title}</Card.Title>
          <Card.Text className="card-text">
           <PercentOff /> <strike><PesoPrice psorsw="ogprice" saleprice={Price} /></strike>   <PesoPrice 
           psorsw={Platform} 
           saleprice={SalePrice} 
           canadaprice={CanadaPrice}
           peruprice={PeruPrice}
           argentinaprice={ArgentinaPrice}
           australiaprice={AustraliaPrice}
           colombiaprice={ColombiaPrice}
           southafricaprice={SouthafricaPrice}
           brazilprice={BrazilPrice}
           russiaprice={RussiaPrice}
           polandprice={PolandPrice}
           chileprice={ChilePrice}
           mexicoprice={MexicoPrice}
           /> <PesoPlusPrice psorsw={Platform} pesoplus={PlusPrice} /> <DaysLeft isExpired={SaleEnds} />
            {/*<PesoPrice />
            {" "+Genre}
*/}          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    
  );
};

export default Cards;
