import React from "react";
import { Card } from "react-bootstrap";
import NaviBar from "./NaviBar";
import discord from "./images/discord.jpg";
import regionality from "./images/regionality_invite.jpg";
import language from "./images/language.jpg";
import purchase from "./images/purchase.jpg";
import CreateTicket from "./images/create_ticket.jpg";
import form from "./images/form.jpg";
import ticket from "./images/ticket.jpg";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Button from "@mui/material/Button";

function createData(name, calories) {
  return { name, calories };
}

// Create a new Date object
const currentDate = new Date();

// Create a string representation of the current date
const formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

const rows = [
  createData("10,000 ARS", "P1,500"),
  createData("20,000 ARS", "P2,900"),
  createData("30,000 ARS", "P4,400"),
  createData("40,000 ARS", "P5,800"),
  createData("50,000 ARS", "P6,750"),
  createData("100,000 ARS", "P12,500"),
];

const DiscordModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={discord}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={discord}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const TicketModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={ticket}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={ticket}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const FormModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={form}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={form}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const CreateTicketModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={CreateTicket}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={CreateTicket}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const PurchaseModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={purchase}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={purchase}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const LanguageModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={language}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Discord"
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
            src={language}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Discord"
          />
        </Box>
      </Modal>
    </>
  );
};

const RegionalityModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={regionality}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="Regionality"
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
            src={regionality}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Regionality"
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

const About = ({ filteredReviews, pageData, reviewsps }) => {
  // console.log(matchGames[0].description.split('\n'));

  return (
    <div>
      <NaviBar />
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>
          <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            <InfoIcon /> Argentina Pasabuy
          </Card.Header>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>What is Pasabuy?</strong>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                As of August 2023,{" "}
                <span className="arregion-logo">Argentina</span> eShop region
                has stopped accepting debit or credit cards that have not been
                issued in their country.
              </li>
              <li>
                "Pasabuy" is a service that will allow you to continue buying
                from Argentina eShop by asking a provider with a valid Argentina
                issued credit card to top up your eShop account in exchange for
                a fee.
              </li>
              <li>
                <b>
                  A credit card number will be provided. NO DETAILS ARE REQUIRED
                  FROM YOU.
                </b>
              </li>
              <li>
                For proper queuing of orders, a "Pasabuy" is done through
                Discord servers. You can check our affiliate Pasabuy servers
                below.
              </li>
            </ul>
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>Pasabuy Discord Servers</strong>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <a
                  className="giftcardlink"
                  href="https://discord.gg/regionality"
                >
                  Regionality
                </a>
              </li>
              <li>
                <a className="giftcardlink" href="https://discord.gg/localized">
                  Localized
                </a>
              </li>
            </ul>
          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>How to Order?</strong>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <a className="giftcardlink" href="#join">
                  Joining a Discord Server
                </a>
              </li>
              <li>
                <a className="giftcardlink" href="#order">
                  Placing an Order
                </a>
              </li>
              <li>
                <a className="giftcardlink" href="#rates">
                  Denomination and Rates
                </a>
              </li>
            </ul>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              <p id="join" />
              Joining a Discord Server
            </strong>
          </Card.Header>
          <Card.Body>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <DiscordModal />
                </Grid>
                <Grid item xs={8}>
                  1. Download and install Discord on your selected platform. You
                  can get Discord from the links below:
                  <ul>
                    <li>
                      Windows/PC:{" "}
                      <a
                        className="giftcardlink"
                        href="https://discord.com/download"
                      >
                        Download Discord to Talk, Chat, and Hang Out
                      </a>
                    </li>
                    <li>
                      Android:{" "}
                      <a
                        className="giftcardlink"
                        href="https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US"
                      >
                        Discord: Talk, Chat & Hang Out - Apps on Google Play
                      </a>
                    </li>
                    <li>
                      iOS:{" "}
                      <a
                        className="giftcardlink"
                        href="https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746"
                      >
                        Discord - Chat, Talk & Hangout on the App Store
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <RegionalityModal />
                </Grid>
                <Grid item xs={8}>
                  2. Once you have Discord installed, choose a server and select{" "}
                  <b>Accept Invite</b> on the next screen.
                  <ul>
                    <li>
                      <a
                        className="giftcardlink"
                        href="https://discord.gg/regionality"
                      >
                        Regionality
                      </a>
                    </li>
                    <li>
                      <a
                        className="giftcardlink"
                        href="https://discord.gg/localized"
                      >
                        Localized
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <p />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <LanguageModal />
                </Grid>
                <Grid item xs={8}>
                  3. If you are joining Regionality Discord Server, make sure
                  you select your preferred language to continue.
                </Grid>
              </Grid>
            </Box>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              <p id="order" />
              Placing an Order
            </strong>
          </Card.Header>
          <Card.Body>
            <p />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <PurchaseModal />
              </Grid>
              <Grid item xs={8}>
                Steps below may differ slightly based on the server you choose
                but concept should be similar across servers.
                <br />
                1. To place an order, look into the server's channel list and
                select <br/><b>Create-a-Ticket</b>
              </Grid>
            </Grid>
            <p />{" "}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CreateTicketModal />
              </Grid>
              <Grid item xs={8}>
                2. On the Create-a-Ticket screen, navigate to the section you want to do top-up/pasabuy (Nintendo, PS4, PS5, Xbox). <br/>Tap on the amount dropdown.
              </Grid>
            </Grid>
            <p />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormModal />
              </Grid>
              <Grid item xs={8}>
                3. Select the service or denomination. You can choose a fixed top-up amount, <b>or if you only want to purchase a single game, choose Pasabuy Argentina</b>
                <ul>
                  <li>
                    Note: The price for using Pasabuy for a single game will be slightly higher than using a fixed top-up. Please check with your support person for the exact amount.
                  </li>
                  <li> For top-ups, 
                     See{" "}
                    <a className="giftcardlink" href="#rates">
                      Top-up Rates
                    </a>

                  </li>

                </ul>
              </Grid>
            </Grid>
            <p />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TicketModal />
              </Grid>
              <Grid item xs={8}>
                4. Enter your preferred payment method and select <b>Submit</b> <br/>A ticket will be created and added into the server's channel
                list. Wait for someone to message and guide you through the
                process.
                <p />
                <b>
                  Topping up in Argentina is a trial and error process, It might
                  work on your existing account or not. Providers may offer a
                  new account with funds as an alternative. <p />
                  Please be patient.{" "}
                </b>
                If all goes well, you will have your selected denomination in
                your account, ready for spending!
              </Grid>
            </Grid>
          </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
            <strong>
              <p id="rates" />
              Denomination and Rates
            </strong>
          </Card.Header>
          <Card.Body>
            <>
              {" "}
              <Box
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ffc4c4",
                  marginBottom: 10,
                  padding: 8,

                  textAlign: "center",
                }}
              >
                Prices as of <b>{formattedDate}</b>
              </Box>
            </>

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
                      <b>Denomination</b>
                    </TableCell>
                    <TableCell style={{ fontFamily: "system-ui" }} align="left">
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "& > *": {
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                          borderRight: "1px solid rgba(224, 224, 224, 1)", // Apply borderRight to all cells
                        },
                        "& > *:last-child": {
                          borderRight: "none", // Exclude last child from having borderRight
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "system-ui",
                          borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        }}
                      >
                        {row.calories}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p />
            <ul>
              <li>Minimum top-up of 1,500 PHP for 10,000 ARS.</li>
              <li>
                Please note that because there is a +21% tax on top of every
                digital purchase in Argentina, you are actually paying 1,500 PHP
                for 12,100 ARS or 620 PHP (as of this writing's foreign
                exchange rate).
              </li>
              <li>
                A pasabuy service's actual mark-up would be: (1,500 - 620) /
                620 = 142%{" "}
              </li>
              <li>
                <b>Is it worth paying 142% more for a game in Argentina?</b>
              </li>
              <ul>
                <li>
                  It depends on the game, Metal Slug Tactics for example:
                  <br />
                  Price in Argentina when on sale: 1388 ARS = 70 PHP * 1.21
                  (Tax) = 85 PHP
                  <br />
                  Pasabuy Service Fee: 85 PHP * 1.42 (Service Fee) = 120 PHP
                  <br />
                  Total Price buying from Argentina: 205 PHP
                  <br />
                  Price in Brazil when on sale (next cheapest region): 541 PHP
                </li>
              </ul>
              <li>
                This means that if you choose to buy 1,500 PHP for 10,000 ARS
                and you get Metal Slug Tactics, you are effectively buying Metal Slug Tactics for 205 PHP as of this writing's foreign exchange rate.{" "}
                <b>Still cheaper than the next cheapest region!</b>
              </li>
              <li>
                <b>
                  Argentina prices reflected on the website already accounts for
                  the 21% tax and 142% service fee, so you would know if it is
                  still the cheapest region to buy all things considered!
                </b>
              </li>
            </ul>
          </Card.Body>
        </div>
      </Paper>
    </div>
  );
};

export default About;
