import React from "react";
import { Card } from "react-bootstrap";
import NaviBar from "./NaviBar";
import { Paper, Grid, Box, TableHead, TableRow, Table, TableBody, TableCell, TableContainer, Button, Modal } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import download from "./download.gif";
import mark from "./flags/mark.png";
import xmark from "./flags/xmark.png";
import enebalogo from "./flags/eneba.png";
import CloseIcon from "@mui/icons-material/Close";


import seagmstep1 from "./images/seagm_img1.jpeg";
import seagmstep2 from "./images/seagm_img2.jpeg";
import seagmstep3 from "./images/seagm_img3.jpeg";
import seagmstep4 from "./images/seagm_img4.jpeg";
import seagmstep5 from "./images/seagm_img5.jpeg";
import seagmstep6 from "./images/seagm_img6.jpeg";


const SeaGMstep1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep1}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep1}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};

const SeaGMstep2 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep2}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep2}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};

const SeaGMstep3 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep3}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep3}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};

const SeaGMstep4 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep4}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep4}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};


const SeaGMstep5 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep5}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep5}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </>
  );
};


const SeaGMstep6 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={seagmstep6}
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
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
          <img
            src={seagmstep6}
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
      enebalogo: "https://invl.app/clmzdrv", // Seagm logo link
    },
        "United Kingdom": "https://invl.app/clmzdr0",
        Australia: "https://invl.app/clmzdr3",
        Europe: "https://invl.app/clmzdr6",
        "Hong Kong": "https://invl.app/clmzdre",
        Canada: "https://invl.app/clmzdrj",
        Mexico: "https://invl.app/clmzdrl",
        Switzerland: "https://invl.app/clmzdrp",
        Poland: "https://invl.app/clmzdrs",
        "Korea": "",
        US: "https://invl.app/clmzdrv",
        Japan: "https://invl.app/clmzdry",
        Denmark: "https://invl.app/clmzds0",
        Sweden: "https://invl.app/clmzds1",
        Brazil: "https://invl.app/clmzds3",
        Norway: "https://invl.app/clmzds5",
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
      "Mexico",
      "mxregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
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
              Nope, we don’t sell games—we’re just here to let you know which
              region to buy to get the best deals! 🤑
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
                    <a
                      href="#debit-credit-virtual-cards"
                      className="giftcardlink"
                    >
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
                  each time you want to buy from a different eShop. You will
                  need to use any remaining funds before you will be able to
                  change the country.
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
          <b>Region</b>
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

          <Card.Header style={{ backgroundColor: "white" }}>
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
          <Card.Header style={{ backgroundColor: "white" }}>
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
                  href="https://invl.app/clmzdvj"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Eneba
                </a>
              </li>
              <li>
                <a
                  href="https://s.shopee.ph/6V6xDmuabY"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Shopee (US only)
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/3L2qm2e"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Lazada (US only)
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/3pxXLXT"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >
                  Codashop (US only)
                </a>
              </li>
            </ul>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong><p id="buying-from-seagm"/>
              Buy from SEAGM
            </strong>
          </Card.Header>
          <Card.Body>
          <b>SEAGM (SEA Gamer Mall)</b> is a popular online platform where you can purchase eShop Gift Card for various Nintendo eShop regions. Follow these steps to buy eShop codes easily and securely:
                      <Card.Body>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep1 />
                </Grid>
                <Grid item xs={8}>
                  <ol>
                    <li>Go to the                 <a
                  href="https://www.seagm.com/"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >SEAGM website</a> or download the app</li>
                <li><a
                  href="https://member.seagm.com/en-ph/sso/register"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Sign Up</a> if you don’t have an account yet. If you already have an account, click Log In and enter your credentials</li>
                <li>Use the search bar on the homepage and type <b>Nintendo eShop</b></li>
                <li>Select the eShop card region you want to purchase</li>
                  </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep2 />
                </Grid>
                <Grid item xs={8}>
                 <ol start="5">
                 <li>Choose the Desired Denomination and Quantity</li>
                 <li>Select <b>Buy Now</b></li>
                 </ol>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep3 />
                </Grid>
                <Grid item xs={8}>
                  <ol start="7">
                 <li>Choose the Desired Payment Method</li>
                 <ul>
                   <li> SEAGM accepts payment from major local and international banks and payment providers</li>
                 </ul>
                 <li>Select <b>Confirm</b></li>
                 </ol>
                </Grid>
              </Grid>
                            <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep4 />
                </Grid>
                <Grid item xs={8}>
                  <ol start="9">
                 <li>Review your order to ensure the details are correct.</li>
                 <li>Select <b>Pay Now</b></li>
                 </ol>
                </Grid>
              </Grid>
                 <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep5 />
                </Grid>
                <Grid item xs={8}>
                  <ol start="11">
                 <li>Once your payment has been completed and your order processed, go to <b>My Cards</b> to see your eShop Gift Card Code </li>
                 </ol>
                </Grid>
              </Grid>
                 <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <SeaGMstep6 />
                </Grid>
                <Grid item xs={8}>
                  <ol start="12">
                 <li>On the My Cards page, you will see your most recent eShop Gift Card order</li>
                 <li>Select <b>Show</b> to view your 16-digit Prepaid Code</li>
                 <li>You can now use that 16-digit code to add funds to your eShop account!</li>
                 </ol>
                </Grid>
              </Grid>
            </Box>
          </Card.Body>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
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
           <Card.Header style={{ backgroundColor: "white" }}>
            <strong><p id="pasabuy"/>Pasabuy</strong>
          </Card.Header>
          <Card.Body>
            <b>Pasabuy</b> is a service that will allow you to buy from Argentina eShop by asking a provider with a valid Argentina issued credit card to top up your eShop account in exchange for a fee.
            <p/>
            <a
                  href="https://www.maysaleba.com/pasabuy"
                  target="_blank"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Learn more about Pasabuy here</a>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
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
  <li>Clear your cache (System Settings > System > Formatting Options).</li>
  </ul>
 <b> <li>Your Switch console or IP might be blocked (just a suspicion!).</li></b>
  <ul><li>If all your payment methods or accounts are encountering the same error, it’s most likely that your Switch + IP has been blocked by the eShop region you were trying to purchase from.</li>
  <li>There’s no known solution at the moment except to wait for the block to be lifted (some say it takes 30 days) or try your luck and contact Nintendo Support.</li>
  </ul>
</ol>
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
