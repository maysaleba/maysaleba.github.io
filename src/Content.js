import React, { useEffect } from "react";
import games1 from "./csvjson.json";
import gamesps from "./csvjsonus.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Box, Paper, Link, Container } from "@mui/material";
import styled from "styled-components";
import download from "./download.gif";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
// import GoogleAds from "./AdSense";
import {Adsense} from '@ctrl/react-adsense';
import axios from "axios";

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
let games = games1.concat(games2);

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
  // {100*JSON.stringify(datam.usd)}

  const matchGames = games.filter((game) => {
    return game.Slug === match.params.games;
  });

  // console.log("HELLO"+matchGames)

  function PesoPrice(props) {
    return "₱" + Math.round(props.props * usdExchange);
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
      } else {
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

  function ShopeeURL() {
    if (matchGames[0].platform === "Switch") {
      return (
        <tr className="item-table-best">
          <td>
            <a
              href="https://bit.ly/3tvQ3No"
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
              href="https://bit.ly/3tvQ3No"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 10 }}
            >
              Suggested <br /> Gift Card: <ShopeeCard />
            </a>
          </td>
          <td className="version">
            <a href="https://bit.ly/3tvQ3No" target="_blank" rel="noreferrer">
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
              href="https://bit.ly/2T5UXTK"
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
              href="https://bit.ly/2T5UXTK"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 10 }}
            >
              Suggested <br /> Gift Card: <ShopeeCard />
            </a>
          </td>
          <td className="version">
            <a href="https://bit.ly/2T5UXTK" target="_blank" rel="noreferrer">
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
            <span className="opencritic-logo">
              <span
                style={{
                  fontSize: 13,
                  color: "white",
                  borderRadius: 30,
                  backgroundColor: "#fc3e04",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {matchGames[0].SCORE}
              </span>
            </span>
          </span>
        </Link>
      );
    }
  }

  function HasHLTB(props) {
    if (props.props.platform !== "Switch") {
      return null;
    } else if (
      props.props.MainStory == 0 &&
      props.props.MainExtra == 0 &&
      props.props.Completionist == 0
    ) {
      return null;
    } else {
      return (
        <>
          <Link
            underline="none"
            hover="none"
            color="black"
            href="https://howlongtobeat.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Header
              style={{ backgroundColor: "white", fontWeight: "bold" }}
            >
              HOW LONG TO BEAT
              <span className="hltb-logo">
                <img src={download} />
              </span>
            </Card.Header>
          </Link>
          <Card.Body style={{ fontSize: 14 }}>
            <Row xs={1} sm={3}>
              <MainStory />
              <MainExtra />
              <Completionist />
            </Row>
          </Card.Body>
        </>
      );
    }
  }

  function MainStory() {
    if (matchGames[0].MainStory == 0 || matchGames[0].MainStory == null) {
      return null;
    } else {
      return (
        <Col style={{ paddingBottom: 10 }}>
          <span style={{ fontWeight: "bold" }}>Main Story:</span>{" "}
          {matchGames[0].MainStory + " Hours"}
        </Col>
      );
    }
  }

  function MainExtra() {
    if (matchGames[0].MainExtra == 0 || matchGames[0].MainExtra == null) {
      return null;
    } else {
      return (
        <Col style={{ paddingBottom: 10 }}>
          <span style={{ fontWeight: "bold" }}>Main+Extra:</span>{" "}
          {matchGames[0].MainExtra + " Hours"}
        </Col>
      );
    }
  }

  function Completionist() {
    if (
      matchGames[0].Completionist == 0 ||
      matchGames[0].Completionist == null
    ) {
      return null;
    } else {
      return (
        <Col style={{ paddingBottom: 10 }}>
          <span style={{ fontWeight: "bold" }}>Completionist:</span>{" "}
          {matchGames[0].Completionist + " Hours"}
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

  function PricesTable(props) {
    // console.log(props);
    if (props.psorsw === "Switch") {
      var pricesobj = {
        Canada: matchGames[0].CanadaPrice * cadExchange,
        Peru: matchGames[0].PeruPrice * penExchange,
        Argentina: matchGames[0].ArgentinaPrice * arsExchange * 1.43,
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
                      href="https://bit.ly/3tvQ3No"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">Shopee</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3EqxrTL"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">Lazada</span>
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
                          <span className="suggest-text">Codashop</span>
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
                      href="https://bit.ly/3tvQ3No"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">Shopee</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3EqxrTL"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">Lazada</span>
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
                          <span className="suggest-text">Codashop</span>
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
                      href="https://bit.ly/3tvQ3No"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">Shopee</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3EqxrTL"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">Lazada</span>
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
                          <span className="suggest-text">Codashop</span>
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
                      href="https://bit.ly/3tvQ3No"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="shopee-logo">
                          <span className="suggest-text">Shopee</span>
                        </span>
                      </div>
                    </a>
                    <a
                      className="nopaddingA"
                      href="https://bit.ly/3EqxrTL"
                      target="_blank"
                      rel="noreferrer"
                      // style={{ padding: 10 }}
                    >
                      <div className="ml-2 badge badge-danger">
                        <span style={{ fontSize: 13 }} className="lazada-logo">
                          <span className="suggest-text">Lazada</span>
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
                          <span className="suggest-text">Codashop</span>
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
          style={{ margin: "auto", padding: 10 }}
        >
          <table className="table table-align-middle item-price-table">
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
          </table>
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
          <div className="text-center m-3 p-auto" style={{ paddingBottom: 15 }}>
            <img
              alt=""
              style={{
                height: "auto",
                maxWidth: "50%",
                borderRadius: "5px",
              }}
              src={matchGames[0].Image}
            />
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
              {matchGames[0].Title.toUpperCase()}
              <HasOpenCritic props={matchGames[0].SCORE} />
              <span
                className="pb-1"
                style={{
                  fontSize: 12,
                  paddingRight: 20,
                  padding: "0 0.75rem ",
                }}
              >
                <br />
                SALE ENDS: {DateConvert(matchGames[0].SaleEnds).toUpperCase()}
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
                <Adsense
                  className="example_responsive_1"
                 style={{ display: 'block' }}
  client="ca-pub-4543556906953539"
  slot="1687469656"
   format="fluid"
/>
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
                    <span style={{ fontWeight: "bold" }}>Release Date:</span>{" "}
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
                    {matchGames[0].genre}
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
