import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import NaviBar from "./NaviBar";
import {
  List,
  Paper
} from "@mui/material";
import styled from "styled-components";
import download from "./download.gif";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';



const GiftCards = ({searchQuery, setSearchQuery}) => {
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
    background: #6767ab;
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
            <CardGiftcardIcon/> Gift Cards
          </Card.Header>
          
          <Card.Header style={{ backgroundColor: "white"}}>
            <div className="logonen shopee">
              <img src={download} />
            </div>
          </Card.Header>
            <Card.Body>
            Support our website by buying Gift Cards from our Shopee.ph affiliate links! 
            <br />These are
            available in denominations of:
            <br />
            <List>
              <Row xs={2} sm={2}>
                <Col>
                 <span className="usregion-logo" style={{paddingRight:5}}>US</span>
                  Nintendo eShop
                </Col>
                <Col>
                <span className="usregion-logo" style={{paddingRight:5}}>US</span>
                  Playstation Store
                  
                </Col>
              </Row>
              <Row>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/7evV9dw3HM">$10 - ₱520</a></Col>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/ApUDw57fU">$10 - ₱500</a></Col>
              </Row>
              <Row>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/7evV9dw3HM">$20 - ₱1,040</a></Col>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/ApUDw57fU">$20 - ₱1,000</a></Col>
              </Row>
              <Row>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/7evV9dw3HM">$35 - ₱1,820</a></Col>
                 <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/ApUDw57fU">$25 - ₱1,250</a></Col>
              </Row>
              <Row>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/7evV9dw3HM">$50 - ₱2,450</a></Col>
                <Col style={{marginLeft: 25}}><a className="giftcardlink" href="https://shope.ee/ApUDw57fU">$50 - ₱2,500</a></Col>
              </Row>
            </List>
            <br />
            Please be advised that prices indicated here might change without notice.
            <br /> Click and visit the Shopee store to get the most accurate price.
          </Card.Body>
            <Card.Header style={{ backgroundColor: "white" }}>
           <strong>What is the process of buying Gift Cards from your Shopee.ph affiliate?</strong>
           </Card.Header>
           <Card.Body>
            <ol>
              <li>Select Gift Card denomination</li>
<li>Click 'Add to Cart' or 'Buy now'</li>
<li>Proceed with Checkout</li>
<li>Select any of the available Payment methods</li>
      <ul>
        <li>Linked Bank Account (BPI Online)</li>
        <li>Payment Center / e-Wallet (e.g. Bayad Center, 7-eleven CLiQQ, GCash, Coins.ph Wallet etc...)</li>
        <li>Over-the-counter</li>
        <li>Online Payment</li>
        </ul>
      <li>Once payment is confirmed, send a chat message to the Shop. <strong>Code will be replied through chat, usually within a few minutes</strong></li>
            </ol>
           </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default GiftCards;
