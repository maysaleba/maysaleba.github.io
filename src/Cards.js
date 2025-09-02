import React, { useEffect } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import noimage from "./noimage.jpg";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Box } from "@mui/material";
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
  NorwayPrice,
  PolandPrice,
  NewZealandPrice,
  KoreaPrice,
  HongKongPrice,
  JapanPrice,
  MexicoPrice,
  ESRBRating,
  IsPS4,
  IsPS5
}) => {

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();


let hour = today.getHours();
today = yyyy + "-" + mm + "-" + dd;

  var theURL = "https://api.exchangerate.host/latest?base=PHP&v=" + today + "T" + hour;
  var theURL = "x";
  // var theURLa =
  //   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php.json";


  var theURLa =
    "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";

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
        // console.log(error);
        axios.get(theURLa).then((response) => {
          setDatam(response.data.quotes);
          setMakeswitch("2");
          // if using exchangerate.host
          // setDatam(response.data.php) // if using currency-api
        });
      });
  }, [theURL]);

  if (makeswitch === null) {
    var usdExchange = 1 / JSON.stringify(datam.usd);
    var arsExchange = 1 / JSON.stringify(datam.ars);
    var audExchange = 1 / JSON.stringify(datam.aud);
    var brlExchange = 1 / JSON.stringify(datam.brl);
    var cadExchange = 1 / JSON.stringify(datam.cad);
    var nzdExchange = 1 / JSON.stringify(datam.nzd);
    var copExchange = 1 / JSON.stringify(datam.cop);
    var mxnExchange = 1 / JSON.stringify(datam.mxn);
    var penExchange = 1 / JSON.stringify(datam.pen);
    var plnExchange = 1 / JSON.stringify(datam.pln);
    var nokExchange = 1 / JSON.stringify(datam.nok);
    var zarExchange = 1 / JSON.stringify(datam.zar);
    var sgdExchange = 1 / JSON.stringify(datam.sgd);
    var hkdExchange = 1 / JSON.stringify(datam.hkd);
    var trdExchange = 1 / JSON.stringify(datam.try);
    var jpyExchange = 1 / JSON.stringify(datam.jpy);
    var krwExchange = 1 / JSON.stringify(datam.krw);
  } else {
    var usdExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.USD);
    var arsExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.ARS);
    var audExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.AUD);
    var brlExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.BRL);
    var cadExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.CAD);
    var nzdExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.NZD);
    var copExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.COP);
    var mxnExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.MXN);
    var penExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.PEN);
    var plnExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.PLN);
    var nokExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.NOK);
    var zarExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.ZAR);
    var sgdExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.SGD);
    var hkdExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.HKD);
    var trdExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.TRY);
    var jpyExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.JPY);
    var krwExchange = JSON.stringify(datam.PHP) / JSON.stringify(datam.KRW);
  }

    // Is rate data loaded?
  const ratesReady = makeswitch === null ? !!datam?.usd : !!datam?.USD;

  // Safe PHP formatter (returns "" until rates are ready)
  const safePhp = (amt, rate) =>
    ratesReady && Number.isFinite(Number(amt)) && Number.isFinite(Number(rate))
      ? "₱" + Math.round(Number(amt) * Number(rate))
      : "";

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(SaleEnds);
  // const diffDays = Math.round((secondDate - firstDate) / oneDay);

  function DaysLeft(props) {

    // console.log(props.platform);


    const isExpired = props.isExpired;
    var diffDays = 0;

    if (props.platform === "Playstation"){
diffDays = Math.round((secondDate - firstDate) / oneDay);
    } else {

      diffDays = Math.round((secondDate - firstDate) / oneDay);
    }

    

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
<>


      <div className="d-flex justify-content-left float-end opencritic-container2">
    
        <CircularProgressbar
        className="score-text"
        value={Score}
        text={Score}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "rgba(0%, 0%, 0%, 0.5)",
          textColor: "#fff",
          pathColor: Score <= 49 ? "#80b06a" : (Score <= 74 ? "#ffcc33" : "#fc430a"),
          textSize: "35px",
          trailColor: Score <= 49 ? "#80b06a60" : (Score <= 74 ? "#ffcc3360" : "#fc430a60"),
        })}
      />
      </div>


</>
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
    if (!ratesReady) return null; // add this line
    if (props.psorsw === "Nintendo Switch" || props.psorsw === "Nintendo Switch 2") {
      var testBoolean;
      // console.log(props);
      if (ArgentinaPrice != 0) {
        if ((ArgentinaPrice * arsExchange) / usdExchange <= 10) {
          // console.log((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange)
          //console.log("less than 10")
          testBoolean = true;
        } else {
          //console.log((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange)
          //more than 10
          testBoolean = false;
        }
      }
      // var argentinaTax = Math.round(
      //   (testBoolean
      //     ? ArgentinaPrice * arsExchange * 1.59
      //     : ArgentinaPrice * arsExchange * 1.59) -
      //     ArgentinaPrice * arsExchange
      // );

      // var argentinaTaxAR = Math.round(
      //   (testBoolean
      //     ? ArgentinaPrice * 1.59
      //     : ArgentinaPrice * 1.59) -
      //     ArgentinaPrice
      // );

      var regionalityTax = ArgentinaPrice * arsExchange * 1.21 * ((1500 - (12100 * arsExchange))/ (12100 * arsExchange))

      var argentinaTax = Math.round(
        (testBoolean
          ? ArgentinaPrice * arsExchange * 1.21
          : ArgentinaPrice * arsExchange * 1.21) -
          ArgentinaPrice * arsExchange
      );


      var pricesobj = {
        Canada: CanadaPrice * cadExchange,
        Peru: PeruPrice * penExchange,
        Argentina: argentinaTax + regionalityTax + ArgentinaPrice * arsExchange,
        //Argentina: ArgentinaPrice * arsExchange * 1.64,
        Australia: AustraliaPrice * audExchange,
        Colombia: ColombiaPrice * copExchange,
        Southafrica: SouthafricaPrice * zarExchange,
        Brazil: BrazilPrice * brlExchange,
        Norway: NorwayPrice * nokExchange,
        Poland: PolandPrice * plnExchange,
        NewZealand: NewZealandPrice * nzdExchange,
        Mexico: MexicoPrice * mxnExchange,
        US: SalePrice * usdExchange,
        HongKong: HongKongPrice * hkdExchange,
        Japan: JapanPrice * jpyExchange,
        Korea: KoreaPrice * krwExchange
      };

      Object.entries(pricesobj).forEach(([k, v]) => {
        if (v === 0) delete pricesobj[k];
      });

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
  if (!ratesReady) return null; // add this line
  const regionClassMap = {
    US: "usregion-logo",
    Argentina: "arregion-logo",
    Australia: "auregion-logo",
    Brazil: "brregion-logo",
    Canada: "caregion-logo",
    NewZealand: "nzregion-logo",
    Colombia: "coregion-logo",
    Mexico: "mxregion-logo",
    Peru: "peregion-logo",
    Poland: "plregion-logo",
    Norway: "noregion-logo",
    Southafrica: "zaregion-logo",
    HongKong: "hkregion-logo",
    Korea: "krregion-logo",
    Japan: "jpregion-logo",
  };

  const className = regionClassMap[smallest];
  if (!className) return null;

  return (
    <span className={className} style={{ fontWeight: "bold" }}>
      {"₱" + Math.round(smallestprice)}
    </span>
  );
}


      return (
        <>
          <SmallestFlag />
        </>
      );
    }
    if (props.psorsw === "Playstation") {
          return (
        <span className="trregion-logo" style={{ fontWeight: "light" }}>
          {"₱" + Math.round(props.saleprice * trdExchange)}
        </span>
      );
        

    }


    if (props.psorsw === "ogprice") {

        if (props.platform === "Playstation"){
                      return (
        <span style={{ fontWeight: "light" }}>
          {"₱" + Math.round(props.saleprice * trdExchange)}
        </span>
      );

        } 


        else {
            return (
        <span style={{ fontWeight: "light" }}>
          {"₱" + Math.round(props.saleprice * usdExchange)}
        </span>
      );
        }

    }
  }

  function PesoPlusPrice(props) {
    if (props.psorsw === "Nintendo Switch" || props.psorsw === "Nintendo Switch 2") {
      return null;
    }
    if (props.psorsw === "Playstation") {
      if (props.esrbrating === "SGD") {
                    if (PlusPrice === 0) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
      } else if (PlusPrice === 999999) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            TRIAL
          </span>
        );
}
else if (PlusPrice === 202020) {
        return (
          <span className="eabadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
}
      else {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            {"₱" + Math.round(PlusPrice * sgdExchange)}
          </span>
        );
      }

      } else       if (props.esrbrating === "HKD") {
                    if (PlusPrice === 0) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
      } else if (PlusPrice === 999999) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            TRIAL
          </span>
        );
}
else if (PlusPrice === 202020) {
        return (
          <span className="eabadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
}
      else {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            {"₱" + Math.round(PlusPrice * hkdExchange)}
          </span>
        );
      }

      } else       if (props.esrbrating === "TRD") {
                    if (PlusPrice === 0) {
                      return null;
        // return (
        //   <span className="psplusbadge" style={{ fontWeight: "bold" }}>
        //     FREE
        //   </span>
        // );
      } else if (PlusPrice === 999999) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            TRIAL
          </span>
        );
}
else if (PlusPrice === 202020) {
        return (
          <span className="eabadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
}
      else {
        return null;
        // return (
        //   <span className="psplusbadge" style={{ fontWeight: "bold" }}>
        //     {"₱" + Math.round(PlusPrice * trdExchange)}
        //   </span>
        // );
      }

      } 

       else {
              if (PlusPrice === 0) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
      } else if (PlusPrice === 999999) {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            TRIAL
          </span>
        );
}
else if (PlusPrice === 202020) {
        return (
          <span className="eabadge" style={{ fontWeight: "bold" }}>
            FREE
          </span>
        );
}
      else {
        return (
          <span className="psplusbadge" style={{ fontWeight: "bold" }}>
            {"₱" + Math.round(PlusPrice * usdExchange)}
          </span>
        );
      }
      }
    }
  }

  function PlatformBadge(props) {
    const platform = props.hasBadge;
    if (platform === "Nintendo Switch" || platform === "Nintendo Switch 2") {

      if (props.esrbrating === "Individual" || props.esrbrating === "Bundle") {
      return (
        <> 
        <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
        <div className="d-flex justify-content float-start opencritic-container2">
        <Box style={{fontWeight: 'bold', borderRadius: 5, backgroundColor: "#fc3e04", marginTop: 3, marginLeft: 5, paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 5, fontSize: '0.7rem', textAlign: 'center', color: 'white'}}>
        DLC</Box>
      </div>
        </>
      );


      } else if (props.esrbrating === "ROM Bundle") {
      return (
        <>
        <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
        <div className="d-flex justify-content float-start opencritic-container2">
        <Box style={{fontWeight: 'bold', borderRadius: 5, backgroundColor: "#6f00cb", marginTop: 3, marginLeft: 5, paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 5, fontSize: '0.7rem', textAlign: 'center', color: 'white'}}>
        BUNDLE</Box>
      </div>
      </>
      );
      }
      else {
        return (
        <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
        )
      }
    }
    if (platform === "Playstation") {
        return (
        <span className="img-responsive pbadges playstation1"></span>
        )

    }
  }


function PlatformOverlay({ title, slug, isps4, isps5 }) {
  if (!slug) {
    console.error("Undefined slug found in record:", title);
    return null;
  }

  if (slug.includes("-switch-2")) {
    return <div className="additional-overlay">NSW2</div>;
  }

  if (slug.includes("-switch")) {
    return <div className="additional-overlay">NSW</div>;
  }

  if (isps4 === 1 && isps5 === 1) {
    return (
      <>
        <div className="additional-overlay">PS5</div>
        <div className="additional-overlay-right">PS4</div>
      </>
    );
  }

  if (isps4 === 1) {
    return <div className="additional-overlay">PS4</div>;
  }

  if (isps5 === 1) {
    return <div className="additional-overlay">PS5</div>;
  }

  return <div className="additional-overlay">NONE</div>;
}




  return (
    <Col>
      <Link
        to={`/games/${Slug}`}
        className="linkto"
        style={{ color: "black", textDecoration: "none" }}
      >
<Card className="border-0"> 

    {Slug.includes("switch-2") && (
       <div className="platform-top-badge-outside">
  <svg
    width="34"
    height="24"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    alt=""
    data-testid="NintendoSwitch2LogoOnlyIcon"
    size="34"
    color="currentColor"
  >
    <path
      d="M9.66879 4.54634H7.24725C5.67883 4.54634 4.40649 5.81867 4.40649 7.3871V12.7842C4.40649 14.3527 5.67883 15.625 7.24725 15.625H9.66879C9.71276 15.625 9.75087 15.5898 9.75087 15.5429V4.62842C9.75087 4.58445 9.71569 4.54634 9.66879 4.54634ZM8.85672 14.7309H7.24725C6.72835 14.7309 6.23877 14.5286 5.86938 14.1621C5.50293 13.7957 5.29771 13.3061 5.29771 12.7842V7.3871C5.29771 6.86526 5.5 6.37861 5.86645 6.00923C6.23291 5.64277 6.72249 5.43756 7.24432 5.43756H8.85379V14.7279L8.85672 14.7309ZM7.17396 6.83008C7.74856 6.83008 8.21469 7.29621 8.21469 7.87082C8.21469 8.44542 7.74856 8.91155 7.17396 8.91155C6.59936 8.91155 6.13323 8.44542 6.13323 7.87082C6.13323 7.29621 6.59936 6.83008 7.17396 6.83008ZM12.6444 4.54634H10.9294C10.8883 4.54634 10.8561 4.57859 10.8561 4.61963V15.5429C10.8561 15.5869 10.8913 15.625 10.9382 15.625H12.6415C14.2099 15.625 15.4822 14.3527 15.4822 12.7842V7.3871C15.4822 5.81867 14.2099 4.54634 12.6415 4.54634H12.6444ZM13.049 11.7582C12.4304 11.7582 11.9291 11.2569 11.9291 10.6383C11.9291 10.0197 12.4304 9.5184 13.049 9.5184C13.6675 9.5184 14.1689 10.0197 14.1689 10.6383C14.1689 11.2569 13.6675 11.7582 13.049 11.7582ZM17.3497 15.625V13.7224C17.5461 13.5611 18.2907 12.922 19.0764 12.2448C19.7829 11.635 20.4895 11.0253 21.2106 10.4331C21.753 9.98746 22.7849 9.1666 22.8172 8.36333C22.8553 7.41934 22.1869 6.80663 21.1843 6.80663C20.5891 6.80663 19.8885 7.13791 19.4634 7.4985C19.0383 7.85909 18.4959 8.32522 18.4959 8.32522L16.9275 6.62487C18.2585 5.13267 19.6891 4.3763 21.1813 4.3763C24.3592 4.29715 26.7573 7.8415 24.3387 10.6178C23.4621 11.5852 22.4654 12.4911 21.4422 13.2943H25.5934V15.625H17.3467H17.3497Z"
      fill="currentColor"
    />
  </svg>
</div>

    )}
 <div className={`card-img-wrapper ${Slug.includes("switch-2") ? "no-border-radius" : ""}`}>
    {/* Blurred background */}
    <img
      src={Image}
      alt=""
      className="card-img-background"
      onError={(event) => {
        event.target.src = noimage;
        event.onerror = null;
      }}
    />

    {/* Foreground image */}
    <LazyLoadImage
      effect="opacity"
      key={Image}
      className="card-img-foreground"
      src={Image}
      onError={(event) => {
        event.target.src = noimage;
        event.onerror = null;
      }}
      visibleByDefault={Image}
    />

    <Card.ImgOverlay>
      <PlatformBadge hasBadge={Platform} esrbrating={ESRBRating} slug={Slug}/>
      <OpenScore hasScore={Score} />
    </Card.ImgOverlay>

    <PlatformOverlay slug={Slug} isps4={IsPS4} isps5={IsPS5} title={Title}/>
  </div>

    <Card.Body>
        <Card.Title className="card-title">{Title.replace(/ *\([^)]*\) */g, "").replaceAll("Ã¢„Â™","™").replace("â„¢","™")}</Card.Title>
        <Card.Text className="card-text">
            <PercentOff />{" "}
            <strike>
                <PesoPrice psorsw="ogprice" saleprice={Price} esrbrating={ESRBRating} platform={Platform}/>
            </strike>{" "}
            <PesoPrice
                psorsw={Platform}
                esrbrating={ESRBRating}
                saleprice={SalePrice}
                canadaprice={CanadaPrice}
                peruprice={PeruPrice}
                argentinaprice={ArgentinaPrice}
                australiaprice={AustraliaPrice}
                colombiaprice={ColombiaPrice}
                southafricaprice={SouthafricaPrice}
                brazilprice={BrazilPrice}
                norwayprice={NorwayPrice}
                polandprice={PolandPrice}
                newzealandprice={NewZealandPrice}
                mexicoprice={MexicoPrice}
                hongkongprice={HongKongPrice}
                koreaprice={KoreaPrice}
                japanprice={JapanPrice}
            />{" "}
            <PesoPlusPrice psorsw={Platform} pesoplus={PlusPrice}  esrbrating={ESRBRating}/>{" "}
            <DaysLeft isExpired={SaleEnds} platform={Platform} />
        </Card.Text>
    </Card.Body>
</Card>
      </Link>
    </Col>
  );
};

export default Cards;
