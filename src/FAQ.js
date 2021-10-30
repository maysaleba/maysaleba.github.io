import React from "react";
import games1 from "./csvjson.json";
import games2 from "./csvjsonus.json";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Link,
  Container,
} from "@mui/material";
import styled from "styled-components";
import download from "./download.gif";
import InfoIcon from '@mui/icons-material/Info';

let games = games1.concat(games2);

const About = () => {
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
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>
          <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            <InfoIcon/> Frequently Asked Questions
          </Card.Header>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>What is this site for?</strong>
           </Card.Header>
          <Card.Body>
            MaySaleBa? is a website made to keep <span className="phregion-logo">Filipino</span> gamers up-to-date with the latest discounts on the Nintendo eShop and Playstation Store US Region
            <p style={{fontWeight: "bold"}}>We do not sell games, the purpose of this site is only to inform</p>
           
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
           <strong>How do you buy digital games?</strong>
           </Card.Header>
           <Card.Body>
           <ol>
            <li>Go to Nintendo eShop or Playstation Store on your console </li>
            <li>Search for the game you want to buy</li>
            <li>Pay using a compatible credit card or use funds on your eShop or PS Store account</li>
           </ol>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>How do I add funds to my Nintendo eShop or PS Store account?</strong>
           </Card.Header>
           <Card.Body>
           Watch the videos below:
           <ul>
           <li><a className="giftcardlink" href="https://www.youtube.com/watch?v=-9fpgdnWnT0">Nintendo eShop</a></li>
           <li><a className="giftcardlink" href="https://www.youtube.com/watch?v=iZklWtUtq7w">Playstation Store</a></li>
           </ul>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>Where can I buy Gift Cards / Digital Card Codes?</strong>
           </Card.Header>
           <Card.Body>
           You can buy from our affiliate via Shopee.ph <a className="giftcardlink" href="https://maysaleba.com/#/giftcards">here</a>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>Does your affiliate accept GCASH?</strong>
           </Card.Header>
           <Card.Body>
           Yes, all payment methods available in Shopee are accepted
           </Card.Body>
                      <Card.Header style={{ backgroundColor: "white" }}>
           <strong>How can I contact you?</strong>
           </Card.Header>
           <Card.Body>
           You can send me an email at <a className="giftcardlink" href="mailto:maysalebaph@gmail.com">maysalebaph@gmail.com</a> <br/>or message me on our Facebook page <a className="giftcardlink" href="https://fb.me/maysalebaph">MaySaleBa?</a> 
          </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default About;
