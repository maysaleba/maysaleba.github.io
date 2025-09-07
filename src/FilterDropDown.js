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
  CO:"Colombia", HK:"Hong Kong", JP:"Japan", 
  MX:"Mexico", NO:"Norway", NZ:"New Zealand", PE:"Peru", 
  PL:"Poland", ZA:"South Africa", US:"United States",  
};

const CHEAPEST_OPTIONS = useMemo(
  () => ["", "AR","TR","HK","SG","JP","US","CA","MX","BR","PL","NO","ZA","PE","AU","NZ","CO","PH"],
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
  <Row className="g-100 justify-content-md-center">
    {/* Platform */}
    <Col xs={isPS ? 6 : 4} md={isPS ? 6 : 4} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-platform" className="dropdown-style w-100">
  <span
    className="d-inline-block text-truncate align-middle"
    style={{ maxWidth: 'calc(100% - 1.5rem)' }}
    title={platformDropDown}
  >
    {platformDropDown}
  </span>
</Dropdown.Toggle>
        <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
          {PLATFORM_OPTIONS.map((opt) => (
            <Dropdown.Item as="button" key={opt.label} onClick={selectPlatform(opt)}>
              {opt.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Latest */}
    <Col xs={isPS ? 6 : 4} md={isPS ? 6 : 4} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-latest" className="dropdown-style w-100">
  <span
    className="d-inline-block text-truncate align-middle"
    style={{ maxWidth: 'calc(100% - 1.5rem)' }}
    title={latestDropDown}
  >
    {latestDropDown}
  </span>
</Dropdown.Toggle>
        <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
          {LATEST_OPTIONS.map((label) => (
            <Dropdown.Item as="button" key={label} onClick={selectLatest(label)}>
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Genre */}
    <Col xs={isPS ? 6 : 4} md={isPS ? 6 : 4} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-genre" className="dropdown-style w-100">
  <span
    className="d-inline-block text-truncate align-middle"
    style={{ maxWidth: 'calc(100% - 1.5rem)' }}
    title={genreDropDown}
  >
    {genreDropDown}
  </span>
</Dropdown.Toggle>
        <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
          {GENRE_OPTIONS.map((label) => (
            <Dropdown.Item as="button" key={label} onClick={selectGenre(label)}>
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Price */}
    <Col xs={6} md={6} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-price" className="dropdown-style w-100">
  <span
    className="d-inline-block text-truncate align-middle"
    style={{ maxWidth: 'calc(100% - 1.5rem)' }}
    title={priceRangeDropDown}
  >
    {priceRangeDropDown}
  </span>
</Dropdown.Toggle>
        <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
          {PRICE_OPTIONS.map((label) => (
            <Dropdown.Item as="button" key={label} onClick={selectPrice(label)}>
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Cheapest Region — LAST; hidden on PS */}
    {!isPS && (
      <Col xs={6} md={6} className="col-style">
        <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-cheapest" className="dropdown-style w-100">
  {regionFilter ? (
    <span
      className={`${regionIconClass(regionFilter)} align-middle me-2`}
      style={{ display: "inline-block", width: 15, height: 15 }}
      aria-hidden
    />
  ) : (
    <AnyIcon />
  )}
  <span
    className="d-inline-block text-truncate align-middle"
    style={{ maxWidth: 'calc(100% - 1.5rem)' }}  // leave room for caret
    title={`Region: ${REGION_LABEL[regionFilter] ?? "Any"}`}
  >
    {`Region: ${REGION_LABEL[regionFilter] ?? "Any"}`}
  </span>
</Dropdown.Toggle>
          <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
            {["", "AR","AU","BR","CA","CO","HK","JP","MX","NO","NZ","PE","PL","ZA","US"].map((code) => (
              <Dropdown.Item as="button" key={code || "any"} onClick={() => onRegionChange(code)}>
                {code ? (
                  <span
                    className={`${regionIconClass(code)} align-middle me-2`}
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
  </Row>
</Container>

  );
};

export default withRouter(FilterDropDown);

