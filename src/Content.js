import React, { useEffect } from "react";
import games1 from "./csvjson.json";
import gamesps from "./csvjsonus.json";
import exgamesps from "./csvjsonusex.json"
import sggamesps from "./csvjsonsg.json";
import gamespsu from "./csvjsonusu.json";
import hkgamesps from "./csvjsonhk.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Box, Paper, Link, Container } from "@mui/material";
import styled from "styled-components";
import download from "./download.gif";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import GoogleAds from "./AdSense";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

var today = new Date();
// var lastd = new Date(today.setDate(today.getDate()+1));
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

let games2 = gamesps.filter((review) => review.SaleEnds > today);
let games3 = sggamesps.filter((review) => review.SaleEnds > today);
let games4 = hkgamesps.filter((review) => review.SaleEnds > today);
let games5 = exgamesps.filter((review) => review.SaleEnds > today);
let games6 = gamespsu.filter((review) => review.SaleEnds > today);
let games = games1.concat(games2).concat(games3).concat(games4).concat(games5).concat(games6);

const Content = ({ makeswitch, datam, search, setSearch, match }) => {
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
    var sgdExchange = 1 / JSON.stringify(datam.SGD);
    var hkdExchange = 1 / JSON.stringify(datam.HKD);
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
    var sgdExchange = 1 / JSON.stringify(datam.sgd);
    var hkdExchange = 1 / JSON.stringify(datam.hkd);
  }
  // {100*JSON.stringify(datam.usd)}

  const matchGames = games.filter((game) => {
    return game.Slug === match.params.games;
  });

  // console.log("HELLO"+matchGames)

  function PesoPrice(props) {
    if (matchGames[0].ESRBRating === "SGD"){
        return "₱" + Math.round(props.props * sgdExchange);  
    } else if (matchGames[0].ESRBRating === "HKD"){
    return "₱" + Math.round(props.props * hkdExchange);
  } else {
return "₱" + Math.round(props.props * usdExchange);
  }
}

  function ReverseDesc(props) {
    if (matchGames[0].platform === "Playstation") {
      let input = props.props;
      let newText = input
        .split("<br />")
        .map((item, i) => <p key={i}>{item}</p>);
      return newText;
    } else {
      let input = props.props;
      let newText = input
        .split(/(?=•)/)
        .map((item, i) => <p key={i}>{item}</p>);
      return newText;
    }
  }

  function WhichStore() {
    if (matchGames[0].platform === "Playstation") {
      return (
        <div style={{ marginLeft: "10px" }} className="logonin psstore">
          <img src={download} />
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: "10px" }} className="logonin eshop">
          <img src={download} />
        </div>
      );
    }
  }

  function DateConvert(s) {
    var s = s.split(/\D/),
      dt = new Date(s[0], s[1] - 1, s[2]);
    return dt.toLocaleString("en-CA", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function PesoPlusPrice() {
    if (matchGames[0].platform === "Switch") {
      return null;
    }
    if (matchGames[0].platform === "Playstation") {
      if (matchGames[0].PlusPrice == 0) {
        return (
          <>
            <span className="psplusbadge">FREE</span>
            <br />
          </>
        );
      } 
      else if (matchGames[0].PlusPrice == 999999) {
       return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      }
            else if (matchGames[0].PlusPrice == 202020) {
       return (
          <>
            <span className="eabadge">INCLUDED</span>
            <br />
          </>
        );
      }
      else {
        return (
          <>
            <span className="psplusbadge">
              {"₱" + Math.round(matchGames[0].PlusPrice * usdExchange)}
            </span>
            <br />
          </>
        );
      }
    }
  }

    function HkPlusPrice() {
    if (matchGames[0].platform === "Switch") {
      return null;
    }
    if (matchGames[0].platform === "Playstation") {
      if (matchGames[0].PlusPrice == 0) {
        return (
          <>
            <span className="psplusbadge">FREE</span>
            <br />
          </>
        );
      } 
      else if (matchGames[0].PlusPrice == 999999) {
       return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      }
        else if (matchGames[0].PlusPrice == 202020) {
       return (
          <>
            <span className="eabadge">INCLUDED</span>
            <br />
          </>
        );
      }
      else {
        return (
          <>
            <span className="psplusbadge">
              {"₱" + Math.round(matchGames[0].PlusPrice * hkdExchange)}
            </span>
            <br />
          </>
        );
      }
    }
  }

    function SgPlusPrice() {
    if (matchGames[0].platform === "Switch") {
      return null;
    }
    if (matchGames[0].platform === "Playstation") {
      if (matchGames[0].PlusPrice == 0) {
        return (
          <>
            <span className="psplusbadge">FREE</span>
            <br />
          </>
        );
      } 
      else if (matchGames[0].PlusPrice == 999999) {
       return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      }
        else if (matchGames[0].PlusPrice == 202020) {
       return (
          <>
            <span className="eabadge">INCLUDED</span>
            <br />
          </>
        );
      }
      else {
        return (
          <>
            <span className="psplusbadge">
              {"₱" + Math.round(matchGames[0].PlusPrice * sgdExchange)}
            </span>
            <br />
          </>
        );
      }
    }
  }

  function ShopeeCard() {
    if (matchGames[0].platform === "Switch") {
      if (parseFloat(matchGames[0].SalePrice) <= 10) {
        return <span>$10</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 20) {
        return <span>$20</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 35) {
        return <span>$35</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 50) {
        return <span>$50</span>;
      } else {
        return <span>$50</span>;
      }
    } else {
      if (parseFloat(matchGames[0].SalePrice) <= 10) {
        return <span>$10</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 20) {
        return <span>$20</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 25) {
        return <span>$25</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 50) {
        return <span>$50</span>;
      } else {
        return <span>$50</span>;
      }
    }
  }


function HkShopeeCard(){
       if (parseFloat(matchGames[0].HongKongPrice) <= 80) {
        return <span>HK$80</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 200) {
        return <span>HK$200</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 300) {
        return <span>HK$300</span>;
      } else {
        return <span>HK$500</span>;
      }
}

function SgShopeeCard(){
       if (parseFloat(matchGames[0].SingaporePrice) <= 20) {
        return <span>SG$20</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 30) {
        return <span>SG$30</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 50) {
        return <span>SG$50</span>;
      } else {
        return <span>SG$80</span>;
      }
}


  function ShopeeURL() {
    if (matchGames[0].platform === "Switch") {
      return (
        <tr className="item-table-best">
          <td>
            <a
              href="https://shope.ee/1L1Rd1cdsH"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 0 }}
            >
              <div style={{ marginLeft: "10px" }} className="logonin shopee">
                <img src={download} />
              </div>
            </a>
          </td>
          <td className="version">
            <a
              href="https://shope.ee/1L1Rd1cdsH"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 10 }}
            >
              Suggested <br /> Gift Card: <ShopeeCard />
            </a>
          </td>
          <td className="version">
            <a href="https://shope.ee/1L1Rd1cdsH" target="_blank" rel="noreferrer">
              <GiftCardVar />
            </a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className="item-table-best">
          <td>
            <a
              href="https://shope.ee/4zujzcSWci"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 0 }}
            >
              <div style={{ marginLeft: "10px" }} className="logonin shopee">
                <img src={download} />
              </div>
            </a>
          </td>
          <td className="version">
            <a
              href="https://shope.ee/4zujzcSWci"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 10 }}
            >
              Suggested <br /> Gift Card: <ShopeeCard />
            </a>
          </td>
          <td className="version">
            <a href="https://shope.ee/4zujzcSWci" target="_blank" rel="noreferrer">
              <GiftCardVar />
            </a>
          </td>
        </tr>
      );
    }
  }

  function GiftCardVar() {
    if (matchGames[0].platform === "Switch") {
      if (parseFloat(matchGames[0].SalePrice) <= 10) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱500</span>
            <span className="ml-2 badge badge-danger">-17%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 20) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱1000</span>
            <span className="ml-2 badge badge-danger">-9%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 35) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱1750</span>
            <span className="ml-2 badge badge-danger">-8%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 50) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱2450</span>
            <span className="ml-2 badge badge-danger">-2%</span>
          </div>
        );
      } else {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱2450</span>
            <span className="ml-2 badge badge-danger">-2%</span>
          </div>
        );
      }
    } else {
      if (parseFloat(matchGames[0].SalePrice) <= 10) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱500</span>
            <span className="ml-2 badge badge-danger">-17%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 20) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱1000</span>
            <span className="ml-2 badge badge-danger">-17%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 25) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱1240</span>
            <span className="ml-2 badge badge-danger">-11%</span>
          </div>
        );
      } else if (parseFloat(matchGames[0].SalePrice) <= 50) {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱2465</span>
            <span className="ml-2 badge badge-danger">-9%</span>
          </div>
        );
      } else {
        return (
          <div className="btn btn-block btn-secondary">
            <span>₱2465</span>
            <span className="ml-2 badge badge-danger">-9%</span>
          </div>
        );
      }
    }
  }

  function WhichPlatform() {
    if (matchGames[0].IsPS4 === 1 && matchGames[0].IsPS5 === 1) {
      return (
        <>
          <span
            style={{
              fontSize: 12,
              borderRadius: 30,
              border: "1px solid black",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            PS4
          </span>{" "}
          <span
            style={{
              fontSize: 12,
              borderRadius: 30,
              border: "1px solid black",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            PS5
          </span>
        </>
      );
    } else if (matchGames[0].IsPS4 === 1 && matchGames[0].IsPS5 === 0) {
      return (
        <span
          style={{
            fontSize: 12,
            borderRadius: 30,
            border: "1px solid black",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          PS4
        </span>
      );
    } else if (matchGames[0].IsPS4 === 0 && matchGames[0].IsPS5 === 1) {
      return (
        <span
          style={{
            fontSize: 12,
            borderRadius: 30,
            border: "1px solid black",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          PS5
        </span>
      );
    } else {
      return (
        <span
          style={{
            fontSize: 12,
            borderRadius: 30,
            border: "1px solid black",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          NSW
        </span>
      );
    }
  }



  function HasOpenCritic(props) {

    if (props.props === "" || props.props === "-1" || props.props === "0") {
      return null;
    } else {
      return (
        <Link
          underline="none"
          hover="none"
          color="black"
          href={matchGames[0].OpenCriticURL}
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ color: "black" }}>
            {" "}
            <span className="opencritic-logo2">
            <div className="opencritic-container3" style={{width: 30, height: 30 }}>
            
        <CircularProgressbar



        value={matchGames[0].SCORE}
        text={matchGames[0].SCORE}
        // background
        backgroundPadding={0}
        styles={buildStyles({
          backgroundColor: "rgba(0%, 0%, 0%, 0.15)",
          textColor: 'black',
          pathColor: matchGames[0].SCORE <= 49 ? "#ff0000" : (matchGames[0].SCORE <= 74 ? "#ffcc33" : "#66cc33"),
          textSize: "2.6rem",
          trailColor: matchGames[0].SCORE <= 49 ? "#ff000060" : (matchGames[0].SCORE <= 74 ? "#ffcc3360" : "#66cc3360"),
        })}
      />
   
      </div>

            </span>
          </span>
        </Link>
      );
    }
  }

  function HasHLTB(props) {
  {
      return (
        <>
          <Link
            underline="none"
            hover="none"
            color="black"
            href={"https://howlongtobeat.com"+matchGames[0].LowestPrice}
            target="_blank"
            rel="noreferrer"
          >
            <Card.Header
              style={{ backgroundColor: "white", fontWeight: "bold" }}
            >
              HOW LONG TO BEAT
               <img style={{paddingRight: '5px'}} src={download} /><AccessTimeIcon/>
{/*              <span className="hltb-logo">
                <img src={download} />
              </span>*/}
            </Card.Header>
          </Link>
          <Card.Body style={{ fontSize: 14, margin: 'auto'}}>
            <div style={{columnRule: '4px double #ff00ff'}}>
            <Row xs={3} sm={3} >
              <MainStory />
              <MainExtra />
              <Completionist />
            </Row>
            </div>
          </Card.Body>
        </>
      );
    }
  }

  function MainStory() {
    if (matchGames[0].MainStory == 0 || matchGames[0].MainStory == null) {
      return ( 
        <Col className="hltb-container" style={{borderTopLeftRadius:5, backgroundColor: '#3a6db5', paddingBottom: 10, textAlign: 'center' }}>
        <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}} >MAIN STORY</span>{" "}
          <span style={{ fontWeight: "bold", fontSize: 22 }}>
          -</span>
          </div>
        </Col>
        )
    } else {
      return (
        <Col className="hltb-container" style={{borderTopLeftRadius:5, backgroundColor: '#3a6db5', paddingBottom: 10, textAlign: 'center' }}>
        <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}} >MAIN STORY</span>{" "}
          <span style={{ fontWeight: "bold", fontSize: 22 }}>
          {matchGames[0].MainStory + "h"}</span>
          </div>
        </Col>
      );
    }
  }

    function PlatformBadge(props) {
    const platform = props.hasBadge;
    const esrbrating = props.esrbrating;
    if (platform === "Switch") {
        if (props.esrbrating === "Individual" || props.esrbrating === "Bundle") {
      return (
        <>
        <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
      <div className="d-flex justify-content float-start opencritic-container2">
        <Box style={{fontWeight: 'bold', borderRadius: 5, backgroundColor: "#fc3e04", marginTop: 3, marginLeft: 5, paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 5, fontSize: '0.65rem', textAlign: 'center', color: 'white'}}>
        DLC</Box>
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
        <span className="img-responsive pbadges playstation"></span>
      );
    }
  }


  function MainExtra() {
    if (matchGames[0].MainExtra == 0 || matchGames[0].MainExtra == null) {
      return (
       <Col className="hltb-container" style={{backgroundColor: '#5650a1', paddingBottom: 10, textAlign: 'center' }}>
       <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}}  >MS+EXTRA</span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
          -</span>
          </div>
        </Col>
        )
    } else {
      return (
       <Col className="hltb-container" style={{backgroundColor: '#5650a1', paddingBottom: 10, textAlign: 'center' }}>
       <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}}  >MS+EXTRA</span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
          {matchGames[0].MainExtra + "h"}</span>
          </div>
        </Col>
      );
    }
  }

  function Completionist() {
    if (
      matchGames[0].Completionist == 0 ||
      matchGames[0].Completionist == null
    ) {
      return (
         <Col className="hltb-container" style={{borderTopRightRadius:5, backgroundColor: '#824985', paddingBottom: 10, textAlign: 'center' }}>
        <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}} >COMPLETE</span>{" "}
           <span style={{ fontWeight: "bold", fontSize: 22 }}>
          -</span>
          </div>
        </Col>
        );
    } else {
      return (
         <Col className="hltb-container" style={{borderTopRightRadius:5, backgroundColor: '#824985', paddingBottom: 10, textAlign: 'center' }}>
        <div style={{ textAlign: 'center',  display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{borderBottom: "1px solid #fff", fontSize: 12}} >COMPLETE</span>{" "}
           <span style={{ fontWeight: "bold", fontSize: 22 }}>
          {matchGames[0].Completionist + "h"}</span>
          </div>
        </Col>
      );
    }
  }

  // matchGames[0].platform === "Switch" && (

  function YoutubeTrailer() {
    if (matchGames[0].Trailer === "" || matchGames[0].Trailer === undefined) {
      return null;
    } else {
      var youtubeid = matchGames[0].Trailer.split("=", 2);

      return (
        <div style={{ paddingBottom: 10, fontSize: 14 }}>
          {/* <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            TRAILER
          </Card.Header>*/}

          <YoutubeEmbed embedId={youtubeid[1]} />
        </div>
      );
    }
  }

  function PsPrices() {
    if (matchGames[0].ESRBRating == "SGD"){
return (
              <>
        <tr className="item-table-best">
                <td className="version">
                  <span>
                             <div style={{ marginLeft: "1rem" }} className="sgregion-logo">
            Singapore
          </div>
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <SgPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * sgdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <SgShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/6ziEPIJLma"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3TzZMjd"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3KPfOSq"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr></>
  )

    } else  if (matchGames[0].ESRBRating == "HKD"){
return (
              <>
        <tr className="item-table-best">
                <td className="version">
                  <span>
                             <div style={{ marginLeft: "1rem" }} className="hkregion-logo">
            Hong Kong
          </div>
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <HkPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * hkdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <HkShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/6ziEPIJLma"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3TzZMjd"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3KPfOSq"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr></>
  )
}



     else {

    return(
      <>
        <tr className="item-table-best">
                <td className="version">
                  <span>
                             <div style={{ marginLeft: "1rem" }} className="usregion-logo">
            United States
          </div>
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * usdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <ShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/6ziEPIJLma"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3TzZMjd"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3KPfOSq"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr></>)

    }


      }

  function PricesTable(props) {


 
    if (props.psorsw === "Switch") {

    var testBoolean;
    // console.log(props);
    if (matchGames[0].ArgentinaPrice != 0){
     if ((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange <= 10){
       // console.log((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange)
        //console.log("less than 10")
        testBoolean = true;
             }
             else {
        //console.log((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange)
        //more than 10
        testBoolean = false;
             }

    }
      var argentinaTax = Math.round((testBoolean ? matchGames[0].ArgentinaPrice * arsExchange * 1.74 : matchGames[0].ArgentinaPrice * arsExchange * 1.53) - matchGames[0].ArgentinaPrice * arsExchange)
      var pricesobj = {
        Canada: matchGames[0].CanadaPrice * cadExchange,
        Peru: matchGames[0].PeruPrice * penExchange,
        Argentina: matchGames[0].ArgentinaPrice * arsExchange,
        Australia: matchGames[0].AustraliaPrice * audExchange,
        Colombia: matchGames[0].ColombiaPrice * copExchange,
        Southafrica: matchGames[0].SouthafricaPrice * zarExchange,
        Brazil: matchGames[0].BrazilPrice * brlExchange,
        Russia: matchGames[0].RussiaPrice * rubExchange,
        Poland: matchGames[0].PolandPrice * plnExchange,
        Chile: matchGames[0].ChilePrice * clpExchange,
        Mexico: matchGames[0].MexicoPrice * mxnExchange,
        US: matchGames[0].SalePrice * usdExchange,
      };

      Object.entries(pricesobj).forEach(([k, v]) => {
        if (v === 0) delete pricesobj[k];
      });

      // console.log(pricesobj);
      const entries = Object.entries(pricesobj).sort(([, a], [, b]) => a - b);

      function InfoTax () {
    if (entries[0][0] == "Argentina" || entries[1][0] == "Argentina" || entries[2][0] == "Argentina")
//     {
      return (                     
     <>  <Box style={{borderRadius: 5, backgroundColor: "#ffc4c4", marginBottom: 10, padding: 8, fontSize: 12, textAlign: 'center'}}>
     Note: +Tax may be charged if buying from Argentina. Use <a  className="infotax" href="https://www.maya.ph/app/registration?invite=JX6YO2XL4781">MAYA Virtual Card</a>  for tax-free purchase.
                    </Box>
</>
        );
      else {
        return null;
      }
      
    // }
      
}

      function USRank() {
        return (
          <div style={{ marginLeft: "10px" }} className="usregion-logo">
            United States
          </div>
        );
      }

      function Rank1(props) {
        if (props.rank1country === "US") {
          return (
            <div style={{ marginLeft: "10px" }} className="usregion-logo">
              United States
            </div>
          );
        } else if (props.rank1country === "Canada") {
          return (
            <div style={{ marginLeft: "10px" }} className="caregion-logo">
              Canada
            </div>
          );
        } else if (props.rank1country === "Peru") {
          return (
            <div style={{ marginLeft: "10px" }} className="peregion-logo">
              Peru
            </div>
          );
        } else if (props.rank1country === "Argentina") {
          return (
            <div style={{ marginLeft: "10px" }} className="arregion-logo">
              Argentina
                            <br/>
              <div style={{fontSize: 11, fontWeight: 'Bold', color: 'red'}}> + ₱{argentinaTax} TAX</div>
            </div>

          );
        } else if (props.rank1country === "Colombia") {
          return (
            <div style={{ marginLeft: "10px" }} className="coregion-logo">
              Colombia
            </div>
          );
        } else if (props.rank1country === "Southafrica") {
          return (
            <div style={{ marginLeft: "10px" }} className="zaregion-logo">
              South Africa
            </div>
          );
        } else if (props.rank1country === "Brazil") {
          return (
            <div style={{ marginLeft: "10px" }} className="brregion-logo">
              Brazil
            </div>
          );
        } else if (props.rank1country === "Russia") {
          return (
            <div style={{ marginLeft: "10px" }} className="ruregion-logo">
              Russia
            </div>
          );
        } else if (props.rank1country === "Poland") {
          return (
            <div style={{ marginLeft: "10px" }} className="plregion-logo">
              Poland
            </div>
          );
        } else if (props.rank1country === "Chile") {
          return (
            <div style={{ marginLeft: "10px" }} className="clregion-logo">
              Chile
            </div>
          );
        } else if (props.rank1country === "Mexico") {
          return (
            <div style={{ marginLeft: "10px" }} className="mxregion-logo">
              Mexico
            </div>
          );
        } else if (props.rank1country === "Australia") {
          return (
            <div style={{ marginLeft: "10px" }} className="auregion-logo">
              Australia
            </div>
          );
        }
      }

      function Rank2(props) {
        if (props.rank2country === "US") {
          return (
            <div style={{ marginLeft: "10px" }} className="usregion-logo">
              United States
            </div>
          );
        } else if (props.rank2country === "Canada") {
          return (
            <div style={{ marginLeft: "10px" }} className="caregion-logo">
              Canada
            </div>
          );
        } else if (props.rank2country === "Peru") {
          return (
            <div style={{ marginLeft: "10px" }} className="peregion-logo">
              Peru
            </div>
          );
        } else if (props.rank2country === "Argentina") {
          return (
            <div style={{ marginLeft: "10px" }} className="arregion-logo">
              Argentina
              <br/>
               <div style={{fontSize: 11, fontWeight: 'Bold', color: 'red'}}> + ₱{argentinaTax} TAX</div>
            </div>
          );
        } else if (props.rank2country === "Colombia") {
          return (
            <div style={{ marginLeft: "10px" }} className="coregion-logo">
              Colombia
            </div>
          );
        } else if (props.rank2country === "Southafrica") {
          return (
            <div style={{ marginLeft: "10px" }} className="zaregion-logo">
              South Africa
            </div>
          );
        } else if (props.rank2country === "Brazil") {
          return (
            <div style={{ marginLeft: "10px" }} className="brregion-logo">
              Brazil
            </div>
          );
        } else if (props.rank2country === "Russia") {
          return (
            <div style={{ marginLeft: "10px" }} className="ruregion-logo">
              Russia
            </div>
          );
        } else if (props.rank2country === "Poland") {
          return (
            <div style={{ marginLeft: "10px" }} className="plregion-logo">
              Poland
            </div>
          );
        } else if (props.rank2country === "Chile") {
          return (
            <div style={{ marginLeft: "10px" }} className="clregion-logo">
              Chile
            </div>
          );
        } else if (props.rank2country === "Mexico") {
          return (
            <div style={{ marginLeft: "10px" }} className="mxregion-logo">
              Mexico
            </div>
          );
        } else if (props.rank2country === "Australia") {
          return (
            <div style={{ marginLeft: "10px" }} className="auregion-logo">
              Australia
            </div>
          );
        }
      }

      function Rank3(props) {
        if (props.rank3country === "US") {
          return (
            <div style={{ marginLeft: "10px" }} className="usregion-logo">
              United States
            </div>
          );
        } else if (props.rank3country === "Canada") {
          return (
            <div style={{ marginLeft: "10px" }} className="caregion-logo">
              Canada
            </div>
          );
        } else if (props.rank3country === "Peru") {
          return (
            <div style={{ marginLeft: "10px" }} className="peregion-logo">
              Peru
            </div>
          );
        } else if (props.rank3country === "Argentina") {
          return (
            <div style={{ marginLeft: "10px" }} className="arregion-logo">
              Argentina
                            <br/>
               <div style={{fontSize: 11, fontWeight: 'Bold', color: 'red'}}> + ₱{argentinaTax} TAX</div>
            </div>
          );
        } else if (props.rank3country === "Colombia") {
          return (
            <div style={{ marginLeft: "10px" }} className="coregion-logo">
              Colombia
            </div>
          );
        } else if (props.rank3country === "Southafrica") {
          return (
            <div style={{ marginLeft: "10px" }} className="zaregion-logo">
              South Africa
            </div>
          );
        } else if (props.rank3country === "Brazil") {
          return (
            <div style={{ marginLeft: "10px" }} className="brregion-logo">
              Brazil
            </div>
          );
        } else if (props.rank3country === "Russia") {
          return (
            <div style={{ marginLeft: "10px" }} className="ruregion-logo">
              Russia
            </div>
          );
        } else if (props.rank3country === "Poland") {
          return (
            <div style={{ marginLeft: "10px" }} className="plregion-logo">
              Poland
            </div>
          );
        } else if (props.rank3country === "Chile") {
          return (
            <div style={{ marginLeft: "10px" }} className="clregion-logo">
              Chile
            </div>
          );
        } else if (props.rank3country === "Mexico") {
          return (
            <div style={{ marginLeft: "10px" }} className="mxregion-logo">
              Mexico
            </div>
          );
        } else if (props.rank3country === "Australia") {
          return (
            <div style={{ marginLeft: "10px" }} className="auregion-logo">
              Australia
            </div>
          );
        }
      }

      // var rank1country = entries[0][0]
      // var rank1price = entries[0][1]
      // var rank2country = entries[1][0]
      // var rank2price = entries[1][1]
      // var rank3country = entries[2][0]
      // var rank3price = entries[2][1]


      


      function RankRows() {
        if (entries.length === 1) {
          return (
            <>
              <tr className="item-table-best">
                <td className="version">
                  <span className="fire-logo">
                    <USRank />
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * usdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <ShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/1L1Rd1cdsH"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3NyTZGp"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3pxXLXT"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
            </>
          );
        } else if (entries.length === 2) {
          var rank1country = entries[0][0];
          var rank1price = entries[0][1];
          return (
            <>
              <tr className="item-table-best">
                <td className="version">
                  <span className="fire-logo">
                    <USRank />
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * usdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <ShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/1L1Rd1cdsH"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3NyTZGp"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3pxXLXT"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="gold-medal-logo">
                    <Rank1 rank1country={rank1country}/>
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank1price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
            </>
          );
        } else if (entries.length === 3) {
          var rank1country = entries[0][0];
          var rank1price = entries[0][1];
          var rank2country = entries[1][0];
          var rank2price = entries[1][1];
          return (
            <>
              <tr className="item-table-best">
                <td className="version">
                  <span className="fire-logo">
                    <USRank />
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * usdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <ShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/1L1Rd1cdsH"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3NyTZGp"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3pxXLXT"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="gold-medal-logo">
                    <Rank1 rank1country={rank1country} />
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank1price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="silver-medal-logo">
                    <Rank2 rank2country={rank2country} />
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank2price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
            </>
          );
        } else if (entries.length > 3) {
          var rank1country = entries[0][0];
          var rank1price = entries[0][1];
          var rank2country = entries[1][0];
          var rank2price = entries[1][1];
          var rank3country = entries[2][0];
          var rank3price = entries[2][1];
          return (
            <>
              <tr className="item-table-best">
                <td className="version">
                  <span className="fire-logo">
                    <USRank />
                  </span>
                </td>
                <td className="version"></td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(matchGames[0].SalePrice * usdExchange)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-left">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexWrap: "wrap",
                      fontSize: 14,
                    }}
                  >
                    <span className="nopaddingA">
                      {" "}
                      <div className="ml-2 badge badge-info">
                        {" "}
                        Suggested Gift Card: <ShopeeCard />
                      </div>
                    </span>{" "}
                  </div>
                </td>
                <td></td>
                <td className="item-note text-right">
                  <div
                    className="vendors"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="nopaddingA"
                      href="https://shope.ee/1L1Rd1cdsH"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">SHOPEE</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3NyTZGp"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">LAZADA</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3pxXLXT"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="coda-logo">
                          <span className="suggest-text">CODASHOP</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="gold-medal-logo">
                    <Rank1 rank1country={rank1country} />
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank1price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="silver-medal-logo">
                    <Rank2 rank2country={rank2country} />
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank2price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="version">
                  <span className="bronze-medal-logo">
                    <Rank3 rank3country={rank3country} />
                  </span>
                </td>
                <td></td>
                <td className="version">
                  <a
                    href="https://www.youtube.com/watch?v=iIHNfDa8-1o"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      {"₱" + Math.round(rank3price)}
                      <span className="ml-2 badge badge-danger">
                        <strike>
                          <PesoPrice props={matchGames[0].Price} />
                        </strike>
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
            </>
          );
        }
      }




      return (
        <div
          className="price-container"
          style={{ margin: "auto", paddingTop: 10 }}
        >
        <InfoTax/>

          <table className="table table-align-middle item-price-table">
            <tbody>
              <RankRows />
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div
          className="price-container"
          style={{ margin: "auto", paddingTop: 10 }}
        >
                  <table className="table table-align-middle item-price-table">
            <tbody>
              <PsPrices />
            </tbody>
          </table>
      




        {/*  <table className="table table-align-middle item-price-table">
            <tbody>
              <tr className="item-table-best has-notes">
                <td>
                  <a
                    href={matchGames[0].URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: 0 }}
                  >
                    <WhichStore />
                  </a>
                </td>
                <td className="version">
                  <a
                    href={matchGames[0].URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: 10 }}
                  >
                    <span className="usregion-logo">Digital Game</span>
                  </a>
                </td>
                <td className="version">
                  <a href={matchGames[0].URL} target="_blank" rel="noreferrer">
                    <div className="btn btn-block btn-secondary">
                      <PesoPlusPrice />
                      <PesoPrice props={matchGames[0].SalePrice} />
                      <span className="ml-2 badge badge-danger">
                        -{matchGames[0].PercentOff}
                      </span>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="item-table-best">
                <td className="item-note text-right" colSpan="3">
                  <a
                    className="pb-1"
                    href={matchGames[0].URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 12,
                      paddingRight: 20,
                      padding: "0 0.75rem ",
                    }}
                  >
                    Retail Price{" "}
                    <strike>
                      <PesoPrice props={matchGames[0].Price} />
                    </strike>
                  </a>
                </td>
              </tr>
              <ShopeeURL />
            </tbody>
          </table>*/}
        </div>
      );
    }
  }

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

  // console.log(matchGames[0].description.split('\n'));

  function HasMatch() {
    if (matchGames[0] !== undefined) {
      const Background = styled.div`
        --blur-radius: 20px;
        background-image: url(${matchGames[0].Image});
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
      return (
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <title>
              {matchGames[0].Title} on {matchGames[0].platform} - May Sale Ba?
            </title>
            <meta
              name="description"
              content={
                "Compare and find the cheapest price to buy " +
                matchGames[0].Title +
                " for the " +
                matchGames[0].platform +
                " in Philippine Peso"
              }
            />
            <meta property="og:image" content={matchGames[0].Image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={matchGames[0].URL} />
            <meta
              property="og:title"
              content={
                matchGames[0].Title +
                " on " +
                matchGames[0].platform +
                " - May Sale Ba?"
              }
            />
            <meta
              property="og:description"
              content={
                "Compare and find the cheapest price to buy " +
                matchGames[0].Title +
                " for the " +
                matchGames[0].platform +
                " in Philippine Peso"
              }
            />
          </Helmet>
          <BackgroundContainer>
            <Background />
          </BackgroundContainer>
          {/*    <NaviBar />*/}


          <div className="m-3 p-auto" style={{ paddingBottom: 15 }}>

            <Card className="border-0" style={{ borderRadius: '7px', maxWidth: '236px', width: '50%',
               marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Img
              alt=""
              style={{

              }}
              src={matchGames[0].Image}
            />



                      <Card.ImgOverlay className="card-img-overlay">
                      
            <PlatformBadge hasBadge={matchGames[0].platform} esrbrating={matchGames[0].ESRBRating}/>
   
           
          </Card.ImgOverlay>
          </Card>
</div>

          <Paper elevation={2} className="content-container">
            {/*<Card className="content-container-gameinfo">*/}
            <Card.Header
              style={{
                fontSize: 18,
                backgroundColor: "white",
                fontWeight: "bold",
              }}
            >
              {matchGames[0].Title.toUpperCase().replace(/ *\([^)]*\) */g, "")}
              <HasOpenCritic props={matchGames[0].SCORE} />
             
             
                <br />
             
                <span style={{fontSize: '0.75rem'}}>
                Sale Ends: {DateConvert(matchGames[0].SaleEnds)}
              </span>
        
           
            </Card.Header>
            <PricesTable psorsw={matchGames[0].platform} />
            <div style={{ fontSize: 14 }}>
              <HasHLTB props={matchGames[0]} />

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ paddingBottom: 16 }}
              >
                <GoogleAds />
              </Box>

              <Card.Header
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                INFORMATION
              </Card.Header>
              <Card.Body style={{ fontSize: 14 }}>
                <Row xs={1} sm={2}>
                  <Col style={{ paddingBottom: 10 }}>
                    <span style={{ fontWeight: "bold" }}>Publisher:</span>{" "}
                    {matchGames[0].Publisher}
                  </Col>
                  <Col style={{ paddingBottom: 10 }}>
                    <span style={{ fontWeight: "bold" }}>Date Added:</span>{" "}
                    {DateConvert(matchGames[0].ReleaseDate)}
                  </Col>
                </Row>
                <Row xs={1} sm={2}>
                  <Col style={{ paddingBottom: 10 }}>
                    <span style={{ fontWeight: "bold" }}>Platform: </span>{" "}
                    <WhichPlatform />
                  </Col>
                  <Col style={{ paddingBottom: 10 }}>
                    <span style={{ fontWeight: "bold" }}>Sale Started: </span>{" "}
                    {DateConvert(matchGames[0].SaleStarted)}
                  </Col>
                </Row>
                <Row xs={1} sm={2}>
                  <Col style={{ paddingBottom: 10 }}>
                    <span style={{ fontWeight: "bold" }}>Genre:</span>{" "}
                  {matchGames[0].genre.replaceAll(',', ', ')}
                  </Col>
                  <Col style={{ paddingBottom: 10 }}></Col>
                </Row>
              </Card.Body>
            </div>

            <YoutubeTrailer />

            <div style={{ fontSize: 14 }}>
              <Card.Header
                style={{backgroundColor: "white", fontWeight: "bold" }}
              >
                DESCRIPTION
              </Card.Header>
              <Card.Body>
                <ReverseDesc props={matchGames[0].description} />
              </Card.Body>
            </div>
          </Paper>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }

  return <HasMatch />;
};

export default Content;
