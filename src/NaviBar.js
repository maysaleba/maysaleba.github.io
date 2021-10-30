import React, { useState } from "react";
import {List, ListItem, ListItemText, ListItemIcon, Divider, Box, AppBar, Toolbar, IconButton, Typography, Stack, Container, toggleDrawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.svg';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { makeStyles } from '@mui/styles';
import { withRouter, Link } from "react-router-dom";
import GamesIcon from '@mui/icons-material/Games';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = makeStyles({
  list: {
    width: 250,
    fontSize: 10,
  }
});


const NaviBar = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: 'Games',
      icon: <GamesIcon/>,
      onClick: () => {
        history.push('/');
      }
    }, 
    {
      text: 'Gift Cards',
      icon: <CardGiftcardIcon />,
      onClick: () => {
        history.push('/giftcards')
      }
    }, 
    {
      text: "FAQ",
      icon: <InfoIcon />,
      onClick: () => history.push('/faq')
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#55597d" }}>
        <Toolbar sx={{ 
          justifyContent: "space-between", 
          width: "100%",
          maxWidth: {md:'63%', lg: '63%'},
          mx: "auto" }}>
          <a className="logocolortext" href="https://maysaleba.com">
          <Stack direction="row" alignItems="center">
            <img
              style={{ marginRight: "10px" }}
              src={logo}
              alt="logo"
              className="logotext"
              width="38"
              height="38"
            /><Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginRight: '10px', display: { xs: 'block', sm: 'block' }, fontFamily: 'woojooaidpmedium', fontSize: 24 }}
          >
            MAYSALEBA?
          </Typography>
          </Stack>
        </a>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, ml: 0 }}
            onClick={()=> setOpen(true)}
            >
            <MenuIcon />
            </IconButton>
            <SwipeableDrawer 
            anchor="right"
            open={open}
            onClose={()=> setOpen(false)}
            onOpen={()=>{}}>
              <div className = {classes.list}>
                <Box textAlign="left" p={2}>
                <a className="logocolortext" href="https://maysaleba.com">
                  <img
              style={{ marginRight: "10px" }}
              src={logo}
              alt="logo"
              className="logotext"
              width="38"
              height="38"
            /></a>
                </Box>
                <Divider />
                  <List>
                  {itemsList.map((item, index) => {
                    const {text , icon, onClick} = item;
                    return (

                    <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    </ListItem>

                    )})}
                  </List>
              </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </Box>

  );
}


export default withRouter(NaviBar);



                // <List>
                //  <Link to={`/`} className="linkto" style={{color: 'black', textDecoration: 'none'}}>
                //   <ListItem button>
                //   <GamesIcon/>
                //     <ListItemText primary={'Games'} />
                //   </ListItem>
                //    </Link>
                //    <Link to={`/giftcards`} className="linkto" style={{color: 'black', textDecoration: 'none'}}>
                //   <ListItem button onClick={() => {}}>
                     
                //     <ListItemText primary={'Gift Cards'} />
                    
                //   </ListItem>
                //   </Link>
                //      <ListItem button onClick={() => {}}>
                //     <ListItemText primary={'Contact Us'} />
                //   </ListItem>
                // </List>