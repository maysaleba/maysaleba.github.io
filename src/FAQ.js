import React from "react";
import { Card } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Paper } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import download from "./download.gif";

const About = () => {
  function createData(region, logoClass, dcvcard, seagmlogo, shpelogo, lazlogo, codalogo, pasabuy) {
    return { region, logoClass, dcvcard, seagmlogo, shpelogo, lazlogo, codalogo, pasabuy };
  }


const regionLinks = {
  "United States": {
    seagmlogo: "https://invl.io/clm3oli", // Seagm logo link
    shpelogo: "https://s.shopee.ph/6V6xDmuabY", // Shopee logo link
    lazlogo: "https://bit.ly/3L2qm2e", // Lazada logo link
    codalogo: "https://bit.ly/3pxXLXT", // Coda logo link
  },
  "United Kingdom": "https://invl.io/clm3oku", // One link for the whole region
  Australia: "https://invl.io/clm3okz", // One link for the whole region
  Europe: "https://invl.io/clm3ol2", // One link for the whole region
  "Hong Kong": "https://invl.io/clm3ol6", // One link for the whole region
  Canada: "https://invl.io/clm3ol8", // One link for the whole region
  Mexico: "https://invl.io/clm3ola", // One link for the whole region
  Switzerland: "https://invl.io/clm3olb", // One link for the whole region
  Poland: "https://invl.io/clm3old", // One link for the whole region
  "South Korea": "https://invl.io/clm3ole", // One link for the whole region
  Japan: "https://invl.io/clm3olj", // One link for the whole region
  Denmark: "https://invl.io/clm3oll", // One link for the whole region
  Sweden: "https://invl.io/clm3olo", // One link for the whole region
  Brazil: "https://invl.io/clm3olp", // One link for the whole region
  Norway: "https://invl.io/clm3olq", // One link for the whole region
  Peru: "",
  Argentina: "",
  Colombia: "",
  "South Africa": "",
  Chile: "",
};


  const rows = [
    createData("Argentina", "arregion-logo", "❌", "", "", "", "", "✔️"),
    createData("Australia", "auregion-logo", "✔️","seagmsm-logo", "", "", "",  "❌"),
    createData("Brazil", "brregion-logo", "❌", "seagmsm-logo", "", "", "", "❌"),
    createData("Canada", "caregion-logo", "✔️", "seagmsm-logo", "", "", "", "❌"),
    createData("Colombia", "coregion-logo", "✔️", "", "", "", "", "❌"),
    createData("Denmark", "deregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),
    createData("Europe", "euregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),
    createData("Hong Kong", "hkregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),
    createData("Japan", "jpregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"), 
    createData("Mexico", "mxregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),
    createData("Norway", "noregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"), 
    createData("Peru", "peregion-logo", "✔️", "", "", "", "", "❌"),
    createData("Poland", "plregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),
    createData("South Africa", "zaregion-logo", "✔️", "", "", "", "", "❌"),
    createData("South Korea", "krregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"), 
    createData("Sweden", "seregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),  
    createData("Switzerland", "chregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),   
    createData("United Kingdom", "gbregion-logo", "✔️","seagmsm-logo", "", "", "", "❌"),    
    createData("United States", "usregion-logo", "✔️", "seagmsm-logo", "shopee-logo", "lazada-logo", "coda-logo", "❌"),
  ];

  // console.log(matchGames[0].description.split('\n'));
  return (
    <div>
      <NaviBar />
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>
          <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            <InfoIcon /> Frequently Asked Questions
          </Card.Header>
          <Card.Body>
            MaySaleBa? is a website designed to keep{" "}
            <span className="phregion-logo">Filipino</span> gamers up-to-date
            with the latest discounts on the Nintendo eShop and Playstation
            Store (Turkey Region).
            <p style={{ fontWeight: "bold" }}>
              Nope, we don’t sell games—we’re just here to let you know which region to buy to get the best deals! 🤑
            </p>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>Table of Contents</strong>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <a href="#buy-region" className="giftcardlink">
                  How do I buy from a Nintendo eShop in another region?
                </a>
              </li>
              <li>
                <a href="#pay-region" className="giftcardlink">
                  How do I pay on a Nintendo eShop in another region?
                </a>
                <ul>
                  <li>
                    <a href="#debit-credit-virtual-cards" className="giftcardlink">
                      D/C/V Cards
                    </a>
                  </li>
                  <li>
                    <a href="#eshop-gift-cards" className="giftcardlink">
                      eShop Gift Cards
                    </a>
                    <ul>
                      <li>
                        <a href="#buying-from-seagm" className="giftcardlink">
                          Buy from SEAGM
                        </a>
                      </li>
                      <li>
                        <a
                          href="#buying-from-shopee-lazada"
                          className="giftcardlink"
                        >
                          Buy from Shopee and Lazada
                        </a>
                      </li>
                      <li>
                        <a
                          href="#buying-from-codashop"
                          className="giftcardlink"
                        >
                          Buy from Codashop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#pasabuy" className="giftcardlink">
                      Pasabuy
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#error-2813-2470" className="giftcardlink">
                  Why am I getting error 2813-2470 when I try to purchase?
                </a>
              </li>
              <li>
                <a href="#contact-us" className="giftcardlink">
                  How can I contact you?
                </a>
              </li>
            </ul>
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              <p id="buy-region" />
              How do I buy from a Nintendo eShop in another region?
            </strong>
          </Card.Header>
          <Card.Body>
           
            <ol>
            <li>Setup your account</li>
              <ul>
              <li>
                <a
                  href="https://accounts.nintendo.com/profile/edit"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Change the country/region on your account
                </a>{" "}
                each time you want to buy from a different eShop. You will need to use any
                remaining funds before you will be able to change the country.
              </li>
              <li>
                <a
                  href="https://accounts.nintendo.com/register"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Create a separate Nintendo account
                </a>{" "}
                for each region you want to buy from. Each account will need a
                different email address.
                <br />
                Tip: If you use Gmail, put anything behind a "+" just before the @ and it will still point towards your email. Ex: msbph+US@gmail.com is the same as msbph@gmail.com
              </li>
              </ul>
              <li>On your Nintendo Switch, go to the Home menu and select the Nintendo eShop icon using the account you have just setup</li>
              <li>Search for the game, DLC, or content you want to buy and select <b>Proceed to Purchase</b></li>
              <li>Steps to proceed with your purchase may vary depending on which region you are buying. <b>See section below</b></li>
            </ol>
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              <p id="pay-region" />
              How do I pay on a Nintendo eShop in another region?
            </strong>
          </Card.Header>
          <Card.Body>
            The table below shows which payment methods you can use in the eShop
            for each region:
            <p />
            <TableContainer component={Paper}>
              <Table
                sx={{ width: "100%" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontFamily: "system-ui",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      <b>Region</b>
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "system-ui",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                      align="left"
                    >
                      <b>D/C/V Cards</b>
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "system-ui",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                         padding: "0px",
                         paddingLeft: "20px"
                      }}
                      align="left"
                    >
                      <b>eShop Gift Cards</b>
                    </TableCell>
                    <TableCell style={{ fontFamily: "system-ui" }} align="left">
                      <b>Pasabuy</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& > *": {
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          borderRight: "1px solid rgba(224, 224, 224, 1)",
                        },
                        "& > *:last-child": {
                          borderRight: "none",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          borderRight: "1px solid rgba(224, 224, 224, 1)",
                          alignItems: "center",
                          display: "flex"

                        }}
                      >
                        {/* Flag Icon */}
                        <span className={row.logoClass}>
                          <img src={download} />
                        </span>
                        <span>{row.region}</span>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          borderRight: "1px solid rgba(224, 224, 224, 1)",
                        }}
                      >
                        {row.dcvcard}
                      </TableCell>
<TableCell
  align="center"
  style={{
    fontFamily: "system-ui",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    padding: "0px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }}
>
  <div
    style={{
      display: "flex",
      flexWrap: "nowrap",  // Prevent wrapping, keep the images in a row
       justifyContent: row.shpelogo || row.lazlogo || row.seagmlogo || row.codalogo ? "center" : "center", // If any logo exists, align left, otherwise center
      gap: "20px",  // Space between images
      overflow: "hidden",  // Prevent overflow on small screens
    }}
  >
    {/* SEAGM logo */}
    {row.seagmlogo && (row.region === "United States" ? regionLinks["United States"]?.seagmlogo : regionLinks[row.region]) && (
      <a href={row.region === "United States" ? regionLinks["United States"]?.seagmlogo : regionLinks[row.region]}>
        <span className={row.seagmlogo}>
          <img
            src={download}
            style={{
              width: "15px",
              height: "15px",
              objectFit: "contain",
            }}
          />
        </span>
      </a>
    )}

    {/* Shopee logo */}
    {row.shpelogo && (row.region === "United States" ? regionLinks["United States"]?.shpelogo : regionLinks[row.region]) && (
      <a href={row.region === "United States" ? regionLinks["United States"]?.shpelogo : regionLinks[row.region]}>
        <span className={row.shpelogo}>
          <img
            src={download}
            style={{
              width: "15px",
              height: "15px",
              objectFit: "contain",
            }}
          />
        </span>
      </a>
    )}

    {/* Lazada logo */}
    {row.lazlogo && (row.region === "United States" ? regionLinks["United States"]?.lazlogo : regionLinks[row.region]) && (
      <a href={row.region === "United States" ? regionLinks["United States"]?.lazlogo : regionLinks[row.region]}>
        <span className={row.lazlogo}>
          <img
            src={download}
            style={{
              width: "15px",
              height: "15px",
              objectFit: "contain",
            }}
          />
        </span>
      </a>
    )}

    {/* Codashop logo */}
    {row.codalogo && (row.region === "United States" ? regionLinks["United States"]?.codalogo : regionLinks[row.region]) && (
      <a href={row.region === "United States" ? regionLinks["United States"]?.codalogo : regionLinks[row.region]}>
        <span className={row.codalogo}>
          <img
            src={download}
            style={{
              width: "15px",
              height: "15px",
              objectFit: "contain",
            }}
          />
        </span>
      </a>
    )}

    {/* Show ❌ if all logos are empty */}
    {!(row.seagmlogo || row.shpelogo || row.lazlogo || row.codalogo) && "❌"}
  </div>
</TableCell>


                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        }}
                      >
                        {row.pasabuy}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>Pay using Debit/Credit/Virtual Cards</strong>
          </Card.Header>
          <Card.Body>
          You can use most credit or debit cards from major local banks that support Visa or Mastercard.
            <ol>
              <li>On the eShop checkout screen, choose <b>Credit Card</b> as your payment method</li>
              <li>Enter your credit/debit/virtual card details (card number, expiration date, and CVV).</li>
              <li>Select <b>Purchase</b> to complete the transaction</li>
            </ol>
          Most commonly used PH debit/credit/virtual cards
          <ul>
          <li>BPI</li>
          <li>BDO</li>
          <li>Maya (Virtual Card)</li>
          <li>GrabPay (Virtual Card)</li>
          <li>GoTyme (Virtual Card)</li>
          <li>CIMB (Virtual Card)</li>
          </ul>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>Pay using Nintendo eShop Gift Card </strong>
          </Card.Header>
          <Card.Body>
              Use Nintendo eShop Gift Cards (Prepaid Cards) to add funds into your Nintendo account and purchase your game
            <ol>
              <li>On the eShop checkout screen, choose <b>Nintendo eShop Card</b> as your payment method</li>
              <li>Enter your <b>16-digit Nintendo eShop Prepaid Code</b></li>
              <li>Select <b>Purchase</b> to complete the transaction</li>
            </ol>
            You can buy Nintendo eShop Gift Cards from our affiliates below:
              <ul>
              <li><a
                  href="https://invl.io/clm3oie"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >SEAGM</a></li>
              <li><a
                  href="https://s.shopee.ph/6V6xDmuabY"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Shopee (US only)</a></li>
              <li><a
                  href="https://bit.ly/3L2qm2e"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Lazada (US only)</a></li>
              <li><a
                  href="https://bit.ly/3pxXLXT"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Codashop (US only)</a></li>
              </ul>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              How do I add funds to my Nintendo eShop or PS Store account?
            </strong>
          </Card.Header>
          <Card.Body>
            Watch the videos below:
            <ul>
              <li>
                <a
                  className="giftcardlink"
                  href="https://www.youtube.com/watch?v=-9fpgdnWnT0"
                >
                  Nintendo eShop
                </a>
              </li>
              <li>
                <a
                  className="giftcardlink"
                  href="https://www.youtube.com/watch?v=iZklWtUtq7w"
                >
                  Playstation Store
                </a>
              </li>
            </ul>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>Where can I buy Gift Cards / Digital Card Codes?</strong>
          </Card.Header>
          <Card.Body>
            You can buy from our affiliate via Shopee.ph{" "}
            <a
              className="giftcardlink"
              href="https://maysaleba.com/#/giftcards"
            >
              here
            </a>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              Buy from Shopee and Lazada
            </strong>
          </Card.Header>
          <Card.Body>
            <ol>
              <li>Select Gift Card denomination</li>
              <li>Click 'Add to Cart' or 'Buy now'</li>
              <li>Proceed with Checkout</li>
              <li>Select any of the available Payment methods</li>
              <ul>
                <li>Linked Bank Account (BPI Online)</li>
                <li>
                  Payment Center / e-Wallet (e.g. Bayad Center, 7-eleven CLiQQ,
                  GCash, Coins.ph Wallet etc...)
                </li>
                <li>Over-the-counter</li>
                <li>Online Payment</li>
              </ul>
              <li>
                Once payment is confirmed, send a chat message to the Shop.{" "}
                <strong>
                  Code will be replied through chat, usually within a few
                  minutes
                </strong>
              </li>
            </ol>
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
            You can send me an email at{" "}
            <a className="giftcardlink" href="mailto:maysalebaph@gmail.com">
              maysalebaph@gmail.com
            </a>{" "}
            <br />
            or message me on our Facebook page{" "}
            <a className="giftcardlink" href="https://fb.me/maysalebaph">
              MaySaleBa?
            </a>
          </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default About;
