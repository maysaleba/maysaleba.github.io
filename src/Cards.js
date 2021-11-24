import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";
import Badge2 from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import noimage from './noimage.jpg';


            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

            var theURL = 'https://api.exchangerate.host/latest?base=PHP&v=_' + today + '_';

            function httpGet(theUrl) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", theURL, false); // false for synchronous request
                xmlHttp.send(null);
                return xmlHttp.response;
            }

            let fxc = httpGet();
            const fxcp = JSON.parse(fxc)
            

            var phpExchange = 1 / fxcp.rates.USD;
            // var mexExchange = 1 / fxcp.rates.MXN;

            console.log(phpExchange);

const Cards = ({ Title, Image, Score, SaleEnds, Genre, Slug, SalePrice, Discount, URL, Platform, PlusPrice, Price }) => {
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
                   return (
                 <span style={{fontWeight: 'bold'}}>
                  {"₱"+Math.round((props.saleprice * phpExchange))}
                  </span>
                )
              } if  (props.psorsw === "Playstation"){
                   return (
                 <span style={{fontWeight: 'light'}}>
                  {"₱"+Math.round((props.saleprice * phpExchange))}
                  </span>
                )
            } if  (props.psorsw === "ogprice"){
                   return (
                 <span style={{fontWeight: 'light'}}>
                  {"₱"+Math.round((props.saleprice * phpExchange))}
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
                  {"₱"+Math.round((PlusPrice * phpExchange))}
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
           <PercentOff /> <strike><PesoPrice psorsw="ogprice" saleprice={Price} /></strike>   <PesoPrice psorsw={Platform} saleprice={SalePrice} /> <PesoPlusPrice psorsw={Platform} pesoplus={PlusPrice} /> <DaysLeft isExpired={SaleEnds} />
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
