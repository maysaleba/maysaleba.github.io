import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import CardGroup from "./CardGroup";
import SearchBox from "./SearchBox";
import "./App.css";
import games from "./csvjson.json";
import Content from "./Content";
import FilterDropDown from "./FilterDropDown";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";



function App() {


    function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  const [searchfield, setSearchfield] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterPageGames, setFilterPageGames] = useState([]);

  const filteredGames = games.filter((game) => {
    return (
      game.Title.toLowerCase().includes(searchfield.toLowerCase()) &&
      game.genre.toLowerCase().includes(filterField.toLowerCase())
    );
  });


    const gameFromApp = (games) => {
    var x = 0;
    var y = 20;
    var slicedArray = games.slice(0, 20); //50
    var asliced = [];
    while (slicedArray.length > 0) {
      asliced.push(slicedArray);
      x += 20; //x50
      y += 20; //y100
      slicedArray = games.slice(x, y); //50
    }

    return asliced;
  };



  let pGames = gameFromApp(filteredGames);
  let totalPage = Math.ceil(pGames.length);

  const[index, setIndex] = useState(0);
  const[pageGames, setPageGames] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [genreDropDown, setGenreDropDown] = useState("All genres");
  const onDropDownChange = (dropDownValue) => setGenreDropDown(dropDownValue);


  const fetchPageGames = (data) => {
    setPageGames(data);
  }

  const fetchGames = (currentPage) => {
    const data = pGames[currentPage];
    return data;
  };

  const handlePageClick = (data) => {
    let currentPage = data.selected;
    const currentPagex = fetchGames(currentPage);
    setPageGames(currentPagex);
    setCurrPage(currentPage);
    window.scrollTo(0, 0)
  };


  const onSearchChange = (event) => {
     setSearchfield(event.target.value);
     setPageGames(pGames[0]);
  };



  const clearSearchChange = (event) => {
    setSearchfield("");
  }

  const clearFilter = (event) => {
    setFilterField("");
  }

  const onFilterChange = (filterGenre) => {
    setFilterField(filterGenre);
  };




  return (
    <div>
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <div>
            <Navi />
            <SearchBox 
              searchfield={searchfield}
              onSearchChange={onSearchChange} 
              fetchPageGames ={fetchPageGames}
              pageGames = {pageGames}
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
            />

            <CardGroup 
              games={pageGames} 
              clearFilter={clearFilter} 
              clearSearchChange={clearSearchChange} 
              onFilterChange={onFilterChange} 
              genreDropDown={genreDropDown} 
              onDropDownChange={onDropDownChange}/>

                                  <ReactPaginate
                                  initialPage={currPage}
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

          </div>
        )}      
      />

      
      <Route path="/games/:games" component={Content} />
      <ScrollToTop />
    </Router>
    </div>
  );
}

export default App;