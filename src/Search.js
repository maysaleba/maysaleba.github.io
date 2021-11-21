import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { withRouter, Link } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 40,
  backgroundColor: '#ffffff',
  border: '1px',
  // borderStyle: 'solid',
  borderColor: '#55597d',
  // marginLeft: 10,
   "& :first-of-type": {
    flexGrow: 1
  },
  width: 'auto',
 '.MuiInputBase-root': {
    width: '100%',
    
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  // position: 'absolute',
  // pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 5,
  // backgroundColor: 'black',
  // width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    paddingRight: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

const SearchAppBar = props => {
const {history, onPlatformDrop, onPlatformChange, onPriceRangeDrop, clearPriceRange, searchQuery, setSearchQuery, clearGenre, onDropDownChange} = props;
return (
	 <Box sx={{ flexGrow: 1 }}>
	 	<Search sx={{width: {xs: '85vw', md: '50vw', lg: '30vw'}, margin: 'auto', marginBottom: '20px'}}>
	 	<form 
    style={{display: 'flex'}}
    onSubmit={
              (e) => {
              
                history.push('/allgames')
                clearGenre();
                clearPriceRange();
                onPlatformChange("");
                onPlatformDrop("All Platforms");
                onPriceRangeDrop("All Price Range");
                onDropDownChange("All Genres");
                setSearchQuery(e.target.s.value);
            }}


    >	
            <StyledInputBase
              defaultValue={searchQuery}


              // onChange={

              //   (e) => {
              //   clearGenre();
              //   clearPriceRange();
              //   onPlatformChange("");
              //   onPlatformDrop("All Platforms");
              //   onPriceRangeDrop("All Price Range");
              //   onDropDownChange("All Genres");
              //   setSearchQuery(e.target.value);
              //   // document.searchform.submit();

              // }}

              autoComplete="off"
              placeholder="Search All Games…"
              id="s"
            />


            
            <SearchIconWrapper>
            <IconButton type="submit"
            >
              <SearchIcon style={{color:'#55597d'}} />
              </IconButton>
            </SearchIconWrapper>
            </form>
          </Search>
    	</Box>

  );
}

export default withRouter(SearchAppBar);
