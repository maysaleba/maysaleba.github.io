import React from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";

function FilterDropDown({clearGenre, onPlatformDrop, onPlatformChange, platformDropDown, onLatestDrop, onLatestChange, latestDropDown, clearFilter, clearSearchChange, onFilterChange, genreDropDown, onDropDownChange }) {
  return (


<Container fluid="md">
<Row xs={2} lg={2} sm={2} md={2} xl={2} className="justify-content-md-center">
       <Col className="col-style">
     <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dropdown-basic" className="dropdown-style">
        {platformDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
       <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
            onPlatformChange("");
            onPlatformDrop("All Platforms");
          }}
        >
          All Platforms
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
      clearSearchChange();
            onPlatformChange("Switch");
            onPlatformDrop("Switch");
          }}
        >
          Switch
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
            clearSearchChange();
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

      <Dropdown.Menu className="w-100">
      <Dropdown.Item
          href="#"
          onClick={() => {
          clearSearchChange();
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

      <Dropdown.Menu className="w-100 dropdown-menu">
       <Dropdown.Item 
          href="#"
          onClick={() => {
			      clearSearchChange();
            clearGenre();
            onDropDownChange("All Genres");
          }}
        >
          All Genres
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
 			      clearSearchChange();
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
        {genreDropDown}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
       <Dropdown.Item
          href="#"
          onClick={() => {
      clearSearchChange();
            clearFilter();
            onDropDownChange("All Genres");
          }}
        >
          All Genres
        </Dropdown.Item>
        <Dropdown.Item
          href="#"
          onClick={() => {
      clearSearchChange();
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
            onFilterChange("Role-Playing");
            onDropDownChange("Role-Playing");
          }}
        >
          Role-Playing
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
</Row>
    </Container>
  );
}

export default FilterDropDown;