import React, { useMemo } from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Cards.css";
import { Icon } from "@iconify/react";

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

const Switch2Icon = () => (
  <span
    style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    <Icon icon="mdi:nintendo-switch" width="18" />

    <span
      style={{
        position: "absolute",
        right: "-5px",
        top: "-5px",
        fontSize: "9px",
        fontWeight: "bold",
        lineHeight: 1,
      }}
    >
      2
    </span>
  </span>
);

const platformIcon = (platform) => {
  switch (platform) {
    case "Switch":
      return <Icon icon="mdi:nintendo-switch" width="18" />;

    case "Switch 2":
      return <Switch2Icon />;

    case "Playstation":
      return <Icon icon="bi:playstation" width="18" />;

    case "All Platforms":
      return <Icon icon="mdi:gamepad-variant" width="18" />;

    default:
      return <Icon icon="mdi:gamepad-variant" width="18" />;
  }
};

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
    () => ["All Price Range", "≤ P100", "≤ P250", "≤ P500", "≤ P750", "≤ P1,000", "≤ P1,500", "≤ P2,000", "≤ P2,500", "≤ P2,500+"],
    []
  );

const REGION_LABEL = {
  "": "Any",
  ID: "Indonesia",
  IN: "India",
  TR: "Turkey",
  AR: "Argentina",
  AU: "Australia",
  BR: "Brazil",
  CA: "Canada",
  CO: "Colombia",
  HK: "Hong Kong",
  JP: "Japan",
  MY: "Malaysia",
  MX: "Mexico",
  NO: "Norway",
  NZ: "New Zealand",
  PE: "Peru",
  PL: "Poland",
  SG: "Singapore",
  TH: "Thailand",
  ZA: "South Africa",
  US: "United States",
};

const CHEAPEST_OPTIONS = useMemo(
  () => ["", "AR","TR","HK","SG","JP","US","CA","MX","BR","PL","NO","ZA","PE","AU","NZ","CO","MY","TH","PH"],
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
    <Col xs={4} md={4} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-platform" className="dropdown-style w-100">
  <span className="d-inline-flex align-items-center">
    <span className="me-md-2">
      {platformIcon(platformDropDown)}
    </span>

    {/* Desktop only */}
    <span
      className="d-none d-md-inline text-truncate"
      title={platformDropDown}
    >
      {platformDropDown}
    </span>
  </span>
</Dropdown.Toggle>
        <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
          {PLATFORM_OPTIONS.map((opt) => (
<Dropdown.Item as="button" key={opt.label} onClick={selectPlatform(opt)}>
  <span className="d-flex align-items-center">
    <span className="me-2">
      {platformIcon(opt.label)}
    </span>
    {opt.label}
  </span>
</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Latest */}
    <Col xs={4} md={4} className="col-style">
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
    <Col xs={4} md={4} className="col-style">
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

{/* Cheapest Region */}
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
        style={{ maxWidth: "calc(100% - 1.5rem)" }}
        title={`Region: ${REGION_LABEL[regionFilter] ?? "Any"}`}
      >
        {`Region: ${REGION_LABEL[regionFilter] ?? "Any"}`}
      </span>
    </Dropdown.Toggle>

    <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
      {(isPS
        ? ["", "ID", "IN", "SG", "TR", "US"]
        : ["", "AR", "AU", "BR", "CA", "CO", "HK", "JP", "MX", "MY", "NO", "NZ", "PE", "PL", "SG", "TH", "ZA", "US"]
      ).map((code) => (
        <Dropdown.Item
          as="button"
          key={code || "any"}
          onClick={() => onRegionChange(code)}
        >
          {code ? (
            <span
              className={`${regionIconClass(code)} align-middle me-2`}
              style={{ display: "inline-block", width: 15, height: 15 }}
              aria-hidden
            />
          ) : (
            <AnyIcon />
          )}

          <span className="align-middle">
            {REGION_LABEL[code] ?? "Any"}
          </span>
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
