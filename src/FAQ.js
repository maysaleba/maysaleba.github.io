import React from "react";
import { Card } from "react-bootstrap";
import { Paper, Grid, Box, TableHead, TableRow, Table, TableBody, TableCell, TableContainer, Button, Modal } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
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


const FaqHeader = ({ id, children, section = false, aliases = [] }) => {
  const [copied, setCopied] = React.useState(false);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#${id}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      const didCopy = document.execCommand("copy");
      input.remove();
      if (!didCopy) return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {aliases.map((alias) => (
        <span key={alias} id={alias} style={{ display: "block", height: 0 }} />
      ))}
      <Card.Header
        id={id}
        className={`content-header${section ? " faq-section-header" : ""}`}
        style={{ display: "flex", alignItems: "center", gap: 8 }}
      >
        <strong>{children}</strong>
        <Button
          size="small"
          className="faq-copy-link-button"
          onClick={copyLink}
          startIcon={<LinkIcon fontSize="small" />}
          aria-label={copied ? "Link copied" : `Copy link to ${id}`}
          title={copied ? "Copied!" : "Copy link"}
          style={{ marginLeft: "auto", minWidth: "auto", textTransform: "none", flexShrink: 0 }}
        >
          <span className="faq-copy-link-label">
            {copied ? "Copied!" : "Copy link"}
          </span>
        </Button>
      </Card.Header>
    </>
  );
};


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
        Canada: "https://www.eneba.com/nintendo-nintendo-eshop-card-10-cad-key-canada?af_id=maysaleba&currency=PHP&region=global",
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
        Philippines: "https://www.eneba.com/nintendo-nintendo-eshop-card-1160-php-key-philippines?af_id=maysaleba&currency=PHP&region=global",
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
      <img src={xmark} />,
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
      <img src={xmark} />,
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
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Denmark",
      "deregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Europe",
      "euregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Hong Kong",
      "hkregion-logo",
      <img src={xmark} />,
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
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Mexico",
      "mxregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "New Zealand",
      "nzregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Norway",
      "noregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Peru",
      "peregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "Philippines",
      "phregion-logo",
      <img src={mark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Poland",
      "plregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
     createData(
      "Singapore",
      "sgregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "South Africa",
      "zaregion-logo",
      <img src={xmark} />,
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
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Switzerland",
      "chregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "Thailand",
      "thregion-logo",
      <img src={xmark} />,
      <img src={xmark} />,
      <img src={xmark} />
    ),
    createData(
      "United Kingdom",
      "gbregion-logo",
      <img src={xmark} />,
      <img src={enebalogo} style={{ width: "17px" }} />,
      <img src={xmark} />
    ),
    createData(
      "United States",
      "usregion-logo",
      <img src={xmark} />,
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
                <a href="#sw-buy-region" className="giftcardlink">
                  How do I buy from a Nintendo eShop in another region?
                </a>
              </li>
              <li>
                <a href="#sw-pay-region" className="giftcardlink">
                  How do I pay on a Nintendo eShop in another region?
                </a>
                <ul>
                  <li>
                    <a href="#sw-pay-cards" className="giftcardlink">
                      Pay using PH Payment Cards
                    </a>
                  </li>
                  <li>
                    <a href="#sw-pay-gift-cards" className="giftcardlink">
                      Pay using Nintendo eShop Gift Card
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#sw-ph-1" className="giftcardlink">
                  Can I still use my Philippine-issued credit/debit/virtual card to buy games from another region?
                </a>
              </li>
              <li>
                <a href="#sw-ph-2" className="giftcardlink">
                  Can I still buy games from other regions?
                </a>
              </li>
              <li>
                <a href="#sw-ph-3" className="giftcardlink">
                  Do I need to change my current region to PH?
                </a>
              </li>
              <li>
                <a href="#sw-ph-4" className="giftcardlink">
                  Hindi ako makapag-switch to PH kasi may remaining balance ako.
                </a>
              </li>
              <li>
                <a href="#sw-ph-5" className="giftcardlink">
                  What happens to games I purchased from other regions when I switch to PH?
                </a>
              </li>
              <li>
                <a href="#sw-ph-6" className="giftcardlink">
                  What happens to DLCs I purchased from other regions when I switch to PH?
                </a>
              </li>
              <li>
                <a href="#sw-ph-7" className="giftcardlink">
                  For future DLC purchases, do I now need to buy the PH version of the DLC?
                </a>
              </li>
              <li>
                <a href="#sw-ph-8" className="giftcardlink">
                  Bakit hindi ko na makita lahat ng regions sa MaySaleBa website, like Thailand, Malaysia, Singapore, etc.?
                </a>
              </li>
              <li>
                <a href="#sw-ph-9" className="giftcardlink">
                  May English support ba ang games from other eShop regions?
                </a>
              </li>
              <li>
                <a href="#sw-error-2813-2470" className="giftcardlink">
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
                <ul>
                  <li>
                    <a href="#ps-pay-cards" className="giftcardlink">
                      Pay using PH Payment Cards
                    </a>
                  </li>
                  <li>
                    <a href="#ps-pay-gift-cards" className="giftcardlink">
                      Pay using PSN Gift Cards
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div style={{ fontWeight: "bold" }}>
              <a href="#other-questions" className="giftcardlink">
                Other Questions
              </a>
            </div>
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

          <FaqHeader id="nintendo-switch" section>Nintendo Switch</FaqHeader>
          <FaqHeader id="sw-buy-region">How do I buy from a Nintendo eShop in another region?</FaqHeader>
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

          <FaqHeader id="sw-pay-region">How do I pay on a Nintendo eShop in another region?</FaqHeader>
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
    <colgroup>
      <col style={{ width: "40%" }} />
      <col style={{ width: "20%" }} />
      <col style={{ width: "20%" }} />
      <col style={{ width: "20%" }} />
    </colgroup>
    <TableHead>
      <TableRow>
        <TableCell style={{ borderRight: "1px solid rgba(224,224,224,1)" }}>
          <b>eShop Region</b>
        </TableCell>
        <TableCell
          align="center"
          style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
        >
          <b>PH Payment Cards</b>
        </TableCell>
        <TableCell
          align="center"
          style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
        >
          <b>
            <span className="faq-table-header-full">eShop Gift Cards</span>
            <span className="faq-table-header-mobile">Gift Cards</span>
          </b>
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
          <TableCell
            align="center"
            className={row.dcvcard.props.src === mark ? "faq-status-yes" : "faq-status-no"}
          >
            {/* keep icons tiny so columns stay narrow */}
            {React.cloneElement(row.dcvcard, { style: { width: 16, height: "auto" } })}
          </TableCell>
          <TableCell
            align="center"
            className={regionLinks[row.region] ? "faq-status-yes" : "faq-status-no"}
          >
            {regionLinks[row.region] ? (
              <a className="faq-eneba-cell-link" href={regionLinks[row.region]} aria-label={`${row.region} eShop gift card on Eneba`}>
                <span style={{ position: "relative", display: "inline-flex", lineHeight: 0 }}>
                  {React.cloneElement(row.enebalogo, { style: { width: 16, height: "auto" } })}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -6,
                      width: 13,
                      lineHeight: 0,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: 13,
                        backgroundColor: "var(--surface-bg, #fff)",
                        WebkitMaskImage: `url(${mark})`,
                        maskImage: `url(${mark})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        transform: "scale(1.35)",
                      }}
                    />
                    <img src={mark} style={{ position: "relative", width: "100%", height: "auto" }} />
                  </span>
                </span>
              </a>
            ) : (
              React.cloneElement(row.enebalogo, { style: { width: 16, height: "auto" } })
            )}
          </TableCell>
          <TableCell
            align="center"
            className={row.pasabuy.props.src === mark ? "faq-status-yes" : "faq-status-no"}
          >
            {React.cloneElement(row.pasabuy, { style: { width: 16, height: "auto" } })}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

          </Card.Body>

          <FaqHeader
            id="sw-pay-cards"
            aliases={["debit-credit-virtual-cards"]}
          >
            Pay using PH Payment Cards
          </FaqHeader>
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
          <FaqHeader
            id="switch-pay-gift-cards"
            aliases={["eshop-gift-cards"]}
          >
            Pay using Nintendo eShop Gift Card
          </FaqHeader>
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
          <FaqHeader id="buying-from-shopee-lazada">Buy from Shopee and Lazada</FaqHeader>
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
          <FaqHeader id="pasabuy">Pasabuy</FaqHeader>
          <Card.Body>
            <b>Pasabuy</b> is a service that will allow you to buy from Argentina eShop by asking a provider with a valid Argentina issued credit card to top up your eShop account in exchange for a fee.
            <p/>
            <a
                  href="https://www.maysaleba.com/pasabuy"
                  target="_blank" rel="noreferrer"
                  style={{ color: "#fc430a", fontWeight: "bold" }}
                >Learn more about Pasabuy here</a>
          </Card.Body>
          <FaqHeader id="sw-ph-1">
            Can I still use my Philippine-issued credit/debit/virtual card to buy games from another region?
          </FaqHeader>
          <Card.Body>
            Not anymore. Since may sarili na tayong Nintendo eShop, PH-issued
            credit, debit, and virtual cards will no longer work for purchases
            from other regions.
            <p />
            This also includes PayPal if the linked card is PH-issued.
          </Card.Body>
          <FaqHeader id="sw-ph-2">
            Can I still buy games from other regions?
          </FaqHeader>
          <Card.Body>
            Yes! You can still purchase games using gift cards. Regions that
            support gift cards, such as US, Japan, Brazil, etc., will continue
            to work as usual.
            <p />
            The pasabuy method for Argentina will also continue to work.
            <p />
            Check the <a href="#sw-pay-region" className="giftcardlink">payment table</a> to see which regions support gift cards.
          </Card.Body>
          <FaqHeader id="sw-ph-3">
            Do I need to change my current region to PH?
          </FaqHeader>
          <Card.Body>
            Not necessarily. Pero since limited na ang payment options natin sa
            ibang regions, it's best to switch to the PH eShop para magamit mo
            pa rin ang local cards mo for purchases.
          </Card.Body>
          <FaqHeader id="sw-ph-4">
            Hindi ako makapag-switch to PH kasi may remaining balance ako.
          </FaqHeader>
          <Card.Body>
            You'll need to zero out your remaining balance first. You can
            contact Nintendo Support to have it removed.
            <p />
            Some regions also allow you to forfeit your remaining balance when
            switching regions. Pwede kang mag-switch muna sa region na may
            ganitong option (US), forfeit your balance, then switch to PH.
          </Card.Body>
          <FaqHeader id="sw-ph-5">
            What happens to games I purchased from other regions when I switch to PH?
          </FaqHeader>
          <Card.Body>
            Nothing! Your purchased games will continue to work as usual.
          </Card.Body>
          <FaqHeader id="sw-ph-6">
            What happens to DLCs I purchased from other regions when I switch to PH?
          </FaqHeader>
          <Card.Body>
            Same as your games, your purchased DLCs will continue to work as
            long as they're compatible with your base game.
          </Card.Body>
          <FaqHeader id="sw-ph-7">
            For future DLC purchases, do I now need to buy the PH version of the DLC?
          </FaqHeader>
          <Card.Body>
            Not necessarily. DLC compatibility depends on the region/version of
            your base game, not your account's current region.
            <p />
            Here's a long-known trick to check if a DLC from another region is
            compatible with your base game:
            <ol>
              <li>Select your base game from the HOME Menu.</li>
              <li>
                Press <b>+</b> → <b>Software Information</b> → <b>Nintendo eShop</b>.
              </li>
              <li>
                Select the account associated with the region where you want to
                purchase the DLC. For example, if you want to check
                compatibility with the PH eShop, select your PH account.
              </li>
              <li>
                If the game's product page opens successfully, it's a good
                indication that DLCs from that region will be compatible with
                your base game.
              </li>
            </ol>
          </Card.Body>
          <FaqHeader id="sw-ph-8">
            Bakit hindi ko na makita lahat ng regions sa MaySaleBa website, like Thailand, Malaysia, Singapore, etc.?
          </FaqHeader>
          <Card.Body>
            I intentionally filtered out regions where we no longer have a way
            to purchase games, whether through PH-issued cards or gift cards.
            <p />
            You can still view their prices (if available) by selecting
            <b> Show All Regions</b> on a game's page.
          </Card.Body>
          <FaqHeader id="sw-ph-9">
            May English support ba ang games from other eShop regions?
          </FaqHeader>
          <Card.Body>
            Not always. English support varies depending on the game and region.
            You can check this by visiting the game's eShop page and looking
            under <b>Supported Languages</b>.
            <p />
            However, games listed on the MaySaleBa website are already filtered
            to show only those with English support, so you don't have to check
            them manually.
          </Card.Body>
          <FaqHeader id="sw-error-2813-2470">Why am I getting error 2813-2470 when I try to purchase?</FaqHeader>
          <Card.Body>
            This error usually means the payment card you’re using was not issued
            in the same country or region as the Nintendo eShop. Use a card
            issued in the country or region of the eShop you’re purchasing from.
            <p />
            If you’re already using a card issued in that region, check that you
            have enough available funds (the prices shown here are estimates, so
            leave an extra P20–P50) and contact your bank or Nintendo Support if
            the error continues.
          </Card.Body>

          <FaqHeader id="playstation" section>PlayStation 4 &amp; 5</FaqHeader>
          <FaqHeader id="ps-buy-region">How do I buy from a PlayStation Store in another region?</FaqHeader>
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

          <FaqHeader id="ps-pay-region">How do I pay on a PlayStation Store in another region?</FaqHeader>
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
                <colgroup>
                  <col style={{ width: "40%" }} />
                  <col style={{ width: "30%" }} />
                  <col style={{ width: "30%" }} />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ borderRight: "1px solid rgba(224,224,224,1)" }}>
                      <b>PS Store Region</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ borderRight: "1px solid rgba(224,224,224,1)" }}
                    >
                      <b>PH Payment Cards</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>
                        <span className="faq-table-header-full">PSN Gift Cards</span>
                        <span className="faq-table-header-mobile">Gift Cards</span>
                      </b>
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
                      <TableCell
                        align="center"
                        className={dcv ? "faq-status-yes" : "faq-status-no"}
                      >
                        <img src={dcv ? mark : xmark} style={iconStyle} alt={dcv ? "Yes" : "No"} />
                      </TableCell>
                      <TableCell align="center" className="faq-status-yes">
                        <a className="faq-eneba-cell-link" href={psEnebaLinks[region]} target="_blank" rel="noreferrer">
                          <span style={{ position: "relative", display: "inline-flex", lineHeight: 0 }}>
                            <img src={enebalogo} style={iconStyle} alt="Eneba" />
                            <span
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                top: -5,
                                right: -6,
                                width: 13,
                                lineHeight: 0,
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  width: "100%",
                                  height: 13,
                                  backgroundColor: "var(--surface-bg, #fff)",
                                  WebkitMaskImage: `url(${mark})`,
                                  maskImage: `url(${mark})`,
                                  WebkitMaskSize: "contain",
                                  maskSize: "contain",
                                  WebkitMaskRepeat: "no-repeat",
                                  maskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center",
                                  maskPosition: "center",
                                  transform: "scale(1.35)",
                                }}
                              />
                              <img src={mark} style={{ position: "relative", width: "100%", height: "auto" }} />
                            </span>
                          </span>
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card.Body>
          <FaqHeader id="ps-pay-cards">Pay using PH Payment Cards</FaqHeader>
          <Card.Body>
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
          </Card.Body>
          <FaqHeader id="ps-pay-gift-cards">Pay using PSN Gift Cards</FaqHeader>
          <Card.Body>
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

          <FaqHeader id="other-questions" section>Other Questions</FaqHeader>
          <FaqHeader id="buying-from-eneba">How do I buy gift cards from Eneba?</FaqHeader>
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

          <FaqHeader id="contact-us">How can I contact you?</FaqHeader>
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
