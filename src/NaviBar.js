import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.svg";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import { Link, withRouter } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { Icon } from "@iconify/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const useStyles = makeStyles({
  list: {
    width: 250,
    fontSize: 10,
  },

  body: {
    backgroundColor: "white",
  },
});

const NaviBar = (props) => {
const {
  searchQuery,
  history,
  darkMode,
  setDarkMode,
} = props;
  const classes = useStyles();
const itemsList = [
  {
    text: "Home",
    icon: <HomeIcon />,
    onClick: () => {
      setOpen(false);
      history.push("/");
    },
  },
  {
    text: "Switch",
    icon: <Icon icon="mdi:nintendo-switch" width="24" />,
    onClick: () => {
      setOpen(false);
      history.push("/switch");
    },
  },
  {
    text: "Playstation",
    icon: <Icon icon="bi:playstation" width="24" />,
    onClick: () => {
      setOpen(false);
      history.push("/playstation");
    },
  },
  {
    text: "Flip",
    icon: <Icon icon="mdi:coin" width="24" />,
    onClick: () => {
      setOpen(false);
      history.push("/flip");
    },
  },
  {
    text: "Gift Cards",
    icon: <CardGiftcardIcon />,
    onClick: () => {
      setOpen(false);
      history.push("/giftcards");
    },
  },
  {
    text: "FAQ",
    icon: <InfoIcon />,
    onClick: () => {
      setOpen(false);
      history.push("/faq");
    },
  },
  {
    text: darkMode ? "Dark Mode" : "Light Mode",
    icon: darkMode ? <DarkModeIcon /> : <LightModeIcon />,
    onClick: () => {
      setDarkMode((prev) => !prev);
    },
    isThemeToggle: true,
  },
];

  const [open, setOpen] = useState(false);
  console.log(searchQuery);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "100%",
            maxWidth: { sm: "100%", md: "70%", lg: "53%" },
            mx: "auto",
          }}
        >
          <a className="logocolortext" href="https://maysaleba.com">
            <Stack direction="row" alignItems="center">
              <img
                style={{ marginRight: "10px" }}
                src={logo}
                alt="logo"
                className="logotext"
                width="38"
                height="38"
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  marginRight: "10px",
                  display: { xs: "block", sm: "block" },
                  fontFamily: "woojooaidpmedium",
                  fontSize: 24,
                }}
              >
              maysaleba?
              </Typography>
            </Stack>
          </a>
          <Stack
            direction="row"
            overflow="hidden"
            component="div"
            sx={{
              marginLeft: "auto",
              display: { xs: "none", sm: "flex" },
              fontFamily: "Cairo",
              fontSize: 16,
            }}
          >
            <Link className="logocolortext" to="/switch">
              <Box
                sx={{
                  marginRight: 2,
                  marginLeft: "auto",
                  fontFamily: "Cairo",
                  fontSize: 16,
                }}
              >
                Switch
              </Box>
            </Link>
           <Link className="logocolortext" to="/playstation">
            <Box
              sx={{
                marginRight: 2,
                marginLeft: "auto",
                fontFamily: "Cairo",
                fontSize: 16,
              }}
            >
              Playstation
            </Box>
            </Link>
            <Link className="logocolortext" to="/giftcards">
            
              <Typography
                noWrap
                sx={{
                  marginRight: 2,
                  marginLeft: "auto",
                  fontFamily: "Cairo",
                  fontSize: 16,
                }}
              >
                Gift Cards
              </Typography>
           
           </Link>
           <Link className="logocolortext" to="/faq">
            <Box
              sx={{
                marginRight: 2,
                marginLeft: "auto",
                fontFamily: "Cairo",
                fontSize: 16,
              }}
            >
              FAQ
            </Box>
           </Link>
<button
  type="button"
  className="theme-toggle-btn"
  onClick={() => setDarkMode((prev) => !prev)}
>
  {darkMode ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
</button>
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, ml: 0 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => {}}
          >
            <div className={classes.list}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="space-between"
                p={2}
                style={{ backgroundColor: "#55597d" }}
              >
                <a className="logocolortext" href="https://maysaleba.com">
                  <img
                    style={{ marginRight: "10px" }}
                    src={logo}
                    alt="logo"
                    className="logotext"
                    width="38"
                    height="38"
                  />
                </a>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon style={{ color: "white" }} />
                </IconButton>
              </Box>
              <Divider />
<List>
  {itemsList.map((item) => {
    const { text, icon, onClick, isThemeToggle } = item;

    return (
      <ListItem button key={text} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}

        <ListItemText
          disableTypography
          style={{ fontFamily: "Cairo", fontSize: "16px" }}
          primary={text}
        />

        {isThemeToggle && (
          <span className={`drawer-theme-toggle ${darkMode ? "active" : ""}`}>
            <span className="drawer-theme-toggle-dot" />
          </span>
        )}
      </ListItem>
    );
  })}
</List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

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
