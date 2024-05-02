import React from "react";
import { Card } from "react-bootstrap";
import NaviBar from "./NaviBar";
import discord from "./images/discord.jpg"
import regionality from "./images/regionality_invite.jpg"
import Grid from '@mui/material/Grid';
import {
  Paper
} from "@mui/material";
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
          <img src={discord} width='300' style={{borderRadius: "10px"}} alt="Discord"/>
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
          <img src={regionality} width='100%' style={{borderRadius: "10px"}} alt="Regionality"/>
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
            <InfoIcon/> Pasabuy Service
          </Card.Header>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>What is Pasabuy?</strong>
           </Card.Header>
          <Card.Body>
          <ul>
           <li>As of August 2023, the Argentina eShop region has stopped accepting transactions made with debit or credit cards that have not been issued in that country</li>
           <li>"Pasabuy" is a service that will allow you to buy from Argentina by asking a provider with a valid Argentina issued credit card to top up your eShop account in exchange for a fee</li>
           <li><b>A credit card number will be provided. Your account details will not be required and your information will stay private</b></li>
            <li>For proper queuing of orders, a "Pasabuy" is done through Discord. You can check our affiliate Pasabuy channels below</li>
          </ul>
          </Card.Body>


           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>Pasabuy Discord Channels</strong>
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
            <li>Joining a Discord Channel</li>
            <li>Placing an Order</li>
           </ul>
           </Card.Body>
           <Card.Header style={{ backgroundColor: "white" }}>
           <strong>Joining a Discord Channel</strong>
           </Card.Header>
           <Card.Body>
   <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>

 
    <Grid item xs={4}>

  <DiscordModal />
  </Grid>
    <Grid item xs={8}>
    To join a Discord channel, you need to have have Discord downloaded and installed. You can get Discord from the links below:
    <ul>
    <li><a className="giftcardlink" href="https://discord.com/download">Windows/PC: Download Discord to Talk, Chat, and Hang Out</a></li>
    <li><a className="giftcardlink" href="https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US">Android: Discord: Talk, Chat & Hang Out - Apps on Google Play</a></li>
    <li><a className="giftcardlink" href="https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746">iOS: Discord - Chat, Talk & Hangout on the App Store</a></li>
    </ul>
  </Grid>
  </Grid>

  <Grid container spacing={2}>

 
    <Grid item xs={4}>

   <RegionalityModal />
  </Grid>
    <Grid item xs={8}>
    To join a Discord channel, you need to have have Discord downloaded and installed. You can get Discord from the links below:
    <ul>
    <li><a className="giftcardlink" href="https://discord.com/download">Windows/PC: Download Discord to Talk, Chat, and Hang Out</a></li>
    <li><a className="giftcardlink" href="https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US">Android: Discord: Talk, Chat & Hang Out - Apps on Google Play</a></li>
    <li><a className="giftcardlink" href="https://apps.apple.com/us/app/discord-chat-talk-hangout/id985746746">iOS: Discord - Chat, Talk & Hangout on the App Store</a></li>
    </ul>
  </Grid>
  </Grid>

</Box>
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
