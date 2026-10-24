import React from "react";
import { Card } from "react-bootstrap";
import { Paper, Grid, Box, TableHead, TableRow, Table, TableBody, TableCell, TableContainer, Button, Modal } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import download from "./download.gif";
import mark from "./flags/mark.png";
import xmark from "./flags/xmark.png";
import enebalogo from "./flags/eneba.png";
import CloseIcon from "@mui/icons-material/Close";


import enebastep1 from "./images/eneba_img1.jpg";
import enebastep2 from "./images/eneba_img2.jpg";
import enebastep3 from "./images/eneba_img3.jpg";
import enebastep4 from "./images/eneba_img4.jpg";
import enebastep5 from "./images/eneba_img5.jpg";
import enebastep6 from "./images/eneba_img6.jpg";


const EnebaStep = ({ src }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={src}
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon className="modal-close-icon"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={src}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 300,
  transform: "translate(-50%, -50%)",
  // bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
};


const About = () => {
  function createData(region, logoClass, dcvcard, enebalogo, pasabuy) {
    return { region, logoClass, dcvcard, enebalogo, pasabuy };
  }


  const regionLinks = {
    "United States": {
      enebalogo: "https://www.eneba.com/nintendo-nintendo-eshop-card-5-usd-key-united-states?af_id=maysaleba&currency=PHP&region=global",
    },
        "United Kingdom": "https://www.eneba.com/nintendo-nintendo-eshop-card-15-gbp-key-united-kingdom?af_id=maysaleba&currency=PHP&region=global",
        Australia: "https://www.eneba.com/nintendo-nintendo-eshop-card-15-aud-key-australia?af_id=maysaleba&currency=PHP&region=global",
        Europe: "https://www.eneba.com/other-nintendo-eshop-card-15-eur-nintendo-key-europe?af_id=maysaleba&currency=PHP&region=global",
        "Hong Kong": "https://www.eneba.com/nintendo-nintendo-eshop-card-100-hkd-key-hong-kong?af_id=maysaleba&currency=PHP&region=global",
        Canada: "https://www.eneba.com/nintendo-nintendo-eshop-card-5-cad-key-canada?af_id=maysaleba&currency=PHP&region=global",
        Mexico: "https://www.eneba.com/nintendo-nintendo-eshop-card-100-mxn-key-mexico?af_id=maysaleba&currency=PHP&region=global",
        Switzerland: "https://www.eneba.com/nintendo-nintendo-eshop-card-20-chf-key-switzerland?af_id=maysaleba&currency=PHP&region=global",
        Poland: "https://www.eneba.com/nintendo-nintendo-eshop-card-70-pln-key-poland?af_id=maysaleba&currency=PHP&region=global",
        "Korea": "",
        "United States": "https://www.eneba.com/nintendo-nintendo-eshop-card-5-usd-key-united-states?af_id=maysaleba&currency=PHP&region=global",
        Japan: "https://www.eneba.com/nintendo-nintendo-eshop-card-500-jpy-key-japan?af_id=maysaleba&currency=PHP&region=global",
        Denmark: "https://www.eneba.com/nintendo-nintendo-eshop-card-150-dkk-key-denmark?af_id=maysaleba&currency=PHP&region=global",
        Sweden: "https://www.eneba.com/nintendo-nintendo-eshop-card-150-sek-key-sweden?af_id=maysaleba&currency=PHP&region=global",
        Brazil: "https://www.eneba.com/nintendo-nintendo-eshop-card-30-brl-key-brazil?af_id=maysaleba&currency=PHP&region=global",
        Norway: "https://www.eneba.com/nintendo-nintendo-eshop-card-150-nok-key-norway?af_id=maysaleba&currency=PHP&region=global",
        Peru: "",
        Argentina: "",
        Colombia: "",
        "South Africa": "",
        "New Zealand": "",
    Chile: "",
  };

  const rows = [
    createData(
      "Argentina",
      "arregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={mark} />
    ),
    createData(
      "Australia",
      "auregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Brazil",
      "brregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Canada",
      "caregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Chile",
      "clregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Colombia",
      "coregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Denmark",
      "deregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Europe",
      "euregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Hong Kong",
      "hkregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Japan",
      "jpregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Malaysia",
      "myregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Mexico",
      "mxregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "New Zealand",
      "nzregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Norway",
      "noregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Peru",
      "peregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Poland",
      "plregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
     createData(
      "Singapore",
      "sgregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "South Africa",
      "zaregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "South Korea",
      "krregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Sweden",
      "seregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Switzerland",
      "chregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Thailand",
      "thregion-logo",
      <img src={mark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "United Kingdom",
      "gbregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "United States",
      "usregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
  ];

  const psEnebaLinks = {
    "Hong Kong": "https://www.eneba.com/psn-playstation-network-card-20-hkd-psn-key-hong-kong?af_id=maysaleba&currency=PHP&region=global",
    India: "https://www.eneba.com/psn-playstation-network-card-rs-1000-in-psn-key-india?af_id=maysaleba&currency=PHP&region=global",
    Indonesia: "https://www.eneba.com/psn-playstation-network-card-100000-idr-id-psn-key-indonesia?af_id=maysaleba&currency=PHP&region=global",
    Singapore: "https://www.eneba.com/psn-playstation-network-card-15-sgd-sgp-psn-key-singapore?af_id=maysaleba&currency=PHP&region=global",
    Turkey: "https://www.eneba.com/psn-playstation-network-card-200-try-tr-psn-key-turkey?af_id=maysaleba&currency=PHP&region=global",
    "United States": "https://www.eneba.com/psn-playstation-network-card-1-usd-usa-psn-key-united-states?af_id=maysaleba&currency=PHP&region=global",
  };
  const psRows = [
    ["Hong Kong", "hkregion-logo", true],
    ["India", "inregion-logo", false],
    ["Indonesia", "idregion-logo", true],
    ["Singapore", "sgregion-logo", true],
    ["Turkey", "trregion-logo", false],
    ["United States", "usregion-logo", false],
  ];
  const iconStyle = { width: 16, height: "auto" };

  // console.log(matchGames[0].description.split('\n'));
  return (
    <div>
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>
          <Card.Header className="content-header">
            <InfoIcon /> Frequently Asked Questions
          </Card.Header>
          <Card.Body>
            MaySaleBa? is a website designed to keep{" "}
            <span className="phregion-logo">Filipino</span> gamers up-to-date
            with the latest discounts on the different Nintendo eShop and Playstation
            Store regions.
            <p style={{ fontWeight: "bold" }}>
              Nope, we don’t sell games—we’re just here to let you know which
              region to buy to get the best deals! 🤑
            </p>
          </Card.Body>
          <Card.Header className="content-header">
            <strong>Table of Contents</strong>
          </Card.Header>
          <Card.Body>
            <div style={{ fontWeight: "bold" }}>
              <a href="#nintendo-switch" className="giftcardlink">
                Nintendo Switch
              </a>
            </div>
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
                  
                </ul>
              </li>
              <li>
                <a href="#error-2813-2470" className="giftcardlink">
                  Why am I getting error 2813-2470 when I try to purchase?
                </a>
              </li>
            </ul>
            <div style={{ fontWeight: "bold" }}>
              <a href="#playstation" className="giftcardlink">
                PlayStation 4 & 5
              </a>
            </div>
            <ul>
              <li>
                <a href="#ps-buy-region" className="giftcardlink">
                  How do I buy from a PlayStation Store in another region?
                </a>
              </li>
              <li>
                <a href="#ps-pay-region" className="giftcardlink">
                  How do I pay on a PlayStation Store in another region?
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#buying-from-eneba" className="giftcardlink">
                  How do I buy gift cards from Eneba?
                </a>
              </li>
              <li>
                <a href="#contact-us" className="giftcardlink">
                  How can I contact you?
                </a>
              </li>
            </ul>
          </Card.Body>

          <Card.Header className="content-header">
            <strong>
              <p id="nintendo-switch" />
              Nintendo Switch
            </strong>
          </Card.Header>
          <Card.Header className="content-header">
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
                    target="_blank" rel="noreferrer"
                    style={{ color: "#fc430a", fontWeight: "bold" }}
                  >
                    Change the country/region on your account
                  </a>{" "}
                  each time you want to buy from a different eShop. You will
                  need to use any remaining funds before you will be able to
                  change the country. <b>OR</b>
                </li>
                <li>
                  <a
                    href="https://accounts.nintendo.com/register"
                    target="_blank" rel="noreferrer"
                    style={{ color: "#fc430a", fontWeight: "bold" }}
                  >
                    Create a separate Nintendo account
                  </a>{" "}
                  for each region you want to buy from. Each account will need a
                  different email address.
                  <br />
                  Tip: If you use Gmail, put anything behind a "+" just before
                  the @ and it will still point towards your email. Ex:
                  msbph+US@gmail.com is the same as msbph@gmail.com
                </li>
              </ul>
              <li>
                On your Nintendo Switch, go to the Home menu and select the
                Nintendo eShop icon using the account you have just setup
              </li>
              <li>
                Search for the game, DLC, or content you want to buy and select{" "}
                <b>Proceed to Purchase</b>
              </li>
              <li>
                Steps to proceed with your purchase may vary depending on which
                region you are buying. <b>See section below</b>
              </li>
            </ol>
          </Card.Body>

          <Card.Header className="content-header">
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
    className="faq-table"
    size="small"
    aria-label="a dense table"
    sx={{
      width: "100%",
      tableLayout: "fixed",              // ← keeps all columns on screen
      "& thead th:nth-of-type(1)": {     // column widths (tweak as you like)
        width: { xs: "40%", sm: "40%" },
      },
      "& thead th:nth-of-type(2)": { width: { xs: "20%", sm: "24%" } },
      "& thead th:nth-of-type(3)": { width: { xs: "20%", sm: "18%" } },
      "& thead th:nth-of-type(4)": { width: { xs: "20%", sm: "18%" } },
      "& th, & td": {
        whiteSpace: "normal",            // allow wrapping
        wordBreak: "break-word",
        p: { xs: 0.5, sm: 1 },           // tighter padding on small screens
        fontSize: { xs: 12, sm: 14 },    // smaller font on small screens
      },
    }}
  >
    <TableHead>
      <TableRow>
        <TableCell style={{ borderRight: "1px solid rgba(224,224,224,1)" }}>
          <b>eShop Region</b>
        </TableCell>
        <TableCell
          align="center"
          style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
        >
          {/* shorter label → wraps to 2 lines nicely */}
          <b>Debit/Credit/Virtual</b>
        </TableCell>
        <TableCell
          align="center"
          style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
        >
          <b>eShop Gift Cards</b>
        </TableCell>
        <TableCell align="center">
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
              borderBottom: "1px solid rgba(224,224,224,1)",
              borderRight: "1px solid rgba(224,224,224,1)",
            },
            "& > *:last-child": { borderRight: "none" },
          }}
        >
          <TableCell>
            <span className={row.logoClass}>{row.region}</span>
          </TableCell>
          <TableCell align="center">
            {/* keep icons tiny so columns stay narrow */}
            {React.cloneElement(row.dcvcard, { style: { width: 16, height: "auto" } })}
          </TableCell>
          <TableCell align="center">
            {regionLinks[row.region] ? (
              <a href={regionLinks[row.region]}>
                {React.cloneElement(row.enebalogo, { style: { width: 16, height: "auto" } })}
              </a>
            ) : (
              React.cloneElement(row.enebalogo, { style: { width: 16, height: "auto" } })
            )}
          </TableCell>
          <TableCell align="center">
            {React.cloneElement(row.pasabuy, { style: { width: 16, height: "auto" } })}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

          </Card.Body>

          <Card.Header className="content-header">
            <strong><p id="debit-credit-virtual-cards" />Pay using Debit/Credit/Virtual Cards</strong>
          </Card.Header>
          <Card.Body>
            You can use most credit or debit cards from major local banks that
            support Visa or Mastercard.
            <ol>
              <li>
                On the eShop checkout screen, choose <b>Credit Card</b> as your
                payment method
              </li>
              <li>
                Enter your credit/debit/virtual card details (card number,
                expiration date, and CVV).
              </li>
              <li>
                Select <b>Purchase</b> to complete the transaction
              </li>
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
          <Card.Header className="content-header">
            <strong><p id="eshop-gift-cards"/>Pay using Nintendo eShop Gift Card </strong>
          </Card.Header>
          <Card.Body>
            Use Nintendo eShop Gift Cards (Prepaid Cards) to add funds into your
            Nintendo account and purchase your game
            <ol>
              <li>
                On the eShop checkout screen, choose <b>Nintendo eShop Card</b>{" "}
                as your payment method
              </li>
              <li>
                Enter your <b>16-digit Nintendo eShop Prepaid Code</b>
              </li>
              <li>
                Select <b>Purchase</b> to complete the transaction
              </li>
            </ol>
            You can buy Nintendo eShop Gift Cards from our affiliates below:
            <ul>
              <li>
                <a
                  href="https://www.eneba.com/?af_id=maysaleba"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Eneba
                </a>{" "}
                (<a href="#buying-from-eneba" className="giftcardlink">see guide</a>)
              </li>
              <li>
                <a
                  href="https://s.shopee.ph/6V6xDmuabY"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Shopee (US only)
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/3L2qm2e"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Lazada (US only)
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/3pxXLXT"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Codashop (US only)
                </a>
              </li>
            </ul>
          </Card.Body>
          <Card.Header className="content-header">
            <strong><p id="buying-from-shopee-lazada"/>Buy from Shopee and Lazada</strong>
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
           <Card.Header className="content-header">
            <strong><p id="pasabuy"/>Pasabuy</strong>
          </Card.Header>
          <Card.Body>
            <b>Pasabuy</b> is a service that will allow you to buy from Argentina eShop by asking a provider with a valid Argentina issued credit card to top up your eShop account in exchange for a fee.
            <p/>
            <a
                  href="https://www.maysaleba.com/pasabuy"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Learn more about Pasabuy here</a>
          </Card.Body>
          <Card.Header className="content-header">
            <strong><p id="error-2813-2470"/>Why am I getting error 2813-2470 when I try to purchase?</strong>
          </Card.Header>
          <Card.Body>
<b>POSSIBLE CAUSES</b>
<ol><b><li>Insufficient funds in your payment method or merchant account.</li></b>
<ul><li>The prices shown in the website are not exact; they are just estimates.</li>
<li>Make sure you have an additional P20 to P50 balance as an allowance when purchasing.</li></ul>
 <b><li>You have a failed or stuck transaction.</li></b>
  <ul><li>Delete your saved card information or contact the bank/merchant to check on their end.</li>
  <li>Try using a different payment method/card.</li>
  <li>Clear your cache (System Settings &gt; System &gt; Formatting Options).</li>
  </ul>
 <b> <li>Your Switch console or IP might be blocked (just a suspicion!).</li></b>
  <ul><li>If all your payment methods or accounts are encountering the same error, it’s most likely that your Switch + IP has been blocked by the eShop region you were trying to purchase from.</li>
  <li>There’s no known solution at the moment except to wait for the block to be lifted (some say it takes 30 days) or try your luck and contact Nintendo Support.</li>
  </ul>
</ol>
          </Card.Body>

          <Card.Header className="content-header">
            <strong>
              <p id="playstation" />
              PlayStation 4 & 5
            </strong>
          </Card.Header>
          <Card.Header className="content-header">
            <strong>
              <p id="ps-buy-region" />
              How do I buy from a PlayStation Store in another region?
            </strong>
          </Card.Header>
          <Card.Body>
            <ol>
              <li>Setup your account</li>
              <ul>
                <li>
                    Create a new PlayStation Network account
                  {" "}
                  for each region you want to buy from. The region is tied to
                  the account when it is created and <b>cannot be changed</b>{" "}
                  afterwards. Each account needs a different email address.
                  <br />
                  Tip: If you use Gmail, put anything behind a "+" just before
                  the @ and it will still point towards your email. Ex:
                  msbph+US@gmail.com is the same as msbph@gmail.com
                </li>
                <li>
                  When signing up, set the <b>Country/Region</b> to the store
                  you want to buy from.
                </li>
              </ul>
              <li>
                On your PS4/PS5, add the new account (<b>Add User</b>) and sign
                in, or sign in at the PlayStation Store website/app
              </li>
              <li>
                Search for the game, DLC, or content you want to buy and select{" "}
                <b>Add to Cart</b>
              </li>
              <li>
                Proceed to checkout. Steps may vary depending on the payment
                method. <b>See section below</b>
              </li>
            </ol>
          </Card.Body>

          <Card.Header className="content-header">
            <strong>
              <p id="ps-pay-region" />
              How do I pay on a PlayStation Store in another region?
            </strong>
          </Card.Header>
          <Card.Body>
            The table below shows which payment methods you can use on the
            PlayStation Store for each region:
            <p />
            <TableContainer component={Paper}>
              <Table
                className="faq-table"
                size="small"
                aria-label="playstation regions table"
                sx={{
                  width: "100%",
                  tableLayout: "fixed",
                  "& thead th:nth-of-type(1)": { width: "40%" },
                  "& thead th:nth-of-type(2)": { width: "30%" },
                  "& thead th:nth-of-type(3)": { width: "30%" },
                  "& th, & td": {
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    p: { xs: 0.5, sm: 1 },
                    fontSize: { xs: 12, sm: 14 },
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ borderRight: "1px solid rgba(224,224,224,1)" }}>
                      <b>PS Store Region</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
                    >
                      <b>Debit/Credit/Virtual</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>PSN Gift Cards</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {psRows.map(([region, logoClass, dcv]) => (
                    <TableRow
                      key={region}
                      sx={{
                        "& > *": {
                          borderBottom: "1px solid rgba(224,224,224,1)",
                          borderRight: "1px solid rgba(224,224,224,1)",
                        },
                        "& > *:last-child": { borderRight: "none" },
                      }}
                    >
                      <TableCell>
                        <span className={logoClass}>{region}</span>
                      </TableCell>
                      <TableCell align="center">
                        <img src={dcv ? mark : xmark} style={iconStyle} alt={dcv ? "Yes" : "No"} />
                      </TableCell>
                      <TableCell align="center">
                        <a href={psEnebaLinks[region]} target="_blank" rel="noreferrer">
                          <img src={enebalogo} style={iconStyle} alt="Eneba" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p />
            <b>Pay using Debit/Credit/Virtual Cards</b>
            <ol>
              <li>
                At checkout, choose <b>Add a Payment Method</b> then{" "}
                <b>Credit/Debit Card</b>
              </li>
              <li>
                Enter your card details (card number, expiration date, and CVV)
                and billing address
              </li>
              <li>
                Select <b>Confirm</b> to complete the transaction
              </li>
            </ol>
            <b>Pay using PSN Gift Cards</b>
            <ol>
              <li>
                Buy a PSN Gift Card matching your account's region from{" "}
                <a
                  href="https://www.eneba.com/?af_id=maysaleba"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Eneba
                </a>{" "}
                (<a href="#buying-from-eneba" className="giftcardlink">see guide</a>)
              </li>
              <li>
                On PlayStation, go to <b>PlayStation Store</b> &gt;{" "}
                <b>Redeem Codes</b> and enter the 12-digit code
              </li>
              <li>
                The funds are added to your wallet and used automatically at
                checkout
              </li>
            </ol>
          </Card.Body>

          <Card.Header className="content-header">
            <strong><p id="buying-from-eneba"/>
              How do I buy gift cards from Eneba?
            </strong>
          </Card.Header>
          <Card.Body>
          <b>Eneba</b> is an online marketplace where you can purchase Nintendo eShop and PlayStation Network (PSN) gift cards for various regions. Follow these steps to buy codes easily and securely:
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: 16 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep1} />
                </Grid>
                <Grid item xs={8}>
                  <ol>
                    <li>Go to the <a
                  href="https://www.eneba.com/?af_id=maysaleba"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Eneba website</a> or download the app</li>
                    <li>Sign Up if you don’t have an account yet. If you already have an account, click Log In and enter your credentials</li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep2} />
                </Grid>
                <Grid item xs={8}>
                  <ol start="3">
                    <li>Use the search bar on the homepage and type <b>Nintendo eShop</b> or <b>PSN</b></li>
                    <li>Select the gift card region you want to purchase</li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep3} />
                </Grid>
                <Grid item xs={8}>
                  <ol start="5">
                    <li>Choose the desired denomination</li>
                    <li>Select <b>Add to Cart</b> or <b>Buy Now</b></li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep4} />
                </Grid>
                <Grid item xs={8}>
                  <ol start="7">
                    <li>Review your order to ensure the details are correct</li>
                    <li>Select <b>Proceed toCheckout</b></li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep5} />
                </Grid>
                <Grid item xs={8}>
                  <ol start="9">
                    <li>Choose the desired payment method</li>
                    <li>Select <b>Pay Now</b></li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <EnebaStep src={enebastep6} />
                </Grid>
                <Grid item xs={8}>
                  <ol start="11">
                    <li>Once your payment has been completed, go to your <b>Orders</b> to see your gift card code</li>
                    <li>Use that code to add funds to your Nintendo eShop or PlayStation account!</li>
                  </ol>
                </Grid>
              </Grid>
            </Box>
          </Card.Body>

          <Card.Header className="content-header">
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
