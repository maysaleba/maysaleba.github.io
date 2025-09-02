import React, { useEffect } from "react";
import games1 from "./csvjson.json";
import games2 from "./csvjsontr.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Box, Paper, Link, Container } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import download from "./download.gif";
import seagmlogo from "./seagm.png";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import GoogleAds from "./AdSense";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import noimage from "./noimage.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "600px", md: "600px" },
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  p: 4,
  borderRadius: "8px", // Optional: Make the modal corners rounded
};

const modalBackdropStyle = {
  backdropFilter: "blur(8px)", // Apply a blur effect
  backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: Add a semi-transparent black overlay
};

const YoutubeEmbed = ({ embedId, platform }) => {
  embedId = embedId.replace("http", "https");
  if (platform == "Playstation") {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`${embedId}`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  } else {
    embedId = embedId.split("=", 2);
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId[1]}`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
};

var today = new Date();
// var lastd = new Date(today.setDate(today.getDate()+1));
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

let games = games1.concat(games2);

const Content = ({ makeswitch, datam, search, setSearch, match }) => {
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
  // {100*JSON.stringify(datam.usd)}

  const matchGames = games.filter((game) => {
    return game.Slug === match.params.games;
  });

  // console.log("HELLO"+matchGames)

  function PesoPrice(props) {
    if (matchGames[0].platform === "Playstation") {
      return "₱" + Math.round(props.props);
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

  function OrigPrice() {
    if (matchGames[0].NumberofPlayers !== undefined) {
      // console.log("SHOPEE!!"+matchGames[0].NumberofPlayers)
      return (
        <div
          style={{
            marginTop: -10,
            marginBottom: 15,
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          <InfoIcon sx={{ color: "white" }} fontSize="small" />{" "}
          <a
            className="origprice"
            href={matchGames[0].NumberofPlayers}
            target="_blank"
            rel="noreferrer"
          >
            CHECK RETAIL PRICE
          </a>
        </div>
      );
    } else {
      return (
        <div
          style={{
            marginTop: -10,
            marginBottom: 15,
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          <InfoIcon sx={{ color: "white" }} fontSize="small" />{" "}
          <a
            className="origprice"
            href="https://shope.ee/5ALD8alAHo"
            target="_blank"
            rel="noreferrer"
          >
            CHECK RETAIL PRICE
          </a>
        </div>
      );
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

  function SaleEnds() {
    return (
      <span style={{ fontSize: "0.75rem" }}>
        SALE ENDS: {DateConvert(matchGames[0].SaleEnds).toUpperCase()}
      </span>
    );
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
    if (matchGames[0].platform === "Nintendo Switch" || matchGames[0].platform === "Nintendo Switch 2") {
      return null;
    }
    if (matchGames[0].platform === "Playstation") {
      if (matchGames[0].PlusPrice == 0) {
        return null;
        // return (
        //   <>
        //     <span className="psplusbadge">FREE</span>
        //     <br />
        //   </>
        // );
      } else if (matchGames[0].PlusPrice == 999999) {
        return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      } else if (matchGames[0].PlusPrice == 202020) {
        return null;
        // return (
        //   <>
        //     <span className="eabadge">FREE</span>
        //     <br />
        //   </>
        // );
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

  function HkPlusPrice() {
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
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
      } else if (matchGames[0].PlusPrice == 999999) {
        return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      } else if (matchGames[0].PlusPrice == 202020) {
        return (
          <>
            <span className="eabadge">FREE</span>
            <br />
          </>
        );
      } else {
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
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
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
      } else if (matchGames[0].PlusPrice == 999999) {
        return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      } else if (matchGames[0].PlusPrice == 202020) {
        return (
          <>
            <span className="eabadge">FREE</span>
            <br />
          </>
        );
      } else {
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

  function TrPlusPrice() {
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
      return null;
    }
    if (matchGames[0].platform === "Playstation") {
      if (matchGames[0].PlusPrice == 0) {
        return null;
        // return (
        //   <>
        //     <span className="psplusbadge">FREE</span>
        //     <br />
        //   </>
        // );
      } else if (matchGames[0].PlusPrice == 999999) {
        return (
          <>
            <span className="psplusbadge">TRIAL</span>
            <br />
          </>
        );
      } else if (matchGames[0].PlusPrice == 202020) {
        return null;
        // return (
        //   <>
        //     <span className="eabadge">FREE</span>
        //     <br />
        //   </>
        // );
      } else {
        return (
          <>
            <span className="psplusbadge">
              {"₱" + Math.round(matchGames[0].PlusPrice * trdExchange)}
            </span>
            <br />
          </>
        );
      }
    }
  }

  function ShopeeCard() {
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
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
      if (parseFloat(matchGames[0].SalePrice) <= 100) {
        return <span>P100</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 250) {
        return <span>P250</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 500) {
        return <span>P500</span>;
      } else if (parseFloat(matchGames[0].SalePrice) <= 1000) {
        return <span>P1000</span>;
      } else {
        return <span>P2200</span>;
      }
    }
  }

  function HkShopeeCard() {
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

  function SgShopeeCard() {
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
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
      return (
        <tr className="item-table-best">
          <td>
            <a
              href="https://shope.ee/LNhVslxzC"
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
              href="https://shope.ee/LNhVslxzC"
              target="_blank"
              rel="noreferrer"
              style={{ padding: 10 }}
            >
              Suggested <br /> Gift Card: <ShopeeCard />
            </a>
          </td>
          <td className="version">
            <a
              href="https://shope.ee/LNhVslxzC"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="https://shope.ee/4zujzcSWci"
              target="_blank"
              rel="noreferrer"
            >
              <GiftCardVar />
            </a>
          </td>
        </tr>
      );
    }
  }

  function GiftCardVar() {
    if (matchGames[0].platform === "Nintendo Switch" ||
  matchGames[0].platform === "Nintendo Switch 2") {
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
  const game = matchGames[0];
  const slug = game.Slug;

  const badgeStyle = {
    fontSize: 12,
    borderRadius: 30,
    border: "1px solid black",
    paddingLeft: "10px",
    paddingRight: "10px",
  };


  if (slug?.includes("-switch-2")) {
    return <span style={badgeStyle}>Nintendo Switch 2</span>;
  }

  if (slug?.includes("-switch")) {
    return <span style={badgeStyle}>Nintendo Switch</span>;
  }

  if (game.IsPS4 === 1 && game.IsPS5 === 1) {
    return (
      <>
        <span style={badgeStyle}>Playstation 5</span>{" "}
        <span style={badgeStyle}>Playstation 4</span>
      </>
    );
  }

  if (game.IsPS4 === 1) {
    return <span style={badgeStyle}>Playstation 4</span>;
  }

  if (game.IsPS5 === 1) {
    return <span style={badgeStyle}>Playstation 5</span>;
  }

  return <span style={badgeStyle}>UNKNOWN</span>;
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
              <div
                className="opencritic-container3"
                style={{ width: 30, height: 30 }}
              >
                <CircularProgressbar
                  value={matchGames[0].SCORE}
                  text={matchGames[0].SCORE}
                  // background
                  backgroundPadding={0}
                  styles={buildStyles({
                    backgroundColor: "rgba(0%, 0%, 0%, 0.15)",
                    textColor: "black",
                    pathColor:
                      matchGames[0].SCORE <= 49
                        ? "#80b06a"
                        : matchGames[0].SCORE <= 74
                        ? "#ffcc33"
                        : "#fc430a",
                    textSize: "2.6rem",
                    trailColor:
                      matchGames[0].SCORE <= 49
                        ? "#80b06a60"
                        : matchGames[0].SCORE <= 74
                        ? "#ffcc3360"
                        : "#fc430a60",
                  })}
                />
              </div>
            </span>
          </span>
        </Link>
      );
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

  function HasHLTB(props) {
    {
      if (matchGames[0].LowestPrice !== undefined) {
        return (
          <>
            <Link
              underline="none"
              hover="none"
              color="black"
              href={"https://howlongtobeat.com" + matchGames[0].LowestPrice}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Header
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                HOW LONG TO BEAT
                <img style={{ paddingRight: "5px" }} src={download} />
                <AccessTimeIcon />
                {/*              <span className="hltb-logo">
                <img src={download} />
              </span>*/}
              </Card.Header>
              <Card.Body style={{ fontSize: 14, margin: "auto" }}>
                <div style={{ columnRule: "4px double #ff00ff" }}>
                  <Row xs={3} sm={3}>
                    <MainStory />
                    <MainExtra />
                    <Completionist />
                  </Row>
                </div>
              </Card.Body>
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link
              underline="none"
              hover="none"
              color="black"
              href={"https://howlongtobeat.com"}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Header
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                HOW LONG TO BEAT
                <img style={{ paddingRight: "5px" }} src={download} />
                <AccessTimeIcon />
                {/*              <span className="hltb-logo">
                <img src={download} />
              </span>*/}
              </Card.Header>
              <Card.Body style={{ fontSize: 14, margin: "auto" }}>
                <div style={{ columnRule: "4px double #ff00ff" }}>
                  <Row xs={3} sm={3}>
                    <MainStory />
                    <MainExtra />
                    <Completionist />
                  </Row>
                </div>
              </Card.Body>
            </Link>
          </>
        );
      }
    }
  }

  function MainStory() {
    if (matchGames[0].MainStory == 0 || matchGames[0].MainStory == null) {
      return (
        <Col
          className="hltb-container"
          style={{
            borderTopLeftRadius: 5,
            backgroundColor: "#3a6db5",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              MAIN STORY
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>-</span>
          </div>
        </Col>
      );
    } else {
      return (
        <Col
          className="hltb-container"
          style={{
            borderTopLeftRadius: 5,
            backgroundColor: "#3a6db5",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              MAIN STORY
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {matchGames[0].MainStory + "h"}
            </span>
          </div>
        </Col>
      );
    }
  }

  function PlatformBadge(props) {
    const platform = props.hasBadge;
    const esrbrating = props.esrbrating;
    if (platform === "Nintendo Switch" || platform === "Nintendo Switch 2") {
      if (props.esrbrating === "Individual" || props.esrbrating === "Bundle") {
        return (
          <>
            <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
            <div className="d-flex justify-content float-start opencritic-container2">
              <Box
                style={{
                  fontWeight: "bold",
                  borderRadius: 5,
                  backgroundColor: "#fc3e04",
                  marginTop: 3,
                  marginLeft: 5,
                  paddingTop: 1,
                  paddingBottom: 1,
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: "0.65rem",
                  textAlign: "center",
                  color: "white",
                }}
              >
                DLC
              </Box>
            </div>
          </>
        );
      } else if (props.esrbrating === "ROM Bundle") {
        return (
          <>
            <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
            <div className="d-flex justify-content float-start opencritic-container2">
              <Box
                style={{
                  fontWeight: "bold",
                  borderRadius: 5,
                  backgroundColor: "#6f00cb",
                  marginTop: 3,
                  marginLeft: 5,
                  paddingTop: 1,
                  paddingBottom: 1,
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: "0.65rem",
                  textAlign: "center",
                  color: "white",
                }}
              >
                BUNDLE
              </Box>
            </div>
          </>
        );
      } else {
        return (
          <span className="d-flex justify-content float-start opencritic-container2 img-responsive nbadges nintendo"></span>
        );
      }
    }
    if (platform === "Playstation") {
      return <span className="img-responsive pbadges playstation1"></span>;
    }
  }

  function MainExtra() {
    if (matchGames[0].MainExtra == 0 || matchGames[0].MainExtra == null) {
      return (
        <Col
          className="hltb-container"
          style={{
            backgroundColor: "#5650a1",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              MS+EXTRA
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>-</span>
          </div>
        </Col>
      );
    } else {
      return (
        <Col
          className="hltb-container"
          style={{
            backgroundColor: "#5650a1",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              MS+EXTRA
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {matchGames[0].MainExtra + "h"}
            </span>
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
        <Col
          className="hltb-container"
          style={{
            borderTopRightRadius: 5,
            backgroundColor: "#824985",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              COMPLETE
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>-</span>
          </div>
        </Col>
      );
    } else {
      return (
        <Col
          className="hltb-container"
          style={{
            borderTopRightRadius: 5,
            backgroundColor: "#824985",
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ borderBottom: "1px solid #fff", fontSize: 12 }}>
              COMPLETE
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: 22 }}>
              {matchGames[0].Completionist + "h"}
            </span>
          </div>
        </Col>
      );
    }
  }

  // matchGames[0].platform === "Nintendo Switch" && (

  function YoutubeTrailer() {
    if (matchGames[0].Trailer === "" || matchGames[0].Trailer === undefined) {
      return null;
    } else {
      var youtubeid = matchGames[0].Trailer;
      // console.log(youtubeid);
      return (
        <div style={{ paddingBottom: 10, fontSize: 14 }}>
          {/* <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            TRAILER
          </Card.Header>*/}

          <YoutubeEmbed embedId={youtubeid} platform={matchGames[0].platform} />
        </div>
      );
    }
  }

  function PsPrices() {
    if (matchGames[0].ESRBRating == "SGD") {
      return (
        <>
          <div
            className="price-container"
            style={{ margin: "auto", paddingTop: 10 }}
          >
            <table className="table table-align-middle item-price-table">
              <tbody>
                <tr className="item-table-best">
                  <td className="version">
                    <span>
                      <div
                        style={{ marginLeft: "1rem" }}
                        className="sgregion-logo"
                      >
                        Singapore
                      </div>
                    </span>
                  </td>
                  <td className="version"></td>
                  <td className="version">
                    <a
                      href={matchGames[0].URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn btn-block btn-secondary">
                        <SgPlusPrice />
                        {"₱" +
                          Math.round(matchGames[0].SalePrice * sgdExchange)}
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
                        href="https://shope.ee/9UcGiCZ13R"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="shopee-logo"
                          >
                            <span className="suggest-text">SHOPEE</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invol.co/clkjvxw"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="lazada-logo"
                          >
                            <span className="suggest-text">LAZADA</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invl.io/clkjvy4"
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
              </tbody>
            </table>
          </div>
        </>
      );
    } else if (matchGames[0].ESRBRating == "HKD") {
      return (
        <>
          <div
            className="price-container"
            style={{ margin: "auto", paddingTop: 10 }}
          >
            <table className="table table-align-middle item-price-table">
              <tbody>
                <tr className="item-table-best">
                  <td className="version">
                    <span>
                      <div
                        style={{ marginLeft: "1rem" }}
                        className="hkregion-logo"
                      >
                        Hong Kong
                      </div>
                    </span>
                  </td>
                  <td className="version"></td>
                  <td className="version">
                    <a
                      href={matchGames[0].URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn btn-block btn-secondary">
                        <HkPlusPrice />
                        {"₱" +
                          Math.round(matchGames[0].SalePrice * hkdExchange)}
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
                        href="https://shope.ee/9UcGiCZ13R"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="shopee-logo"
                          >
                            <span className="suggest-text">SHOPEE</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invol.co/clkjvxw"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="lazada-logo"
                          >
                            <span className="suggest-text">LAZADA</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invl.io/clkjvy4"
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
              </tbody>
            </table>
          </div>
        </>
      );
    } else if (matchGames[0].ESRBRating == "TRD") {
      return (
        <>
          <div
            className="price-container"
            style={{ margin: "auto", paddingTop: 10 }}
          >
            <>
              {" "}
              <Box
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ffc4c4",
                  marginBottom: 10,
                  padding: 8,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Top Up Turkey PSN credits via  <a className="infotax" href="https://invl.me/clmq49s">SEAGM</a> or purchase from <a className="infotax" href="https://discord.gg/regionality">
                  Regionality with a service fee
                </a>
              </Box>
            </>

            <table className="table table-align-middle item-price-table">
              <tbody>
                <tr className="item-table-best">
                  <td className="version">
                    <span>
                      <div
                        style={{ marginLeft: "1rem" }}
                        className="trregion-logo"
                      >
                        Turkey
                        <div>₺ {matchGames[0].SalePrice}</div>
                      </div> 

                    </span>

                  </td>
                  <td className="version"></td>
                  <td className="version">
                    <a
                      href={matchGames[0].URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn btn-block btn-secondary">
                       <div className="price-container-in">
                        <span className="price">
                        <TrPlusPrice />
                        {"₱" +
                          Math.round(matchGames[0].SalePrice * trdExchange)}
                        <span className="ml-2 badge badge-danger">
                          <strike>
                            <PesoPrice
                              props={matchGames[0].Price * trdExchange}
                            />
                          </strike>
                        </span>
                        </span>
                         <a
                          href="https://invl.me/clmq49s"
                          target="_blank"
                          rel="noreferrer"
                          className="no-style-link"
                          onClick={(event) => event.stopPropagation()} // Prevent modal from opening
                        >
                          <img src={seagmlogo} className="seagm-logo" />
                        </a>
                        </div>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="price-container"
            style={{ margin: "auto", paddingTop: 10 }}
          >
            <table className="table table-align-middle item-price-table">
              <tbody>
                <tr className="item-table-best">
                  <td className="version">
                    <span>
                      <div
                        style={{ marginLeft: "1rem" }}
                        className="phregion-logo"
                      >
                        Philippines
                      </div>
                    </span>
                  </td>
                  <td className="version"></td>
                  <td className="version">
                    <a
                      href={matchGames[0].URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn btn-block btn-secondary">
                        {"₱" + Math.round(matchGames[0].SalePrice)}
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
                        href="https://shope.ee/9UcGiCZ13R"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="shopee-logo"
                          >
                            <span className="suggest-text">SHOPEE</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invol.co/clkjvxw"
                        target="_blank"
                        rel="noreferrer"
                        // style={{ padding: 10 }}
                      >
                        <div className="ml-2 badge badge-danger">
                          <span
                            style={{ fontSize: 13 }}
                            className="lazada-logo"
                          >
                            <span className="suggest-text">LAZADA</span>
                          </span>
                        </div>
                      </a>
                      <a
                        className="nopaddingA"
                        href="https://invl.io/clkjvy4"
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
              </tbody>
            </table>
          </div>
        </>
      );
    }
  }

  function PricesTable(props) {
    if (props.psorsw === "Nintendo Switch" ||
  props.psorsw === "Nintendo Switch 2") {
      var testBoolean;
      // console.log(props);
      if (matchGames[0].ArgentinaPrice != 0) {
        if ((matchGames[0].ArgentinaPrice * arsExchange) / usdExchange <= 10) {
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
      //     ? matchGames[0].ArgentinaPrice * arsExchange * 1.59
      //     : matchGames[0].ArgentinaPrice * arsExchange * 1.59) -
      //     matchGames[0].ArgentinaPrice * arsExchange
      // );

      // var argentinaTaxAR = Math.round(
      //   (testBoolean
      //     ? matchGames[0].ArgentinaPrice * 1.59
      //     : matchGames[0].ArgentinaPrice * 1.59) -
      //     matchGames[0].ArgentinaPrice
      // );

      var regionalityTax =
        matchGames[0].ArgentinaPrice *
        arsExchange *
        1.21 *
        ((1500 - 12100 * arsExchange) / (12100 * arsExchange));
      // console.log("regionality" + regionalityTax)

      var argentinaTax = Math.round(
        (testBoolean
          ? matchGames[0].ArgentinaPrice * arsExchange * 1.21
          : matchGames[0].ArgentinaPrice * arsExchange * 1.21) -
          matchGames[0].ArgentinaPrice * arsExchange
      );

      //       var argentinaTaxAR = Math.round(
      //   (testBoolean
      //     ? matchGames[0].ArgentinaPrice * 1.74
      //     : matchGames[0].ArgentinaPrice * 1.53) -
      //     matchGames[0].ArgentinaPrice
      // );

      //1.63 if equal to or less than 10 USD
      //1.59 if greater than 10 USD

      var pricesobj = {
        Canada: matchGames[0].CanadaPrice * cadExchange,
        Peru: matchGames[0].PeruPrice * penExchange,
        Argentina:
          argentinaTax +
          regionalityTax +
          matchGames[0].ArgentinaPrice * arsExchange,
        // Argentina: matchGames[0].ArgentinaPrice * arsExchange,
        Australia: matchGames[0].AustraliaPrice * audExchange,
        Colombia: matchGames[0].ColombiaPrice * copExchange,
        "South Africa": matchGames[0].SouthafricaPrice * zarExchange,
        Brazil: matchGames[0].BrazilPrice * brlExchange,
        Norway: matchGames[0].NorwayPrice * nokExchange,
        Poland: matchGames[0].PolandPrice * plnExchange,
        "New Zealand": matchGames[0].NewZealandPrice * nzdExchange,
        Mexico: matchGames[0].MexicoPrice * mxnExchange,
        US: matchGames[0].SalePrice * usdExchange,
        "Hong Kong": matchGames[0].HongKongPrice * hkdExchange,
        Korea: matchGames[0].KoreaPrice * krwExchange,
        Japan: matchGames[0].JapanPrice * jpyExchange,
      };

      for (const [k, v] of Object.entries(pricesobj)) {
        if (!Number.isFinite(v) || v <= 0) {
          delete pricesobj[k]; // drops 0, NaN, undefined, "" (=> NaN), negatives
        }
      }

      // console.log(pricesobj);
      // console.log(zarExchange)
      // console.log(plnExchange)
      const entries = Object.entries(pricesobj).sort(([, a], [, b]) => a - b);
      var artag = 0;

      function InfoTax() {
        entries.slice(0, 3).forEach((element) => {
          if (element[0] === "Argentina") {
            artag = 1;
          }
        });

        if (artag == 1)
          //     {
          return (
            <>
              {" "}
              <Box
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ffc4c4",
                  marginBottom: 10,
                  padding: 8,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                You can only buy from Argentina via {" "}
                <a className="infotax" href="https://maysaleba.com/pasabuy">
                  Pasabuy
                </a>
                . Argentina Price is based on 10K ARS top up, inclusive of 21% tax and service fee.
                {/*
 Note: Argentina eShop only accepts payment from Argentina issued cards. Use {" "}
                <a
                  className="infotax"
                  href="https://my.nintendo.com/about_gold_point?lang=en-AR"
                >
                  Gold Points
                </a> to buy{" "}*/}
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
            <br />
            <div style={{ fontSize: 11, fontWeight: "", color: "#000000" }}>
              {" "}
              {/*+ ₱{argentinaTax} TAX fc430a*/}
              {"$ " + Math.round(matchGames[0].SalePrice).toString()}
            </div>
          </div>
        );
      }

      function CountryInfo({ name, price, currency, className, style }) {
        // Convert the price to a number and format it with thousands separator
        const formattedPrice = price ? Number(price).toLocaleString() : null;

        return (
          <div style={{ marginLeft: "10px" }} className={className}>
            {name}
            {formattedPrice && currency && (
              <>
                <br />
                <div style={style}>
                  {currency} {formattedPrice}
                </div>
              </>
            )}
          </div>
        );
      }

      const countryData = {
        US: {
          name: "United States",
          price: Math.round(matchGames[0].SalePrice).toString(),
          currency: "$",
          className: "usregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Canada: {
          name: "Canada",
          price: Math.round(matchGames[0].CanadaPrice).toString(),
          currency: "C$",
          className: "caregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Peru: {
          name: "Peru",
          price: Math.round(matchGames[0].PeruPrice).toString(),
          currency: "S/",
          className: "peregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Argentina: {
          name: "Argentina",
          price: Math.round(matchGames[0].ArgentinaPrice)
            .toString()
            .replace(".", ","),
          currency: "AR$",
          className: "arregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Colombia: {
          name: "Colombia",
          price: Math.round(matchGames[0].ColombiaPrice).toString(),
          currency: "Col$",
          className: "coregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        "South Africa": {
          name: "South Africa",
          price: Math.round(matchGames[0].SouthafricaPrice).toString(),
          currency: "R",
          className: "zaregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Brazil: {
          name: "Brazil",
          price: Math.round(matchGames[0].BrazilPrice)
            .toString()
            .replace(".", ","),
          currency: "R$",
          className: "brregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Norway: {
          name: "Norway",
          price: Math.round(matchGames[0].NorwayPrice)
            .toString()
            .replace(".", ","),
          currency: "kr",
          className: "noregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Poland: {
          name: "Poland",
          price: Math.round(matchGames[0].PolandPrice).toString(),
          currency: "zł",
          className: "plregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        "New Zealand": {
          name: "New Zealand",
          price: Math.round(matchGames[0].NewZealandPrice).toString(),
          currency: "NZ$",
          className: "nzregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Mexico: {
          name: "Mexico",
          price: Math.round(matchGames[0].MexicoPrice).toString(),
          currency: "MX$",
          className: "mxregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        Australia: {
          name: "Australia",
          price: Math.round(matchGames[0].AustraliaPrice).toString(),
          currency: "A$",
          className: "auregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        "Hong Kong": {
          name: "Hong Kong",
          price: Math.round(matchGames[0].HongKongPrice).toString(),
          currency: "HK$",
          className: "hkregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        "Korea": {
          name: "Korea",
          price: Math.round(matchGames[0].KoreaPrice).toString(),
          currency: "₩",
          className: "krregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
        "Japan": {
          name: "Japan",
          price: Math.round(matchGames[0].JapanPrice).toString(),
          currency: "¥",
          className: "jpregion-logo",
          style: { fontSize: 11, fontWeight: "", color: "#000000" },
        },
      };

      function Rank1(props) {
        const countryInfo = countryData[props.rank1country];

        if (countryInfo) {
          return <CountryInfo {...countryInfo} />;
        }

        return null; // Default case if no country matches
      }

      function Rank2(props) {
        const countryInfo = countryData[props.rank2country];

        if (countryInfo) {
          return <CountryInfo {...countryInfo} />;
        }

        return null; // Default case if no country matches
      }

      function Rank3(props) {
        const countryInfo = countryData[props.rank3country];

        if (countryInfo) {
          return <CountryInfo {...countryInfo} />;
        }

        return null; // Default case if no country matches
      }

      function Rank4(props) {
        const countryInfo = countryData[props.rank4country];

        if (countryInfo) {
          return <CountryInfo {...countryInfo} />;
        }

        return null; // Default case if no country matches
      }

      function Rank5(props) {
        const countryInfo = countryData[props.rank5country];

        if (countryInfo) {
          return <CountryInfo {...countryInfo} />;
        }

        return null; // Default case if no country matches
      }

      const countryURLs = {
        "United Kingdom": "https://invl.io/clm3oku",
        Australia: "https://invl.io/clm3okz",
        Europe: "https://invl.io/clm3ol2",
        "Hong Kong": "https://invl.io/clm3ol6",
        Canada: "https://invl.io/clm3ol8",
        Mexico: "https://invl.io/clm3ola",
        Switzerland: "https://invl.io/clm3olb",
        Poland: "https://invl.io/clm3old",
        "Korea": "https://invl.io/clm3ole",
        US: "https://invl.io/clm3oli",
        Japan: "https://invl.io/clm3olj",
        Denmark: "https://invl.io/clm3oll",
        Sweden: "https://invl.io/clm3olo",
        Brazil: "https://invl.io/clm3olp",
        Norway: "https://invl.io/clm3olq",
        Peru: "",
        Argentina: "",
        Colombia: "",
        "South Africa": "",
        "New Zealand": "",
      };

      function RankRows() {
        const [open, setOpen] = React.useState(false);
        const [modalText, setModalText] = React.useState(""); // State to hold the modal text
        const [modalCountry, setModalCountry] = React.useState(""); // State to hold the country

                // NEW:
        const [expanded, setExpanded] = React.useState(false);
        const hasToggle = entries.length > 3;
        const visibleEntries = expanded || !hasToggle ? entries : entries.slice(0, 3);
        const top3 = entries.slice(0, 3).map(([c]) => c);

        const handleOpen = (event, country) => {
          event.preventDefault(); // Prevent the default behavior of the <a> tag
          setModalCountry(country); // Set the country for the modal
          setModalText(getModalTextForCountry(country)); // Set modal text based on country
          setOpen(true);
        };

        const handleClose = () => setOpen(false);

const getModalTextForCountry = (country) => {
  // Define country groups with shared descriptions

  const countryUrl = countryURLs[country] || ""; // Get the URL or fallback to an empty string
  const countryGroups = {
    "Canada & Poland & Mexico & Australia & Norway": `
      <ol>
      <li> Set up an account in the <b>${country}</b> eShop
      <ul>
        <li><a href="https://accounts.nintendo.com/profile/edit" target="_blank" style="color: #fc430a; font-weight: bold;">Change your eshop account country</a> to <b>${country}</b></li>
        <li>You can also <a href="https://accounts.nintendo.com/register" target="_blank" style="color: #fc430a; font-weight: bold;">create a new Nintendo account</a></li>
        <li><a href="https://www.youtube.com/watch?v=iIHNfDa8-1o" target="_blank" style="color: #fc430a; font-weight: bold;">Watch video guide</a></li>
      </ul>
      <li> Open the eShop on your Nintendo Switch and search for your game</li>
      <li> Proceed to Purchase</li>
      <ul>
      <li>Use a compatible debit or credit card (Visa/Mastercard) or virtual cards from Maya, GoTyme, and GrabPay.</li>
      <li>You can also purchase a <b>Nintendo eShop gift card</b> valid in <b>${country}</b> from the link(s) below: </li>
      <ul>
      <li><a href="${countryUrl}" target="_blank" style="color: #fc430a; font-weight: bold;">SEAGM</a></li>
      </ul>
      </ul>
      </ol>
    `,
    "Peru & Colombia & South Africa & New Zealand": `
      <ol>
      <li> Set up an account in the <b>${country}</b> eShop
      <ul>
        <li><a href="https://accounts.nintendo.com/profile/edit" target="_blank" style="color: #fc430a; font-weight: bold;">Change your eshop account country</a> to <b>${country}</b></li>
        <li>You can also <a href="https://accounts.nintendo.com/register" target="_blank" style="color: #fc430a; font-weight: bold;">create a new Nintendo account</a></li>
        <li><a href="https://www.youtube.com/watch?v=iIHNfDa8-1o" target="_blank" style="color: #fc430a; font-weight: bold;">Watch video guide</a></li>
      </ul>
      <li> Open the eShop on your Nintendo Switch and search for your game</li>
      <li> Proceed to Purchase</li>
      <ul>
      <li>Use a compatible debit or credit card (Visa/Mastercard) or virtual cards from Maya, GoTyme, and GrabPay.</li>
      </ul>
      </ol>
    `,
    "Brazil": `
      <ol>
      <li> Set up an account in the <b>${country}</b> eShop
      <ul>
        <li><a href="https://accounts.nintendo.com/profile/edit" target="_blank" style="color: #fc430a; font-weight: bold;">Change your eshop account country</a> to <b>${country}</b></li>
        <li>You can also <a href="https://accounts.nintendo.com/register" target="_blank" style="color: #fc430a; font-weight: bold;">create a new Nintendo account</a></li>
        <li><a href="https://www.youtube.com/watch?v=iIHNfDa8-1o" target="_blank" style="color: #fc430a; font-weight: bold;">Watch video guide</a></li>
      </ul>
      <li> Open the eShop on your Nintendo Switch and search for your game</li>
      <li> Proceed to Purchase</li>
      <ul>
      <li>Purchase a <b>Nintendo eShop gift card</b> valid in <b>${country}</b> from the link(s) below: </li>
      <ul>
      <li><a href="${countryUrl}" target="_blank" style="color: #fc430a; font-weight: bold;">SEAGM</a></li>
      </ul>
      <li >Using local debit or credit cards in Brazil is highly discouraged as it requires a CPF, a personal ID for tax purposes, which non-residents or foreign nationals are generally not eligible. <b>Using a gift card is the safer option, as it does not require a CPF.</b></li>
      </ul>
      </ol>
    `,
       "Argentina": `
      <ol>
      <li> Set up an account in the <b>${country}</b> eShop
      <ul>
        <li><a href="https://accounts.nintendo.com/profile/edit" target="_blank" style="color: #fc430a; font-weight: bold;">Change your eshop account country</a> to <b>${country}</b></li>
        <li>You can also <a href="https://accounts.nintendo.com/register" target="_blank" style="color: #fc430a; font-weight: bold;">create a new Nintendo account</a></li>
      </ul>
      <li> Top-up Argentina funds or purchase a single game via <a href="https://maysaleba.com/pasabuy" target="_blank" style="color: #fc430a; font-weight: bold;">Pasabuy</a></li>
      </ol>
    `,
        "US": `
      <ol>
      <li> Set up an account in the <b>${country}</b> eShop
      <ul>
        <li><a href="https://accounts.nintendo.com/profile/edit" target="_blank" style="color: #fc430a; font-weight: bold;">Change your eshop account country</a> to <b>${country}</b></li>
        <li>You can also <a href="https://accounts.nintendo.com/register" target="_blank" style="color: #fc430a; font-weight: bold;">create a new Nintendo account</a></li>
        <li><a href="https://www.youtube.com/watch?v=iIHNfDa8-1o" target="_blank" style="color: #fc430a; font-weight: bold;">Watch video guide</a></li>
      </ul>
      <li> Open the eShop on your Nintendo Switch and search for your game</li>
      <li> Proceed to Purchase</li>
      <ul>
      <li>Use a compatible debit or credit card (Visa/Mastercard) or virtual cards from Maya, GoTyme, and GrabPay.</li>
      <li>You can also purchase a <b>Nintendo eShop gift card</b> valid in <b>${country}</b> from the link(s) below: </li>
      <ul>
      <li><a href="${countryUrl}" target="_blank" style="color: #fc430a; font-weight: bold;">SEAGM</a></li>
      <li><a href="https://s.shopee.ph/6V6xDmuabY" target="_blank" style="color: #fc430a; font-weight: bold;">Shopee</a></li>
      <li><a href="bit.ly/3L2qm2e" target="_blank" style="color: #fc430a; font-weight: bold;">Lazada</a></li>
      <li><a href="bit.ly/3pxXLXT" target="_blank" style="color: #fc430a; font-weight: bold;">Codashop</a></li>
      </ul>
      <li>To avoid additional fees when checking out, enter a tax-free U.S zip code. Here are the following states and zip codes that you can use:</li>
<ul>
<li>97330 – Corvallis, Oregon</li>
<li>03222 – New Hampshire, Bristol</li>
<li>97222 – Milwaukie, Oregon</li>
<li>97116 – Forest Grove, Oregon</li>
<li>97080 – Portland, Oregon</li>
<li>99501 – Rainbow, Alaska</li>
<li>19810 – Dartmouth Woods, Delaware</li>
<li>59001 – Absarokee, Montana</li>
</ul>
      </ul>
      </ol>
    `,
  };

  // Check if the country belongs to a group, if so, return the group's description
  if (["Canada", "Poland", "Mexico", "Australia", "Norway"].includes(country)) {
    return countryGroups["Canada & Poland & Mexico & Australia & Norway"];
  } else if (["Peru", "Colombia", "South Africa", "New Zealand"].includes(country)) {
    return countryGroups["Peru & Colombia & South Africa & New Zealand"];
  } else if (country === "US") {
    return countryGroups["US"];
  } else if (country === "Brazil") {
    return countryGroups["Brazil"];
  } else if (country === "Argentina") {
    return countryGroups["Argentina"];
  }

  // Default message for countries without a specific group
  return "<p>Details unavailable for this country.</p>";
};

        const renderRow = (
          logo,
          price,
          country,
          isStrikeThrough = false,
          badgeText = ""
        ) => {
          const countryUrl = countryURLs[country];
          return (
            <tr className="item-table-best">
              <td className="version">
                <span className={logo.className}>{logo.component}</span>
              </td>
              <td className="version"></td>
              <td className="version">
                <a
                  onClick={(event) => handleOpen(event, country)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn btn-block btn-secondary">
                    <div className="price-container-in">
                      <span className="price">
                        {"₱" + Math.round(price)}
                        {isStrikeThrough && (
                          <span className="ml-2 badge badge-danger">
                            <strike>
                              <PesoPrice props={matchGames[0].Price} />
                            </strike>
                          </span>
                        )}
                      </span>
                      {countryUrl ? (
                        <a
                          href={countryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="no-style-link"
                          onClick={(event) => event.stopPropagation()} // Prevent modal from opening
                        >
                          <img src={seagmlogo} className="seagm-logo" />
                        </a>
                      ) : (
                        <div
                          className="placeholder-logo"
                          style={{ width: "27px", height: "20px" }}
                        ></div>
                      )}
                    </div>
                  </div>
                </a>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  BackdropProps={{
                    style: modalBackdropStyle, // Use the custom backdrop style
                  }}
                >
                  <Box sx={style}>
                  <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        fontSize: {
                          xs: "1rem", // small screens (xs)
                          sm: "1.4rem", // medium screens (sm)
                        },
                      }}
                    >
                      How to buy {matchGames[0].Title} in {modalCountry}
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 2,
                        fontSize: {
                          xs: "0.8rem", // small screens (xs)
                          sm: "1rem", // medium screens (sm)
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: modalText }}
                    />
                  </Box>
                </Modal>
              </td>
            </tr>
          );
        };

        const renderVendorLinks = () => (
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
                  <div className="ml-2 badge badge-info">
                    Suggested Gift Card: <ShopeeCard />
                  </div>
                </span>
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
                {[
                  {
                    href: "https://shope.ee/LNhVslxzC",
                    className: "shopee-logo",
                    text: "SHOPEE",
                  },
                  {
                    href: "https://bit.ly/3L2qm2e",
                    className: "lazada-logo",
                    text: "LAZADA",
                  },
                  {
                    href: "https://bit.ly/3pxXLXT",
                    className: "coda-logo",
                    text: "CODASHOP",
                  },
                ].map((vendor, index) => (
                  <a
                    key={index}
                    className="nopaddingA"
                    href={vendor.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="ml-2 badge badge-danger">
                      <span
                        style={{ fontSize: 13 }}
                        className={vendor.className}
                      >
                        <span className="suggest-text">{vendor.text}</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </td>
          </tr>
        );

        const ranks = visibleEntries.map(([rankCountry, rankPrice]) => {
          // default look for non-medal rows
          let logoClass = "blank-medal-logo";
          let component = <Rank4 rank4country={rankCountry} />;

          // medals are based on the absolute ranking (entries), not the sliced list
          if (rankCountry === top3[0]) {
            logoClass = "gold-medal-logo";
            component = <Rank1 rank1country={rankCountry} />;
          } else if (rankCountry === top3[1]) {
            logoClass = "silver-medal-logo";
            component = <Rank2 rank2country={rankCountry} />;
          } else if (rankCountry === top3[2]) {
            logoClass = "bronze-medal-logo";
            component = <Rank3 rank3country={rankCountry} />;
          }

          return renderRow({ className: logoClass, component }, rankPrice, rankCountry, true);
        });

        return (
          <>
            {ranks}

            {/* Only show the toggle if there are more than 3 rows */}
            {hasToggle && (
              <tr className="item-table-best">
                <td colSpan={3} className="text-center" style={{ paddingTop: 6 }}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setExpanded(v => !v); }}
                    aria-expanded={expanded}
                    style={{ fontSize: "0.8rem", textDecoration: "underline", cursor: "pointer", color: "#555" }}
                  >
                    <u>{expanded ? "Show Top 3" : `Show All ${entries.length}`} Regions</u>
                  </a>
                </td>
              </tr>
            )}
          </>
        );
      }

      return (
        <div
          className="price-container"
          style={{ margin: "auto", paddingTop: 10 }}
        >
          <InfoTax />

          <table className="table table-align-middle item-price-table">
            <tbody>
              <RankRows />
            </tbody>
          </table>
        </div>
      );
    } else {
      return <PsPrices />;
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

<Col>
<Card
  className="border-0" 
  style={{
    maxWidth: "236px",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "7px"
    // overflow: "hidden", // Important to clip rounded corners
  }}>
 
    {matchGames[0].Slug.includes("switch-2") && (
              <div className="platform-top-badge-outside-in">
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

<div className={`${matchGames[0].Slug.includes("switch-2") ? "card-img-wrapper-sw2 no-border-radius" : "card-img-wrapper-in "}`}>

    <img
      src={matchGames[0].Image}
      alt=""
      className="card-img-background"
      onError={(e) => {
        e.target.src = noimage;
        e.onerror = null;
      }}
    />
    <img
      src={matchGames[0].Image}
      alt=""
      className="card-img-foreground"
      onError={(e) => {
        e.target.src = noimage;
        e.onerror = null;
      }}
    />
  </div>

  <a href={matchGames[0].URL} target="_blank" rel="noopener noreferrer">
    <Card.ImgOverlay>
      <PlatformBadge
        hasBadge={matchGames[0].platform}
        esrbrating={matchGames[0].ESRBRating}
      />
    </Card.ImgOverlay>
  </a>

  <PlatformOverlay
    slug={matchGames[0].Slug}
    isps4={matchGames[0].IsPS4}
    isps5={matchGames[0].IsPS5}
  />
</Card>  
</Col>
          </div>
          <OrigPrice />
          <Paper elevation={2} className="content-container">
            {/*<Card className="content-container-gameinfo">*/}

            <Card.Header
              style={{
                fontSize: 18,
                backgroundColor: "white",
                fontWeight: "bold",
              }}
            >
              {matchGames[0].Title.toUpperCase()
                .replace(/ *\([^)]*\) */g, "")
                .replace("Ã¢„Â¢", "™")
                .replace("Â„¢", "™")}
              <HasOpenCritic props={matchGames[0].SCORE} />
              <br />

              <SaleEnds />
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
{matchGames[0].Publisher &&
 matchGames[0].Publisher.trim() !== "" &&
 matchGames[0].Publisher !== "Unknown" && (
  <Col style={{ paddingBottom: 10 }}>
    <span style={{ fontWeight: "bold" }}>Publisher:</span>{" "}
    {matchGames[0].Publisher}
  </Col>
)}

{matchGames[0].ReleaseDate !== "0000-00-00" &&
  DateConvert(matchGames[0].ReleaseDate) !== "Nov 30, 1899" && (
    <Col style={{ paddingBottom: 10 }}>
      <span style={{ fontWeight: "bold" }}>Release Date:</span>{" "}
      {DateConvert(matchGames[0].ReleaseDate)}
    </Col>
)}


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
                    {matchGames[0].genre.replaceAll(",", ", ")}
                  </Col>
                  <Col style={{ paddingBottom: 10 }}></Col>
                </Row>
              </Card.Body>
            </div>

            <YoutubeTrailer />

            <div style={{ fontSize: 14 }}>
              <Card.Header
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                DESCRIPTION
              </Card.Header>
              <Card.Body>
                {matchGames[0].description
                  .replaceAll("Ã¢„Â¢", "™")
                  .replace("Â„¢", "™")}
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
