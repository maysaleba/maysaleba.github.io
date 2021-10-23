import * as React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Stack, Container} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.svg';


export default function NaviBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#55597d" }}>
        <Toolbar sx={{ 
          justifyContent: "space-between", 
          width: "100%",
          maxWidth: {md:'63%', lg: '63%'},
          mx: "auto" }}>
          <a style={{color: 'white'}} href="https://maysaleba.com">
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
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
