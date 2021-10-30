import React from "react";
import games1 from "./csvjson.json";
import games2 from "./csvjsonus.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Paper, Link, Container } from "@mui/material";
import styled from "styled-components";
import download from "./download.gif";

let games = games1.concat(games2);

const Content = ({ search, setSearch, match }) => {



  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  var theURL =
    "https://api.exchangerate.host/latest?base=PHP&v=_" + today + "_";

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theURL, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.response;
  }

  let fxc = httpGet();
  const fxcp = JSON.parse(fxc);

  var phpExchange = 1 / fxcp.rates.USD;

  const matchGames = games.filter((game) => {
    return game.Slug === match.params.games;
  });



  function PesoPrice(props) {
    return "₱" + Math.round(props.props * phpExchange);
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




   function PesoPlusPrice(){
              if (matchGames[0].platform === "Switch"){
                   return null;
              } if  (matchGames[0].platform === "Playstation"){
                   return (
                 <>
                 <span className="psplusbadge">
                  {"₱"+Math.round((matchGames[0].PlusPrice * phpExchange))}
                  </span><br/>
                  </>
                )
            }
          }


  function ShopeeCard() {
    if (matchGames[0].platform === "Switch")
    {
      if (parseFloat(matchGames[0].SalePrice) <= 10 )
        {
          return <span>$10</span>
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 20 ) 
        {
          return <span>$20</span>
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 35 ) 
        {
          return <span>$35</span>
        } else 
      if (parseFloat(matchGames[0].SalePrice) <= 50 ) 
        {
          return <span>$50</span>
        } else 
        {
          return <span>$50</span>
        }
    }

    else {
      if (parseFloat(matchGames[0].SalePrice) <= 10 )
        {
          return <span>$10</span>
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 20 ) 
        {
          return <span>$20</span>
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 25 ) 
        {
          return <span>$25</span>
        } else 
      if (parseFloat(matchGames[0].SalePrice) <= 50 ) 
        {
          return <span>$50</span>
        } else 
        {
          return <span>$50</span>
        }
    }
  }


    function ShopeeURL() {
    if (matchGames[0].platform === "Switch")
    { return (
       <tr className="item-table-best">
                <td>

                  <a
                    href="https://bit.ly/3tvQ3No"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: 0 }}
                  >
                                   

                  <div
                    style={{ marginLeft: "10px" }}
                    className="logonin shopee"
                  >
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
                Buy <ShopeeCard /><br/> Gift Card
                  </a>
                </td>
                <td className="version">
                  <a href="https://bit.ly/3tvQ3No" target="_blank" rel="noreferrer">
                    <GiftCardVar />
                   
                  </a>
                </td>
              </tr>
              )
    }

    else 
    { return (
       <tr className="item-table-best">
                <td>

                  <a
                    href="https://bit.ly/2T5UXTK"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: 0 }}
                  >
                                   

                  <div
                    style={{ marginLeft: "10px" }}
                    className="logonin shopee"
                  >
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
                Buy <ShopeeCard /><br/> Gift Card
                  </a>
                </td>
                <td className="version">
                  <a href="https://bit.ly/2T5UXTK" target="_blank" rel="noreferrer">
                    <GiftCardVar />
                   
                  </a>
                </td>
              </tr>
              )
    }
    }
  

  function GiftCardVar() {
    if (matchGames[0].platform === "Switch")
    {
      if (parseFloat(matchGames[0].SalePrice) <= 10 )
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱500</span>
                      <span className="ml-2 badge badge-danger">
                       -17%
                      </span>
                    </div>

            );
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 20 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱1000</span>
                      <span className="ml-2 badge badge-danger">
                       -9%
                      </span>
                    </div>

            );
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 35 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱1750</span>
                      <span className="ml-2 badge badge-danger">
                       -8%
                      </span>
                    </div>

            );
        } else 
      if (parseFloat(matchGames[0].SalePrice) <= 50 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱2450</span>
                      <span className="ml-2 badge badge-danger">
                       -2%
                      </span>
                    </div>

            );
        } else 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱2450</span>
                      <span className="ml-2 badge badge-danger">
                       -2%
                      </span>
                    </div>

            );
        }
    }

    else {
      
      if (parseFloat(matchGames[0].SalePrice) <= 10 )
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱500</span>
                      <span className="ml-2 badge badge-danger">
                       -17%
                      </span>
                    </div>

            );
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 20 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱1000</span>
                      <span className="ml-2 badge badge-danger">
                       -17%
                      </span>
                    </div>

            );
        } else
      if (parseFloat(matchGames[0].SalePrice) <= 25 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱1240</span>
                      <span className="ml-2 badge badge-danger">
                       -11%
                      </span>
                    </div>

            );
        } else 
      if (parseFloat(matchGames[0].SalePrice) <= 50 ) 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱2465</span>
                      <span className="ml-2 badge badge-danger">
                       -9%
                      </span>
                    </div>

            );
        } else 
        {
          return (
               <div className="btn btn-block btn-secondary">
                      <span>₱2465</span>
                      <span className="ml-2 badge badge-danger">
                       -9%
                      </span>
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
              fontSize: 10,
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
              fontSize: 10,
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
            fontSize: 10,
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
            fontSize: 10,
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
            fontSize: 10,
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
    if (props.props === "" || props.props === "-1") {
      return (
        <span>
          <span style={{ marginLeft: 0, color: "#9c27b0" }}>
            OpenCritic Rating:
          </span>
          <span style={{ color: "black" }}>
            <span className="opencritic-logo"> N/A</span>
          </span>
        </span>
      );
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
          <span style={{ marginLeft: 0, color: "#9c27b0" }}>
            OpenCritic Rating:
          </span>
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

  const BackgroundContainer = styled.div`
    -blur-radius: 20px;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #6e7290;
    z-index: -1;

    &:after {
      --color-background--rgb: 110, 114, 144;
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

  // console.log(matchGames[0].description.split('\n'));
  return (
    <div>
      <BackgroundContainer>
        <Background />
      </BackgroundContainer>
      <NaviBar />
      <div className="text-center m-3 p-auto" style={{paddingBottom: 15}}>
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
        <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
          {matchGames[0].Title}
        </Card.Header>
        <Card.Body style={{ fontSize: 14 }}>
     
          <Row xs={1} sm={2}>
            <Col style={{paddingBottom: 10}}>
              <span style={{ color: "#9c27b0" }}>Publisher:</span>{" "}
              {matchGames[0].Publisher}
            </Col>
            <Col style={{paddingBottom: 10}}>
              <span style={{ color: "#9c27b0" }}>Release Date:</span>{" "}
              {DateConvert(matchGames[0].ReleaseDate)}
            </Col>
          </Row>
          <Row xs={1} sm={2}>
            <Col style={{paddingBottom: 10}}>
             <span style={{ color: "#9c27b0" }}>Platform: </span>{" "}
              <WhichPlatform />
             
            </Col>
            <Col style={{paddingBottom: 10}}>
              <span style={{ color: "#9c27b0" }}>Region: </span>
              <span className="usregion-logo">US</span>{" "}
            </Col>
          </Row>
          <Row xs={1} sm={2}>
            <Col style={{paddingBottom: 10}}>
              <HasOpenCritic props={matchGames[0].SCORE} />
            </Col>
            <Col style={{paddingBottom: 10}}>
              <span style={{ color: "#9c27b0" }}>Genre:</span>{" "}
              {matchGames[0].genre}
            </Col>
          </Row>
        </Card.Body>
        <div className="price-container" style={{ margin: "auto" }}>
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
               Digital<br />Game
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
                    style={{fontSize:12, paddingRight: 20, padding: "0 0.75rem "}}
                  >
                    Retail Price <strike><PesoPrice props={matchGames[0].Price} /></strike><br/>
                   Sale ends {DateConvert(matchGames[0].SaleEnds)}
                  </a>
              </td>
              </tr>
              <ShopeeURL />
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: 14 }}>
          <Card.Header style={{ backgroundColor: "white" }}>
            Description
          </Card.Header>
          <Card.Body>
            <ReverseDesc props={matchGames[0].description} />
          </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default Content;
