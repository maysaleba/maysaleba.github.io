import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { withRouter } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: 'var(--search-bg)',
  border: '1px',
  // borderStyle: 'solid',
  borderColor: 'var(--search-border)',
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
  color: 'var(--search-text)',
  '& .MuiInputBase-input': {
    '&::placeholder': {
  color: 'var(--search-text)',
  opacity: 0.8,
},
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    paddingRight: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

const SearchAppBar = props => {
const {history, onPlatformDrop, onPlatformChange, onPriceRangeDrop, clearPriceRange, searchQuery, setSearchQuery, clearGenre, onDropDownChange, onRegionChange} = props;
const [searchText, setSearchText] = React.useState(searchQuery || "");
return (
	 <Box sx={{ flexGrow: 1 }}>
	 	<Search sx={{width: {xs: '92vw', md: '50vw', lg: '30vw'}, margin: 'auto', marginBottom: '20px'}}>
	 	<form 
    style={{display: 'flex'}}
    onSubmit={(e) => {
      e.preventDefault();

      const value = searchText;
      const path = history.location.pathname;

      const isPlaystation = path === "/playstation";
      const isSwitch = path === "/switch";
      const isSwitch2 = path === "/switch-2";

      clearGenre();
      clearPriceRange();
      onPriceRangeDrop("All Price Range");
      onDropDownChange("All Genres");
      onRegionChange?.("");
      setSearchQuery(value);

      if (isPlaystation) {
        history.push("/playstation");
        onPlatformChange("Playstation");
        onPlatformDrop("Playstation");
      } else if (isSwitch) {
        history.push("/switch");
        onPlatformChange("Switch");
        onPlatformDrop("Switch");
      } else if (isSwitch2) {
        history.push("/switch-2");
        onPlatformChange("Switch 2");
        onPlatformDrop("Switch 2");
      } else {
  const params = new URLSearchParams();

  if (value.trim()) params.set("s", value.trim());
  params.set("genre", "All Genres");
  params.set("sort", "Popular");
  params.set("price", "All Price Range");

  history.push(`/allgames?${params.toString()}`);

  onPlatformChange("");
  onPlatformDrop("All Platforms");
}
    }}


    >	
            <StyledInputBase
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoComplete="off"
              placeholder="May Sale Ba...?"
              id="s"
            />

{searchText && (
  <IconButton
    type="button"
    onClick={() => {
      setSearchText("");
      setSearchQuery("");
    }}
    sx={{
      position: "absolute",
      right: "42px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "28px",
      height: "28px",
      padding: 0,
      color: "var(--search-text)",
    }}
  >
    <ClearIcon fontSize="small" />
  </IconButton>
)}


            
            <SearchIconWrapper>
            <IconButton type="submit"
            >
              <SearchIcon style={{color:'var(--search-text)'}} />
              </IconButton>
            </SearchIconWrapper>
            </form>
          </Search>
    	</Box>

  );
}

export default withRouter(SearchAppBar);
