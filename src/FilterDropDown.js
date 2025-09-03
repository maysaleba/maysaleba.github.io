import React, { useMemo } from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const FilterDropDown = (props) => {
  const {
    history,
    clearPriceRange,
    priceRangeDropDown,
    onPriceRangeDrop,
    onPriceRangeChange,
    clearGenre,
    onPlatformDrop,
    onPlatformChange,
    platformDropDown,
    onLatestDrop,
    onLatestChange,
    latestDropDown,
    clearSearchChange,
    onFilterChange,
    genreDropDown,
    onDropDownChange,
  } = props;

  // ---------- helpers ----------
  const resetSearchAndPrice = () => {
    clearSearchChange?.();
    clearPriceRange?.();
    onPriceRangeDrop?.("All Price Range");
  };

  const selectPlatform = ({ route, label, value }) => () => {
    if (route) history.push(route);
    resetSearchAndPrice();
    onPlatformChange?.(value);
    onPlatformDrop?.(label);
  };

  const selectLatest = (label) => () => {
    resetSearchAndPrice();
    onLatestChange?.(label);
    onLatestDrop?.(label);
  };

  const selectGenre = (label) => () => {
    resetSearchAndPrice();
    if (label === "All Genres") {
      clearGenre?.();
    } else {
      onFilterChange?.(label);
    }
    onDropDownChange?.(label);
  };

  const selectPrice = (label) => () => {
    clearSearchChange?.();
    onPriceRangeDrop?.(label);
    onPriceRangeChange?.(label);
  };

  // ---------- data sources (easy to extend) ----------
  const PLATFORM_OPTIONS = useMemo(
    () => [
      { label: "All Platforms", value: "", route: "/allgames" },
      { label: "Switch", value: "Switch", route: "/switch" },
      { label: "Switch 2", value: "Switch 2", route: "/switch-2" },
      { label: "Playstation", value: "Playstation", route: "/playstation" },
    ],
    []
  );

  const LATEST_OPTIONS = useMemo(
    () => ["Popular", "Top Rated", "New Discounts", "Latest Release", "Price ↑", "Price ↓"],
    []
  );

  const GENRE_OPTIONS = useMemo(
    () => [
      "All Genres",
      "Action",
      "Adventure",
      "Arcade",
      "Fighting",
      "First-Person",
      "Multiplayer",
      "Music",
      "Platformer",
      "Puzzle",
      "Racing",
      "Role-Playing, RPG",
      "Shooter",
      "Simulation",
      "Sports",
      "Strategy",
      "Unique",
    ],
    []
  );

  const PRICE_OPTIONS = useMemo(
    () => ["All Price Range", "≤ P100", "≤ P250", "≤ P500", "≤ P750", "≤ P1,000", "≤ P1,500", "≤ P2,000", "≤ P2,500", "≤ P3,500+"],
    []
  );

  return (
    <Container fluid="md">
      <Row xs={2} lg={2} sm={2} md={2} xl={2} className="justify-content-md-center">
        {/* Platforms */}
        <Col className="col-style">
          <Dropdown className="m-2">
            <Dropdown.Toggle size="sm" id="dd-platform" className="dropdown-style">
              {platformDropDown}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 dropdown-style">
              {PLATFORM_OPTIONS.map((opt) => (
                <Dropdown.Item key={opt.label} href="#" onClick={selectPlatform(opt)}>
                  {opt.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Latest */}
        <Col className="col-style">
          <Dropdown className="m-2">
            <Dropdown.Toggle size="sm" id="dd-latest" className="dropdown-style w-100">
              {latestDropDown}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 dropdown-style">
              {LATEST_OPTIONS.map((label) => (
                <Dropdown.Item key={label} href="#" onClick={selectLatest(label)}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Genres */}
        <Col className="col-style">
          <Dropdown className="m-2">
            <Dropdown.Toggle size="sm" id="dd-genre" className="dropdown-style">
              {genreDropDown}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 dropdown-menu dropdown-style">
              {GENRE_OPTIONS.map((label) => (
                <Dropdown.Item key={label} href="#" onClick={selectGenre(label)}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Price ranges */}
        <Col className="col-style">
          <Dropdown className="m-2">
            <Dropdown.Toggle size="sm" id="dd-price" className="dropdown-style">
              {priceRangeDropDown}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 dropdown-style">
              {PRICE_OPTIONS.map((label) => (
                <Dropdown.Item key={label} href="#" onClick={selectPrice(label)}>
                  {/* render the < and spacing exactly like before */}
                      {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(FilterDropDown);
