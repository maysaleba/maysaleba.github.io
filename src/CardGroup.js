  import React from "react";
  import Cards from "./Cards";
  import { Row } from "react-bootstrap";
  import "./Cards.css";
  import FilterDropDown from "./FilterDropDown";
  import Pagination from '@mui/material/Pagination';
  import PaginationItem from '@mui/material/PaginationItem';
  import Paper from '@mui/material/Paper';
  import useMediaQuery from '@mui/material/useMediaQuery';

  const CardGroup = ({  
    clearPriceRange,
    priceRangeDropDown,
    onPriceRangeDrop,
    onPriceRangeChange,
    onPriceRangeBoundsChange,
    priceRangeLow,
    priceRangeField,
    clearGenre,
    onPlatformDrop,
    onPlatformChange,
    platformDropDown,
    latestDropDown,
    onLatestChange,
    onLatestDrop,
    searchQuery, 
    page, 
    setSearchQuery, 
    filtered, 
    filteredReviews, 
    pageData, 
    maxPage, 
    jumpPage,
    clearFilter,
    clearSearchChange,
    onFilterChange,
    genreDropDown,
    onDropDownChange,
    onRegionChange,     // <-- add
    regionFilter,       // <-- add
    datam,
  }) => {
    const isMobilePagination = useMediaQuery('(max-width:575.98px)');

    const hasActiveRegionFilter =
      (Array.isArray(regionFilter?.include) && regionFilter.include.length > 0) ||
      (Array.isArray(regionFilter?.exclude) && regionFilter.exclude.length > 0) ||
      typeof regionFilter === "string";

    const hasActiveFilters = Boolean(
      searchQuery ||
        genreDropDown !== "All Genres" ||
        latestDropDown !== "Popular" ||
        priceRangeDropDown !== "All Price Range" ||
        platformDropDown !== "All Platforms" ||
        hasActiveRegionFilter
    );

    return (
      <div>

       {/*     <SearchBox search={search} setSearch={setSearch}/>*/}

          <Paper elevation={2} className="custom-container">
            <div className="card-header-custom">

            <FilterDropDown
              clearPriceRange={clearPriceRange}
              priceRangeDropDown={priceRangeDropDown}
              onPriceRangeDrop={onPriceRangeDrop}
              onPriceRangeChange={onPriceRangeChange}
              onPriceRangeBoundsChange={onPriceRangeBoundsChange}
              priceRangeLow={priceRangeLow}
              priceRangeField={priceRangeField}
              clearGenre={clearGenre}
              onPlatformDrop={onPlatformDrop}
              onPlatformChange={onPlatformChange}
              platformDropDown={platformDropDown}
              latestDropDown={latestDropDown}
              onLatestChange={onLatestChange}
              onLatestDrop={onLatestDrop}
              clearFilter={clearFilter}
              clearSearchChange={clearSearchChange}
              onFilterChange={onFilterChange}
              genreDropDown={genreDropDown}
              onDropDownChange={onDropDownChange}
              onRegionChange={onRegionChange}    // <-- add
              regionFilter={regionFilter}        // <-- add
            />
          </div>
       
              {filteredReviews.length > 0 ? (
                <>
                  <Row xs={2} sm={3} md={4} className="g-3">
                    {pageData().map((review, key) => (
                      <div key={key}>
                        <Cards
                          datam={datam}
                          Score={review.SCORE}
                          Title={review.Title}
                          SaleEnds={review.SaleEnds}
                          Genre={review.genre}
                          Slug={review.Slug}
                          Image={review.Image}
                          SalePrice={review.SalePrice}
                          CanadaPrice={review.CanadaPrice}
                          PeruPrice={review.PeruPrice}
                          ArgentinaPrice={review.ArgentinaPrice}
                          AustraliaPrice={review.AustraliaPrice}
                          ColombiaPrice={review.ColombiaPrice}
                          SouthafricaPrice={review.SouthafricaPrice}
                          BrazilPrice={review.BrazilPrice}
                          NorwayPrice={review.NorwayPrice}
                          PolandPrice={review.PolandPrice}
                          NewZealandPrice={review.NewZealandPrice}
                          MexicoPrice={review.MexicoPrice}
                          Discount={review.PercentOff}
                          URL={review.URL}
                          Platform={review.platform}
                          PlusPrice={review.PlusPrice}
                          Price={review.Price}
                          idPrice={review.idPrice}
                          idSalePrice={review.idSalePrice}
                          inPrice={review.inPrice}
                          inSalePrice={review.inSalePrice}
                          sgPrice={review.sgPrice}
                          sgSalePrice={review.sgSalePrice}
                          trPrice={review.trPrice}
                          trSalePrice={review.trSalePrice}
                          usPrice={review.usPrice}
                          usSalePrice={review.usSalePrice}
                          hkPrice={review.hkPrice}
                          hkSalePrice={review.hkSalePrice}
                          ESRBRating={review.ESRBRating}
                          IsPS4={review.IsPS4}
                          IsPS5={review.IsPS5}
                          HongKongPrice={review.HongKongPrice}
                          KoreaPrice={review.KoreaPrice}
                          JapanPrice={review.JapanPrice}
                          SingaporePrice={review.SingaporePrice}
                          MalaysiaPrice={review.MalaysiaPrice}
                          ThailandPrice={review.ThailandPrice}
                        />
                      </div>
                    ))}
                  </Row>
                </>
              ) : (
                <div className="empty-state">
                  <h4>No deals match your current filters.</h4>
                  <p>Try widening your search or clearing the active filters to see more deals.</p>
                  {hasActiveFilters && (
                    <button type="button" className="empty-state-action" onClick={clearFilter}>
                      Clear filters
                    </button>
                  )}
                </div>
              )}
            <p />
            {filteredReviews.length > 0 && maxPage > 1 && (
              <div className="pagination-block">
                <div className="pagination-status">
                  Page {page} of {maxPage}
                </div>
                <Pagination
                  className="pagination"
                  color="secondary"
                  size="small"
                  count={maxPage}
                  page={page}
                  siblingCount={isMobilePagination ? 1 : 4}
                  boundaryCount={0}
                  showFirstButton
                  showLastButton
                  onChange={(e, p) => jumpPage(p)}
                  renderItem={(item) => {
                    if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
                      return null;
                    }

                    return <PaginationItem {...item} />;
                  }}
                />
              </div>
            )}

                    </Paper>

                  </div>

      )
  };

  export default CardGroup;
