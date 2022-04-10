import React from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const FilterDropDown = props => {
  const  {
 history,
 clearPriceRange,
 priceRangeDropDown, 
 onPriceRangeDrop, 
 onPriceRangeChange, 
 clearGenre, onPlatformDrop, 
 onPlatformChange, 
 platformDropDown, 
 onLatestDrop, 
 onLatestChange, 
 latestDropDown, 
 clearSearchChange, 
 onFilterChange, 
 genreDropDown, 
 onDropDownChange} = props;
  return (


<Container fluid="md">
<Row xs={2} lg={2} sm={2} md={2} xl={2} className="justify-content-md-center">
       <Col className="col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {platformDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 dropdown-style">
               <Dropdown.Item

          href="#"
          onClick={() => {
          history.push('/allgames');  
          clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onPlatformChange("");
            onPlatformDrop("All Platforms");
          }}
        >
          All Platforms
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            history.push('/switch');
            clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onPlatformChange("Switch");
            onPlatformDrop("Switch");
          }}
        >
          Switch
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            history.push('/playstation');
            clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onPlatformChange("Playstation");
            onPlatformDrop("Playstation");
          }}
        >
          Playstation
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    </Col>
     <Col className="col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style w-100">
        {latestDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 dropdown-style">
      <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onLatestChange("Top Rated");
            onLatestDrop("Top Rated");
          }}
        >
          Top Rated
        </Dropdown.Item>
               <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
                      clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onLatestChange("New Discounts");
            onLatestDrop("New Discounts");
          }}
        >
          New Discounts
        </Dropdown.Item>
        

        <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
                      clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onLatestChange("Latest Release");
            onLatestDrop("Latest Release");
          }}
        >
          Latest Release
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onLatestChange("Price ↑");
            onLatestDrop("Price ↑");
          }}
        >
          Price ↑
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onLatestChange("Price ↓");
            onLatestDrop("Price ↓");
          }}
        >
          Price ↓
        </Dropdown.Item>
      </Dropdown.Menu >
    </Dropdown>
    </Col>
    <Col className="col-style">
    <Dropdown className="m-2">
      <Dropdown.Toggle fluid="sm" size="sm" id="dropdown-basic" className="dropdown-style">
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 dropdown-menu dropdown-style">
       <Dropdown.Item 
          href="#"
          onClick={() => {
			      clearSearchChange();
            clearGenre();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onDropDownChange("All Genres");
          }}
        >
          All Genres
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
 			      clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Action");
            onDropDownChange("Action");
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
          	clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Adventure");
            onDropDownChange("Adventure");
          }}
        >
          Adventure
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
          	clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Arcade");
            onDropDownChange("Arcade");
          }}
        >
          Arcade
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Fighting");
            onDropDownChange("Fighting");
          }}
        >
          Fighting
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("First-Person");
            onDropDownChange("First-Person");
          }}
        >
          First-Person
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Multiplayer");
            onDropDownChange("Multiplayer");
          }}
        >
          Multiplayer
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Music");
            onDropDownChange("Music");
          }}
        >
          Music
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Platformer");
            onDropDownChange("Platformer");
          }}
        >
          Platformer
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Puzzle");
            onDropDownChange("Puzzle");
          }}
        >
          Puzzle
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Racing");
            onDropDownChange("Racing");
          }}
        >
          Racing
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Role-Playing");
            onDropDownChange("Role-Playing");
          }}
        >
          Role-Playing
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Shooter");
            onDropDownChange("Shooter");
          }}
        >
          Shooter
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Simulation");
            onDropDownChange("Simulation");
          }}
        >
          Simulation
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
            clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Sports");
            onDropDownChange("Sports");
          }}
        >
          Sports
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
                        clearPriceRange();
            onPriceRangeDrop("All Price Range")
            onFilterChange("Strategy");
            onDropDownChange("Strategy");
          }}
        >
          Strategy
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
     <Col className="col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {priceRangeDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 dropdown-style">
       <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
          onPriceRangeDrop("All Price Range")
          onPriceRangeChange("All Price Range");
          }}
        >
          All Price Range
        </Dropdown.Item>
       <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange(); 
          onPriceRangeDrop("< P2500")
          onPriceRangeChange("< P2500");
          }}
        >
          &lt; P2500
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
          onPriceRangeDrop("< P1750")
          onPriceRangeChange("< P1750");
          }}
        >
          &lt; P1750
        </Dropdown.Item>
         <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
          onPriceRangeDrop("< P1000")
          onPriceRangeChange("< P1000");
          }}
        >
          &lt; P1000
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
          onPriceRangeDrop("< P500")
          onPriceRangeChange("< P500");
          }}
        >
           &lt; P500
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
          onPriceRangeDrop("< P250")
          onPriceRangeChange("< P250");
          }}
        >
          &lt; P250
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
</Row>
    </Container>
  );
}

export default withRouter(FilterDropDown);