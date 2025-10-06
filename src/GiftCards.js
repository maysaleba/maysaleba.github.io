import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { List, Paper, Grid, Box, TableHead, TableRow, Table, TableBody, TableCell, TableContainer, Button, Modal } from "@mui/material";
import NaviBar from "./NaviBar";
import styled from "styled-components";
import download from "./download.gif";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import mark from "./flags/mark.png";
import xmark from "./flags/xmark.png";
import enebalogo from "./flags/eneba.png";



const GiftCards = ({searchQuery, setSearchQuery}) => {
 function createData(region, logoClass, enebalogo) {
    return { region, logoClass, enebalogo };
  }


  const regionLinks = {
        "United Kingdom": "https://www.eneba.com/nintendo-nintendo-eshop-card-15-gbp-key-united-kingdom?af_id=maysaleba&currency=PHP&region=global",
        Australia: "https://www.eneba.com/nintendo-nintendo-eshop-card-15-aud-key-australia?af_id=maysaleba&currency=PHP&region=global",
        Europe: "https://www.eneba.com/other-nintendo-eshop-card-15-eur-nintendo-key-europe?af_id=maysaleba&currency=PHP&region=global",
        "Hong Kong": "https://www.eneba.com/nintendo-nintendo-eshop-card-100-hkd-key-hong-kong?af_id=maysaleba&currency=PHP&region=global",
        Canada: "https://www.eneba.com/nintendo-nintendo-eshop-card-5-cad-key-canada?af_id=maysaleba&currency=PHP&region=global",
        Mexico: "https://www.eneba.com/nintendo-nintendo-eshop-card-100-mxn-key-mexico?af_id=maysaleba&currency=PHP&region=global",
        Switzerland: "https://www.eneba.com/nintendo-nintendo-eshop-card-20-chf-key-switzerland?af_id=maysaleba&currency=PHP&region=global",
        Poland: "https://www.eneba.com/nintendo-nintendo-eshop-card-70-pln-key-poland?af_id=maysaleba&currency=PHP&region=global",
        "Korea": "",
        US: "https://www.eneba.com/nintendo-nintendo-eshop-card-5-usd-key-united-states?af_id=maysaleba&currency=PHP&region=global",
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
    
    ),
    createData(
      "Australia",
      "auregion-logo",
 
      <img src={enebalogo} style={{ width: "17px" }} />,

    ),
    createData(
      "Brazil",
      "brregion-logo",
 
      <img src={enebalogo} style={{ width: "17px" }} />,
    
    ),
    createData(
      "Canada",
      "caregion-logo",
    
      <img src={enebalogo} style={{ width: "17px" }} />,
    
    ),
    createData(
      "Chile",
      "clregion-logo",
      
      <img src={xmark} />,
      
    ),
    createData(
      "Colombia",
      "coregion-logo",
      
      <img src={xmark} />,
     
    ),
    createData(
      "Denmark",
      "deregion-logo",
    
      <img src={enebalogo} style={{ width: "17px" }} />,
      
    ),
    createData(
      "Europe",
      "euregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
     
    ),
    createData(
      "Hong Kong",
      "hkregion-logo",
      
      <img src={enebalogo} style={{ width: "17px" }} />,
     
    ),
    createData(
      "Japan",
      "jpregion-logo",
      
      <img src={enebalogo} style={{ width: "17px" }} />,
     
    ),
    createData(
      "Mexico",
      "mxregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
      
    ),
    createData(
      "Norway",
      "noregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
      
    ),
    createData(
      "Peru",
      "peregion-logo",
    
      <img src={xmark} />,
   
    ),
    createData(
      "Poland",
      "plregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
     
    ),
    createData(
      "South Africa",
      "zaregion-logo",
    
      <img src={xmark} />,
     
    ),
    createData(
      "South Korea",
      "krregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
    
    ),
    createData(
      "Sweden",
      "seregion-logo",
     
      <img src={enebalogo} style={{ width: "17px" }} />,
     
    ),
    createData(
      "Switzerland",
      "chregion-logo",
    
      <img src={enebalogo} style={{ width: "17px" }} />,
    
    ),
    createData(
      "United Kingdom",
      "gbregion-logo",
      
      <img src={enebalogo} style={{ width: "17px" }} />,
      
    ),
    createData(
      "United States",
      "usregion-logo",
      
      <img src={enebalogo} style={{ width: "17px" }} />,
      
    ),
  ];
  // console.log(matchGames[0].description.split('\n'));
  return (
    <div>
      <NaviBar />
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>

          <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            <CardGiftcardIcon/> Gift Cards
          </Card.Header>
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
                  href="https://www.eneba.com/?af_id=maysaleba"
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
        
         
            <b>Click on the Eneba icon to purchase an eShop Gift Card for that region</b>
              <p/>
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
                        // padding: "0px",
                        // paddingLeft: "20px"
                      }}
                      align="center"
                    >
                      <b>eShop Gift Cards</b>
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
                        }}
                      >
                        {/* Flag Icon */}
                        <span className={row.logoClass}>{row.region}</span>
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          borderRight: "1px solid rgba(224, 224, 224, 1)",
                        }}
                      >
                        {/* Check if regionLinks[row.region] is not an empty string */}
                        {regionLinks[row.region] ? (
                          <a href={regionLinks[row.region]}>{row.enebalogo}</a>
                        ) : (
                          row.enebalogo // Just show the logo without the link
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card.Body>
          
        </div>
      </Paper>
    </div>
  );
};

export default GiftCards;
