var phpExchange = 50.28;
var mexExchange = 2.50;


var usPriceGetter = function(params) {
    let newSale = params.data.SalePrice * phpExchange;
    let formatted = Math.round(newSale);
    return formatted
};

var mexPriceGetter = function(params) {
    let newSale = params.data.MexPrice * mexExchange;
if (newSale != 0) {
 let formatted = Math.round(newSale);
    return formatted

} else {
  return 9999
}

   
};

var priceGetter = function(params) {
    let newSale = params.data.Price * phpExchange;
    let formatted = Math.round(newSale);
    return formatted
};

var alltimelowGetter = function(params) {
    let newSale = params.data.LowestPrice * phpExchange;
    let formatted = Math.round(newSale);
    return formatted
};

var ratingGetter = function(params) {
    let newRating = params.data.SCORE
    if (newRating == -1) {
        return null
    }
    return newRating

};



var columnDefs = [
 // {
 //        headerName: "Slug",
 //        field: "Slug",
 //        minWidth: 150,
 //        sortable: true,
 //        lockPosition: true,
 //        filter: true,
 //                  cellRenderer: function(params) {
 //                    let newimg = params.data.Slug
 //                    let firstLet = newimg.charAt(0)
 //            let newimgdata = `<img onerror="this.style.display='none'" src="https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_360/ncom/en_US/games/switch/${firstLet}/${newimg}/hero"/>`;
 //             return newimgdata;
 //        }

 //    },


{
         headerName: "Switch",
        field: "Title",
        filter: true, 
        minWidth: 150,
        pinned: 'left',
          lockPosition: true,
            lockPinned: true,
    cellClass: 'lock-pinned',
          resizable: true,
        sortable: true,
        // autoHeight: true,
        // wrapText: true,
       
        // cellStyle: {'white-space': 'normal'},


        //     cellRenderer: function(params) {
        //     let newimg = `<img height="200px" src=https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/g/grindstone-switch/hero.jpg />`;
        //     return newimg;
        // }
        
        cellRenderer: function(params) {
            let keyData = params.value
            let keyLink = params.data.URL
            let newLink = `<a href= https://www.nintendo.com${keyLink} class="link-dark">${keyData}</a>`;
            let newimg = params.data.Slug
            let firstLet = newimg.charAt(0)
            let heroImg = params.data.Image
            let newHero = heroImg.split("/")
            let pishu = newHero[11]
            let newimgdata = `<a class="imgData" href= https://www.nintendo.com${keyLink}><img class="imageInside" onerror="this.style.display='none'" src="https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_360/ncom/en_US/games/switch/${firstLet}/${newimg}/${pishu}"/></a>`;
            let imgTitle = newimgdata +'<br>' + newLink
            return imgTitle
        },
    },



        {
        headerName: "% Off",
        field: "PercentOff",
        minWidth: 80,
        
       
        sortable: true,
        filter: true
    },
         {
          headerName: "USA",
        field: "SalePrice",
        minWidth: 80,
        sortable: true,
        filter: true,


        // cellStyle: {
        //     color: '#149414',
        //     fontWeight: 'bold',
        // },

        valueGetter: usPriceGetter,

       
         headerComponentParams: {
            template: 
                  '<div class="ag-cell-label-container" role="presentation">' +
                '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
                '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
                '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
                '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
                '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
                '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
                '    <img class="flag" src="united-states-of-america.svg" alt="United States Minor Outlying Islands Flag">&nbsp;US' +
                '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
                '  </div>' +
                '</div>'
          },
        filter: 'agNumberColumnFilter',

          cellRenderer: function(params) {
                
               let keyData = `<span class="thisis"><a data-bs-toggle="modal" data-bs-target="#usModal">${ "\u20B1" + params.value}</span></a>`; 
            return keyData
            
           
        },
                cellClassRules: {
      "cell-normal": params => params.api.getValue("SalePrice", params.node),
      "cell-fail": params => params.api.getValue("SalePrice", params.node) <= params.api.getValue("MexPrice", params.node)


  },
    },

        {
          headerName: "MEX",
        field: "MexPrice",
        colId: "MexPrice",
        minWidth: 80,
        sortable: true,
        filter: true,

        // cellStyle: {
        //     color: '#149414',
        //     fontWeight: 'bold',
        // },

        valueGetter: mexPriceGetter,
         headerComponentParams: {
            template: 
                  '<div class="ag-cell-label-container" role="presentation">' +
                '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
                '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
                '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
                '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
                '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
                '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
                '    <img class="flag" src="mexico.svg" alt="United States Minor Outlying Islands Flag">&nbsp;MX' +
                '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
                '  </div>' +
                '</div>'
          },
        filter: 'agNumberColumnFilter',

          cellRenderer: function(params) {
            if (params.value != 9999) {
              let keyData =  `<span class="thisis"><a data-bs-toggle="modal" data-bs-target="#mxModal">${"\u20B1" + params.value}</span></a>`;    
            return keyData

            } 

            else { return "N/A"}
            
        },
       cellClassRules: {
        "cell-normal": params => params.api.getValue("MexPrice", params.node),
      "cell-fail": params => params.api.getValue("SalePrice", params.node) >= params.api.getValue("MexPrice", params.node)

  },
    },


     {
        headerName: "Score",
        field: "SCORE",
        sortable: true,
        // sort: 'desc',
        filter: true,
         minWidth: 80,
        filter: 'agNumberColumnFilter',
        valueGetter: ratingGetter,

           cellRenderer: function(params) {
            let keyData =  params.value    
            return keyData
        },

    },
    {
        headerName: "Retail Price",
        field: "Price",
        sortable: true,
        filter: true,
        minWidth: 110,

        valueGetter: priceGetter,
        // valueFormatter: currencyFormatter,
        filter: 'agNumberColumnFilter',
        cellStyle: params => {
            // you can use either came case or dashes, the grid converts to whats needed
            return {
                textDecoration: 'line-through'
            };
        },

            cellRenderer: function(params) {
            let keyData =  "\u20B1" + params.value    
            return keyData
        }

    },



   

    {
        headerName: "All Time Low",
        field: "LowestPrice",
        sortable: true,
        filter: true,
        minWidth: 100,
        valueGetter: alltimelowGetter,
        // valueFormatter: currencyFormatter,
   cellRenderer: function(params) {
            let keyData =  "\u20B1" + params.value    
            return keyData
        },

        filter: 'agNumberColumnFilter',
        hide: true
    },

    {
        field: "SaleStarted",
        sortable: true,
        // sort: 'desc',
         minWidth: 110,
        filter: 'agDateColumnFilter',
        valueFormatter: dateFormatter,

        filterParams: {
            // provide comparator function
            comparator: (filterLocalDateAtMidnight, cellValue) => {
                const dateAsString = cellValue;

                if (dateAsString == null) {
                    return 0;
                }

                // In the example application, dates are stored as dd/mm/yyyy
                // We create a Date object for comparison against the filter date
                const dateParts = dateAsString.split('-');
                const day = Number(dateParts[2]);
                const month = Number(dateParts[1]) - 1;
                const year = Number(dateParts[0]);
                const cellDate = new Date(year, month, day);

                // Now that both parameters are Date objects, we can compare
                if (cellDate < filterLocalDateAtMidnight) {
                    return -1;
                } else if (cellDate > filterLocalDateAtMidnight) {
                    return 1;
                }
                return 0;
            }
        }
    },
    {
        field: "SaleEnds",
        sortable: true,
        filter: true,
         minWidth: 100,
        filter: 'agDateColumnFilter',
        valueFormatter: dateFormatter,
        filterParams: {
            // provide comparator function
            comparator: (filterLocalDateAtMidnight, cellValue) => {
                const dateAsString = cellValue;

                if (dateAsString == null) {
                    return 0;
                }

                // In the example application, dates are stored as dd/mm/yyyy
                // We create a Date object for comparison against the filter date
                const dateParts = dateAsString.split('-');
                const day = Number(dateParts[2]);
                const month = Number(dateParts[1]) - 1;
                const year = Number(dateParts[0]);
                const cellDate = new Date(year, month, day);

                // Now that both parameters are Date objects, we can compare
                if (cellDate < filterLocalDateAtMidnight) {
                    return -1;
                } else if (cellDate > filterLocalDateAtMidnight) {
                    return 1;
                }
                return 0;
            }
        }
    },
   
    {
        field: "Publisher",
         minWidth: 100,
         sortable: true,
        filter: true

    },

    {
        field: "ReleaseDate",
         minWidth: 115,
         sortable: true,
        filter: true,
        // hide: true
    },

    {
        headerName: "# of Players",
        field: "NumberofPlayers",
         minWidth: 110,
        sortable: true,
        filter: true
    },
    {
        field: "ESRBRating",
         minWidth: 110,
        sortable: true,
        filter: true
    },


    {
        field: "URL",
        sortable: true,
        filter: true,
        hide: true
    },

    {
        field: "Image",
        sortable: true,
        filter: true,
        hide: true
    }

];

var gridOptions = {
  rowHeight: 110,
    defaultColDef: {
        resizable: true,
        // lockPinned: true,
    },

     onFirstDataRendered: onFirstDataRendered,
      onGridSizeChanged: onGridSizeChanged,
    enableCellTextSelection: true,
    ensureDomOrder: true,
    columnDefs: columnDefs,
    rowData: null,

 
    onColumnResized: function(params) {

        console.log(params);
    },

};

function onFirstDataRendered(params) {

  params.api.sizeColumnsToFit();
}

function onGridSizeChanged(params) {
  // get the current grids width
  var gridWidth = document.getElementById('grid-wrapper').offsetWidth;

  // keep track of which columns to hide/show
  var columnsToShow = [];
  var columnsToHide = ["URL"];

  // iterate over all columns (visible or not) and work out
  // now many columns can fit (based on their minWidth)
  var totalColsWidth = 0;
  var allColumns = params.columnApi.getAllColumns();
  for (var i = 0; i < allColumns.length; i++) {
    var column = allColumns[i];
    totalColsWidth += column.getMinWidth();
    if (totalColsWidth > gridWidth) {
      columnsToHide.push(column.colId);
    } else {
      columnsToShow.push(column.colId);
    }
  }

  // show/hide columns based on current grid width
  // params.columnApi.setColumnsVisible(columnsToShow, true);
  // params.columnApi.setColumnsVisible(columnsToHide, false);

  // fill out any available space to ensure there are no gaps
  params.api.sizeColumnsToFit();
}

var saleFilterParams = {
    allowedCharPattern: '\\d\\-\\,\\P',
    numberParser: function(text) {
        return text == null ?
            null :
            parseFloat(text.replace('P', ''));
    },
};


// function sizeToFit() {
//     gridOptions.api.sizeColumnsToFit();
// }

function autoSizeAll(skipHeader) {
    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
    });

    gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
}

function dateFormatter(params) {
    var dateAsString = params.value;
    var dateParts = dateAsString.split('-');
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

function formatNumber(number) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
}





// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid
        .simpleHttpRequest({
            url: 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjson.json',
        })
        .then(function(data) {
            gridOptions.api.setRowData(data);

            autoSizeAll(false);
        });
});


