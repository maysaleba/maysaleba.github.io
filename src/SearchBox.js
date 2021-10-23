import React from 'react';
import './Cards.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';



const SearchBox = ({setSearch, search, searchfield, onSearchChange, onFilterChange, genreDropDown, onDropDownChange}) => {
// console.log(searchQuery);
//  const history = useHistory();
//     const onSubmit = e => {
//         history.push(`?s=${searchQuery}`)
//         e.preventDefault()
//     };

	return (
    <Container maxWidth="sm">

    <Paper className="searchbox"
      component="form"
      sx={{mx:'auto', p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: 10 }}
    >
      <InputBase
            value={search}
            onChange= {(e) => {
            setSearch(e.target.value);
            
          }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Title in All Games"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton 

      type="submit" sx={{ p: '10px', backgroundColor: '#55597d', color: "white" }} aria-label="search">
        <SearchIcon />
      </IconButton>
{/*      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      </IconButton>*/}
    </Paper>

{/*    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
    <input className="searchbox"
    value={search}
    type='search' 
    placeholder="&#xF002;  Search Title, Publisher in All Games..."
    onChange= {(e) => {
            setSearch(e.target.value);
            
          }}
    />*/}
    </Container>


		// <div className="text-center m-3 p-auto">
		// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
		// <input className="searchbox"
  //   value={searchfield}
		// type='search' 
		// placeholder="&#xF002;  Search Title, Publisher in All Games..."
		// onChange= {(e) => {
  //           onSearchChange(e);
  //           // onFilterChange("");
  //           // onDropDownChange("Genre");
  //         }}
  //   />
		// </div>
		


		)
}

export default SearchBox;


// <Form>
 //  <InputGroup className="m-3 mx-auto" >
 //    <FormControl id="header-search" action="/" method="GET" name="s" autoComplete="off"  onSubmit={onSubmit} placeholder="Search Title, Publisher in All Games..."
 //    />
 //       <button type="submit">Search</button>
 //  </InputGroup>
 //  </Form>


   // <form className="text-center m-3 p-auto" action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
   //      <label htmlFor="header-search">
   //          <span className="visually-hidden">Search blog posts</span>
   //      </label>

   //     {/* value={searchQuery}
   //              onInput={(e) => setSearchQuery(e.target.value)}*/}
   //              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
   //      <input className="searchbox"
   //         // value={searchQuery}
   //              type="text"
   //               // onInput={(e) => searchChange(e.target.value)}
   //              id="header-search"
   //              placeholder="&#xF002;  Search Title, Publisher in All Games..."
   //              name="s" 
   //      />
   //      <button type="submit">Search</button>
   //  </form>


  // <form className="text-center m-3 p-auto" action="/" method="get" onSubmit={onSubmit}>
  //       <label htmlFor="header-search">
  //           <span className="visually-hidden">Search Games</span>
  //       </label>
  //       <input
  //          value={searchQuery}
  //           onInput={e => setSearchQuery(e.target.value)}
  //           type="text"
  //           id="header-search"
  //           placeholder="Search Games"
  //           name="search" 
  //           // onChange = {searchChange}
  //       />
  //       <button type="search">Search</button>
  //   </form>