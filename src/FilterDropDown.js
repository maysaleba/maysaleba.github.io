import React, { useMemo } from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Cards.css";
import { Icon } from "@iconify/react";

const FilterDropDown = (props) => {
  const {
    history,
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
    onFilterChange,
    genreDropDown,
    onDropDownChange,
    onRegionChange,
    regionFilter,
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
  const iconStyle = {
    width: 22,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  };

  switch (platform) {
    case "Switch":
      return (
        <span style={iconStyle}>
          <Icon icon="mdi:nintendo-switch" width="18" />
        </span>
      );

    case "Switch 2":
      return (
        <span style={iconStyle}>
          <Switch2Icon />
        </span>
      );

    case "Playstation":
      return (
        <span style={iconStyle}>
          <Icon icon="bi:playstation" width="18" />
        </span>
      );

    default:
      return (
        <span style={iconStyle}>
          <Icon icon="mdi:gamepad-variant" width="18" />
        </span>
      );
  }
};

  const selectPlatform = ({ route, label, value }) => () => {
    if (route) {
      const params = new URLSearchParams(history.location.search);
      params.delete("page");
      const query = params.toString();
      history.push(query ? `${route}?${query}` : route);
    }
    onPlatformChange?.(value);
    onPlatformDrop?.(label);
  };

  const selectLatest = (label) => () => {
    onLatestChange?.(label);
    onLatestDrop?.(label);
  };

  const selectGenre = (label) => () => {
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
  () => ["Popular", "Best Deals", "Top Rated", "New Discounts", "Latest Release", "Price ↑", "Price ↓" ],
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
  () =>
    isPS
      ? ["HK", "ID", "IN", "SG", "TR", "US"]
      : ["AR", "AU", "BR", "CA", "CO", "HK", "JP", "MX", "MY", "NO", "NZ", "PE", "PL", "SG", "TH", "ZA", "US"],
  [isPS]
);

const regionState = {
  include: Array.isArray(regionFilter?.include)
    ? regionFilter.include.map((x) => String(x || "").trim().toUpperCase()).filter(Boolean)
    : typeof regionFilter === "string" && regionFilter
    ? [regionFilter.trim().toUpperCase()]
    : [],
  exclude: Array.isArray(regionFilter?.exclude)
    ? regionFilter.exclude.map((x) => String(x || "").trim().toUpperCase()).filter(Boolean)
    : [],
};

const includeSet = new Set(regionState.include);
const excludeSet = new Set(regionState.exclude);

const applyRegionFilter = (include, exclude) => {
  onRegionChange?.({
    include: [...new Set(include)],
    exclude: [...new Set(exclude)].filter((code) => !include.includes(code)),
  });
};

const cycleRegionState = (code) => {
  const included = includeSet.has(code);
  const excluded = excludeSet.has(code);

  if (!included && !excluded) {
    applyRegionFilter([...regionState.include, code], regionState.exclude.filter((x) => x !== code));
    return;
  }

  if (included) {
    applyRegionFilter(regionState.include.filter((x) => x !== code), [...regionState.exclude, code]);
    return;
  }

  applyRegionFilter(regionState.include.filter((x) => x !== code), regionState.exclude.filter((x) => x !== code));
};

const clearRegions = () => applyRegionFilter([], []);

const selectedRegionCount = new Set([
  ...regionState.include,
  ...regionState.exclude,
]).size;

const regionRowClass = (code) => {
  if (includeSet.has(code)) return "is-include";
  if (excludeSet.has(code)) return "is-exclude";
  return "";
};

// "HK" -> "hkregion-logo"
const regionIconClass = (code) =>
  code ? `${String(code).toLowerCase()}region-logo` : "";

const AnyGlyph = () => (
  <span className="region-any-glyph" aria-hidden>
    <Icon icon="mdi:web" width="11" />
  </span>
);

// small globe icon with same box as flags (so it lines up nicely)
const AnyIcon = () => (
  <span
    aria-hidden
    className="me-2 align-middle"
    style={{ display: "inline-block", width: 15, height: 15, lineHeight: "15px", textAlign: "center" }}
  >
    <AnyGlyph />
  </span>
);


  return (
<Container fluid="md">
  <Row className="g-100 justify-content-md-center">
    {/* Platform */}
    <Col xs={3} md={4} className="col-style">
      <Dropdown className="m-1">
<Dropdown.Toggle size="sm" id="dd-platform" className="dropdown-style w-100">
  <span className="d-inline-flex align-items-center">
    <span
      className="me-md-2 d-flex align-items-center justify-content-center"
      style={{ width: 22, height: 22 }}
    >
      {platformIcon(platformDropDown)}
    </span>

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
  <span
    className="me-2 d-flex align-items-center justify-content-center"
    style={{ width: 22, height: 22 }}
  >
    {platformIcon(opt.label)}
  </span>

  <span className="d-flex align-items-center">
    {opt.label}
  </span>
</span>
</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>

    {/* Latest */}
    <Col xs={6} md={4} className="col-style">
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


{/* Cheapest Region */}
<Col xs={3} md={4} className="col-style">
  <Dropdown className="m-1" autoClose="outside">
<Dropdown.Toggle size="sm" id="dd-cheapest" className="dropdown-style w-100">
  <span className="region-toggle-icon-wrap" aria-hidden>
    {regionState.include.length === 1 && !regionState.exclude.length ? (
      <span
        className={`${regionIconClass(regionState.include[0])} align-middle`}
        style={{ display: "inline-block", width: 15, height: 15 }}
      />
    ) : (
      <span className="region-toggle-any-icon">
        <AnyGlyph />
      </span>
    )}

    {selectedRegionCount > 0 && (
      <span className="region-icon-badge">{selectedRegionCount}</span>
    )}
  </span>

<span className="region-filter-text">
  Region
</span>
</Dropdown.Toggle>

    <Dropdown.Menu className="w-100 dropdown-style" style={{ zIndex: 2000 }}>
      <Dropdown.Item as="button" className="region-filter-item" onClick={clearRegions}>
        <span className="d-inline-flex align-items-center">
          <AnyIcon />
          <span className="align-middle">Any</span>
        </span>
      </Dropdown.Item>

      {CHEAPEST_OPTIONS.map((code) => (
        <Dropdown.Item
          as="button"
          className={`region-filter-item ${regionRowClass(code)}`}
          key={code}
          onClick={() => cycleRegionState(code)}
        >
          <span className="d-inline-flex align-items-center">
            <span
              className={`${regionIconClass(code)} align-middle me-2`}
              style={{ display: "inline-block", width: 15, height: 15 }}
              aria-hidden
            />
            <span className="align-middle">{REGION_LABEL[code] ?? code}</span>
          </span>
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

    {/* Genre */}
    <Col xs={6} md={6} className="col-style">
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

  </Row>
</Container>

  );
};

export default withRouter(FilterDropDown);
