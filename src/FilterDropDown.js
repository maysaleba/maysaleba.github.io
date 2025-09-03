import React, { useMemo } from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Cards.css";

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
    onRegionChange,      // <-- add
    regionFilter,        // <-- add
  } = props;


  const isPS = (platformDropDown || "").toLowerCase() === "playstation";

  // ---------- helpers ----------
  const resetSearchAndPrice = () => {
    clearSearchChange?.();
    clearPriceRange?.();
    onPriceRangeDrop?.("All Price Range");
  };

  const resetPriceOnly = () => {
    clearPriceRange?.();
    onPriceRangeDrop?.("All Price Range");
  };

  const selectPlatform = ({ route, label, value }) => () => {
    if (route) history.push(route);
    resetPriceOnly(); 
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
    // clearSearchChange?.();
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

  const REGION_LABEL = {
  "": "Any",
  AR:"Argentina", AU: "Australia", BR: "Brazil", CA:"Canada",
  CO:"Colombia", HK:"Hong Kong", JP:"Japan", KR:"Korea", 
  MX:"Mexico", NO:"Norway", NZ:"New Zealand", PE:"Peru", 
  PL:"Poland", ZA:"South Africa", US:"United States",  
};

const CHEAPEST_OPTIONS = useMemo(
  () => ["", "AR","TR","HK","SG","JP","KR","US","CA","MX","BR","PL","NO","ZA","PE","AU","NZ","CO","PH"],
  []
);

// "HK" -> "hkregion-logo"
const regionIconClass = (code) =>
  code ? `${String(code).toLowerCase()}region-logo` : "";

// small globe icon with same box as flags (so it lines up nicely)
const AnyIcon = () => (
  <span
    aria-hidden
    className="me-2 align-middle"
    style={{ display: "inline-block", width: 15, height: 15, lineHeight: "15px", textAlign: "center" }}
  >
    🌐
  </span>
);


const selectCheapest = (code) => () => {
  onRegionChange?.(code);
};

  return (
    <Container fluid="md">
      <Row className="g-2 justify-content-md-center">
{/* Cheapest region */}
{!isPS && (
  <Col xs={12} className="col-style">
    <Dropdown className="m-2">
      <Dropdown.Toggle size="sm" id="dd-cheapest" className="dropdown-style w-100">
        {regionFilter ? (
          <span
            className={`${regionIconClass(regionFilter)} me-2 align-middle`}
            style={{ display: "inline-block", width: 15, height: 15 }}
            aria-hidden
          />
        ) : (
          <AnyIcon />
        )}
        {`Region: ${REGION_LABEL[regionFilter] ?? "Any"}`}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 dropdown-style">
        {["", "AR","AU","BR","CA","CO","HK","JP","KR","MX","NO","NZ","PE","PL","ZA","US"].map((code) => (
          <Dropdown.Item key={code || "any"} onClick={() => onRegionChange(code)}>
            {code ? (
              <span
                className={`${regionIconClass(code)} me-2 align-middle`}
                style={{ display: "inline-block", width: 15, height: 15 }}
                aria-hidden
              />
            ) : (
              <AnyIcon />
            )}
            <span className="align-middle">{REGION_LABEL[code] ?? "Any"}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Col>
)}



        {/* Platforms */}
        <Col xs={6} className="col-style">
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
       <Col xs={6} className="col-style">
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
        <Col xs={6} className="col-style">
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
        <Col xs={6} className="col-style">
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
