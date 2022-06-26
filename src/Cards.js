import React, { useEffect } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import noimage from "./noimage.jpg";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import download from "./download.gif";
// console.log("USD\n" + usdExchange + "\nARS\n" + arsExchange + "\nAUD\n" + audExchange + "\nBRL\n" + brlExchange + "\nCAD\n" + cadExchange + "\nCLP\n" + clpExchange + "\nCOP\n" + copExchange
//   + "\nMXN\n" + mxnExchange + "\nPEN\n" + penExchange + "\nPLN\n" + plnExchange + "\nRUB\n" + rubExchange + "\nZAR\n" + zarExchange);

const Cards = ({
  Title,
  Image,
  Score,
  SaleEnds,
  Genre,
  Slug,
  SalePrice,
  Discount,
  URL,
  Platform,
  PlusPrice,
  Price,
  CanadaPrice,
  PeruPrice,
  ArgentinaPrice,
  AustraliaPrice,
  ColombiaPrice,
  SouthafricaPrice,
  BrazilPrice,
  RussiaPrice,
  PolandPrice,
  ChilePrice,
  MexicoPrice,
}) => {

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

let hour = today.getHours();

today = yyyy + "-" + mm + "-" + dd;

  var theURL = "x"
    // "https://api.exchangerate.host/latest?base=PHP&v=" + today + "T" + hour;
  var theURLa =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php.json";

  const [datam, setDatam] = React.useState({});
  const [makeswitch, setMakeswitch] = React.useState(null);

  useEffect(() => {
    axios
      .get(theURL)
      .then((response) => {
        setDatam(response.data.rates); // if using exchangerate.host
        // setDatam(response.data.php) // if using currency-api
      })
      .catch((error) => {
        console.log(error);
        axios.get(theURLa).then((response) => {
          setDatam(response.data.php);
          setMakeswitch("2");
          // if using exchangerate.host
          // setDatam(response.data.php) // if using currency-api
        });
      });
  }, [theURL]);

  if (makeswitch === null) {
    var usdExchange = 1 / JSON.stringify(datam.USD);
    var arsExchange = 1 / JSON.stringify(datam.ARS);
    var audExchange = 1 / JSON.stringify(datam.AUD);
    var brlExchange = 1 / JSON.stringify(datam.BRL);
    var cadExchange = 1 / JSON.stringify(datam.CAD);
    var clpExchange = 1 / JSON.stringify(datam.CLP);
    var copExchange = 1 / JSON.stringify(datam.COP);
    var mxnExchange = 1 / JSON.stringify(datam.MXN);
    var penExchange = 1 / JSON.stringify(datam.PEN);
    var plnExchange = 1 / JSON.stringify(datam.PLN);
    var rubExchange = 1 / JSON.stringify(datam.RUB);
    var zarExchange = 1 / JSON.stringify(datam.ZAR);
  } else {
    var usdExchange = 1 / JSON.stringify(datam.usd);
    var arsExchange = 1 / JSON.stringify(datam.ars);
    var audExchange = 1 / JSON.stringify(datam.aud);
    var brlExchange = 1 / JSON.stringify(datam.brl);
    var cadExchange = 1 / JSON.stringify(datam.cad);
    var clpExchange = 1 / JSON.stringify(datam.clp);
    var copExchange = 1 / JSON.stringify(datam.cop);
    var mxnExchange = 1 / JSON.stringify(datam.mxn);
    var penExchange = 1 / JSON.stringify(datam.pen);
    var plnExchange = 1 / JSON.stringify(datam.pln);
    var rubExchange = 1 / JSON.stringify(datam.rub);
    var zarExchange = 1 / JSON.stringify(datam.zar);
  }

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
    if (hasScore === "-1" || hasScore === "" || hasScore === "0") {
      return null;
    }
    return (

      <div className="d-flex justify-content-left opencritic-container2">
    
        <CircularProgressbar
        className="score-text"
        value={Score}
        text={Score}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "rgba(0%, 0%, 0%, 0.5)",
          textColor: "#fff",
          pathColor: "#fc3e04",
          textSize: "35px",
          trailColor: "#600000",
        })}
      />

       
        {/*<span className="opencritic-logo" />*/}
        {/*<span className="opencritic-logo score-text">{Score}</span>*/}
      </div>
    );
  }

  function PercentOff(props) {
    return (
      <Badge pill bg="danger">
        {"-" + Discount}
      </Badge>
    );
  }

  function PesoPrice(props) {
    if (props.psorsw === "Switch") {
      var pricesobj = {
        Canada: CanadaPrice * cadExchange,
        Peru: PeruPrice * penExchange,
        Argentina: ArgentinaPrice * arsExchange * 1.64,
        Australia: AustraliaPrice * audExchange,
        Colombia: ColombiaPrice * copExchange,
        Southafrica: SouthafricaPrice * zarExchange,
        Brazil: BrazilPrice * brlExchange,
        Russia: RussiaPrice * rubExchange,
        Poland: PolandPrice * plnExchange,
        Chile: ChilePrice * clpExchange,
        Mexico: MexicoPrice * mxnExchange,
        US: SalePrice * usdExchange,
      };

      Object.entries(pricesobj).forEach(([k, v]) => {
        if (v === 0) delete pricesobj[k];
      });

      // console.log(pricesobj)

      //                 const entries = Object.entries(pricesobj).sort(([, a], [, b]) => a - b);

      // var rank1 = entries[0][0] + ": " + entries[0][1]
      // var rank2 = entries[1][0] + ": " + entries[1][1]
      // var rank3 = entries[2][0] + ": " + entries[2][1]

      //  console.log(rank1 + "\n" + rank2 + "\n" + rank3);

      var smallest = "";
      var smallestprice;
      for (var key in pricesobj) {
        if (smallest !== "" && pricesobj[key] < pricesobj[smallest]) {
          smallest = key;
          smallestprice = pricesobj[key];
        } else if (smallest === "") {
          smallest = key;
          smallestprice = pricesobj[key];
        }
      }
      // console.log("smallest---", smallest + "\n" + smallestprice);

      function SmallestFlag() {
        if (smallest === "US") {
          return (
            <span className="usregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Argentina") {
          return (
            <span className="arregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Australia") {
          return (
            <span className="auregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Brazil") {
          return (
            <span className="brregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Canada") {
          return (
            <span className="caregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Chile") {
          return (
            <span className="clregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Colombia") {
          return (
            <span className="coregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Mexico") {
          return (
            <span className="mxregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Peru") {
          return (
            <span className="peregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Poland") {
          return (
            <span className="plregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Russia") {
          return (
            <span className="ruregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else if (smallest === "Southafrica") {
          return (
            <span className="zaregion-logo" style={{ fontWeight: "bold" }}>
              {"₱" + Math.round(smallestprice)}
            </span>
          );
        } else {
          return null;
        }
      }

      return (
        <>
          <SmallestFlag />
        </>
      );
    }
    if (props.psorsw === "Playstation") {
      return (
        <span style={{ fontWeight: "light" }}>
          {"₱" + Math.round(props.saleprice * usdExchange)}
        </span>
      );
    }
    if (props.psorsw === "ogprice") {
      return (
        <span style={{ fontWeight: "light" }}>
          {"₱" + Math.round(props.saleprice * usdExchange)}
        </span>
      );
    }
  }

  function PesoPlusPrice(props) {
    if (props.psorsw === "Switch") {
      return null;
    }
    if (props.psorsw === "Playstation") {
      if (PlusPrice === 0) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
      } else {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            {"₱" + Math.round(PlusPrice * usdExchange)}
          </span>
        );
      }
    }
  }

  function PlatformBadge(props) {
    const platform = props.hasBadge;
    if (platform === "Switch") {
      return (
        <span className="img-responsive float-end nbadges nintendo"></span>
      );
    }
    if (platform === "Playstation") {
      return (
        <span className="img-responsive float-end pbadges playstation"></span>
      );
    }
  }

  return (
    <Col>
      <Link
        to={`/games/${Slug}`}
        className="linkto"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Card className="border-0">
          <LazyLoadImage
            effect="opacity"
            key={Image}
            className="card-img"
            src={Image}
            onError={(event) => {
              event.target.src = noimage;
              event.onerror = null;
            }}
            visibleByDefault={Image}
          />

          <Card.ImgOverlay className="card-img-overlay">
            <PlatformBadge hasBadge={Platform} />
            {/*<span className="img-responsive float-end nbadges nintendo"></span>*/}
            <OpenScore hasScore={Score} />
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title className="card-title">{Title}</Card.Title>
            <Card.Text className="card-text">
              <PercentOff />{" "}
              <strike>
                <PesoPrice psorsw="ogprice" saleprice={Price} />
              </strike>{" "}
              <PesoPrice
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
              />{" "}
              <PesoPlusPrice psorsw={Platform} pesoplus={PlusPrice} />{" "}
              <DaysLeft isExpired={SaleEnds} />
              {/*<PesoPrice />
            {" "+Genre}
*/}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Cards;
