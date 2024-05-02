import React from "react";
import { Card } from "react-bootstrap";
import NaviBar from "./NaviBar";
import discord from "./images/discord.jpg"
import regionality from "./images/regionality_invite.jpg"
import language from "./images/language.jpg"
import purchase from "./images/purchase.jpg"
import CreateTicket from "./images/create_ticket.jpg"
import form from "./images/form.jpg"
import ticket from "./images/ticket.jpg"
import Grid from '@mui/material/Grid';
import {
  Paper
} from "@mui/material";
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function createData(name, calories) {
  return {name, calories};
}


// Create a new Date object
const currentDate = new Date();

// Get the current day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based (0 = January)
const year = currentDate.getFullYear();

// Create a string representation of the current date
const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });


const rows = [
  createData('10,000 ARS', '₱1650'),
  createData('20,000 ARS', '₱3150'),
  createData('30,000 ARS', '₱4800'),
  createData('40,000 ARS', '₱6300'),
  createData('50,000 ARS', '₱7500'),
  createData('100,000 ARS', '₱14000'),
];


const DiscordModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={discord} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={discord} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={ticket} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={ticket} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={form} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={form} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={CreateTicket} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={CreateTicket} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={purchase} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={purchase} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={language} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={language} width="100%" style={{borderRadius: "10px"}} alt="Discord"/>
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
        <img src={regionality} width="100%" style={{borderRadius: "10px"}} alt="Regionality"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
          <img src={regionality} width="100%" style={{borderRadius: "10px"}} alt="Regionality"/>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 300,
  transform: 'translate(-50%, -50%)',
  // bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
};


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

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




  return (
    <div>
      <BackgroundContainer>
        <Background />
      </BackgroundContainer>
      <NaviBar />
      <Paper elevation={2} className="content-container">
        <div style={{ fontSize: 14 }}>
        <Card.Header style={{ backgroundColor: "white", fontWeight: "bold" }}>
            <InfoIcon/> Argentina Pasabuy
          </Card.Header>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>What is Pasabuy?</strong>
           </Card.Header>
          <Card.Body>
          <ul>
           <li>As of August 2023, the Argentina eShop region has stopped accepting debit or credit cards that have not been issued in their country.</li>
           <li>"Pasabuy" is a service that will allow you to continue buying from Argentina eShop by asking a provider with a valid Argentina issued credit card to top up your eShop account in exchange for a fee.</li>
           <li><b>A credit card number will be provided. NO DETAILS ARE REQUIRED FROM YOU.</b></li>
            <li>For proper queuing of orders, a "Pasabuy" is done through Discord. You can check our affiliate Pasabuy servers below.</li>
          </ul>
          </Card.Body>


           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>Pasabuy Discord Servers</strong>
           </Card.Header>
          <Card.Body>
           <ul>
           <li><a className="giftcardlink" href="https://discord.gg/regionality">Regionality</a></li>
           <li><a className="giftcardlink" href="https://discord.gg/vwUnW82an9">Cheap Gamers Association</a></li>
           </ul>

          </Card.Body>

          <Card.Header style={{ backgroundColor: "white" }}>
           <strong>How to Order?</strong>
           </Card.Header>
           <Card.Body>
           <ul>
            <li><a className="giftcardlink" href='#join'>Joining a Discord Server</a></li>
            <li><a className="giftcardlink" href='#order'>Placing an Order</a></li>
            <li><a className="giftcardlink" href='#rates'>Denomination and Rates</a></li>
           </ul>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong><p id="join"/>Joining a Discord Server</strong>
           </Card.Header>
           <Card.Body>
   <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>

 
    <Grid item xs={4}>

  <DiscordModal />
  </Grid>
    <Grid item xs={8}>
    Make sure you have Discord downloaded and installed. You can get Discord from the links below:
    <ul>
    <li>Windows/PC: <a className="giftcardlink" href="https://discord.com/download">Download Discord to Talk, Chat, and Hang Out</a></li>
    <li>Android: <a className="giftcardlink" href="https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US">Discord: Talk, Chat & Hang Out - Apps on Google Play</a></li>
    <li>iOS: <a className="giftcardlink" href="https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746">Discord - Chat, Talk & Hangout on the App Store</a></li>
    </ul>
  </Grid>
  </Grid>

  <Grid container spacing={2}>

 
    <Grid item xs={4}>

   <RegionalityModal />
  </Grid>
    <Grid item xs={8}>
    Once you have Discord installed, choose a server below and select <b>Accept Invite</b> on the next screen.
           <ul>
           <li><a className="giftcardlink" href="https://discord.gg/regionality">Regionality</a></li>
           <li><a className="giftcardlink" href="https://discord.gg/vwUnW82an9">Cheap Gamers Association</a></li>
           </ul>
  </Grid>
  </Grid>

   <Grid container spacing={2}>

 
    <Grid item xs={4}>

   <LanguageModal />
  </Grid>
    <Grid item xs={8}>
    If you are joining Regionality Discord Server, make sure you select your preferred language to continue.
  </Grid>
  </Grid>

</Box>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong><p id="order"/>Placing an Order</strong>
           </Card.Header>
           <Card.Body>
           
            <Grid container spacing={2}>
    <Grid item xs={4}>
   <PurchaseModal />
  </Grid>
    <Grid item xs={8}>
    The steps below may differ slightly based on the server you choose but the concept should be similar across servers.
    <p/>To place an order, look into the server's channel list and select <b>PURCHASE-NINTENDO</b>
  </Grid>

  </Grid>

    <Grid container spacing={2}>
    <Grid item xs={4}>
   <CreateTicketModal />
  </Grid>
    <Grid item xs={8}>
    On the PURCHASE-NINTENDO screen, select <b>Create Ticket</b>
  </Grid>

  </Grid>

      <Grid container spacing={2}>
    <Grid item xs={4}>
   <FormModal />
  </Grid>
    <Grid item xs={8}>
   Fill out the form
              <ul>
           <li>Service: Nintendo Top Up</li>
           <li>Amount: <i>Desired Amount.</i> See Denomination and Rates</li>
           <li>Payment Method: <i>Desired Payment Method (Maya, Gcash, PayPal, Binance)</i></li>
           </ul>

           Select <b>Submit</b>
  </Grid>

  </Grid>
     <Grid container spacing={2}>
    <Grid item xs={4}>
   <TicketModal />
  </Grid>
    <Grid item xs={8}>
   A ticket will be created and added into the server's channel list. Wait for someone to message and guide you through the process.
   <p/><b>Topping up in Argentina is a trial and error process, It might work on your existing account or if not, they may offer a new account with the funds as an alternative. <p/>Please be patient and communicate.</b>
  </Grid>

  </Grid>

           </Card.Body>
          <Card.Header style={{ backgroundColor: "white" }}>
           <strong><p id="rates"/>Denomination and Rates</strong>
           </Card.Header>
           <Card.Body>
           Prices as of <b>{formattedDate}</b>
           <p/>
           
             <TableContainer component={Paper}>
      <Table sx={{ width: '100%'}}  size="small" aria-label="a dense table">
<TableHead>
  <TableRow>
    <TableCell style={{ fontFamily: 'system-ui', borderRight: '1px solid rgba(224, 224, 224, 1)' }}><b>Denomination</b></TableCell>
    <TableCell style={{ fontFamily: 'system-ui' }} align="left">Price</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={row.name}
      sx={{
        '& > *': {
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          borderRight: '1px solid rgba(224, 224, 224, 1)', // Apply borderRight to all cells
        },
        '& > *:last-child': {
          borderRight: 'none', // Exclude last child from having borderRight
        },
      }}
    >
      <TableCell component="th" scope="row" style={{ fontFamily: 'system-ui', borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
        {row.name}
      </TableCell>
      <TableCell align="left" style={{ fontFamily: 'system-ui', borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
        {row.calories}
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

export default About;
