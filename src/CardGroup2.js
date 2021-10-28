import React from "react";
import Cards from "./Cards";
import { Row } from "react-bootstrap";
import "./Cards.css";
import FilterDropDown from "./FilterDropDown";
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';

const CardGroup = ({  
  clearPriceRange,
  priceRangeDropDown,
  onPriceRangeDrop,
  onPriceRangeChange,
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
}) => {

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
          />
        </div>
            {filteredReviews.length > 0 ? (
              <>        
                <Row xs={2} md={4} className="g-3">
                  {pageData().map((review, key) => (
                    <div key={key}>
                                  <Cards
                                          Score={review.SCORE}
                                          Title={review.Title}
                                          SaleEnds={review.SaleEnds}
                                          Genre={review.genre}
                                          Slug={review.Slug}
                                          Image={review.Image}
                                          SalePrice={review.SalePrice}
                                          Discount={review.PercentOff}
                                          URL={review.URL}
                                          Platform={review.platform}
                                          PlusPrice={review.PlusPrice}
                                  />
                                  
                    </div>
                ))}
                </Row>
              </>
            ) : (
                  <div style={{ textAlign: "center" }}>
                      <h4>No search results.</h4>
                  </div>
                )
          }
          <p/>
             <Pagination className="pagination"
                  color="secondary"
                  size="small"
                  count={maxPage}
                  page={page}
                  onChange={(e, p) => jumpPage(p)}
                />

                  </Paper>


                </div>

    )
};

export default CardGroup;
