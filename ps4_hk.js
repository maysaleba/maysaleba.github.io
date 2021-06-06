var usExchange = 6.15;


var usPriceGetter = function(params) {
    let newSale = params.data.SalePrice * usExchange;
    let saleDec = (newSale/100).toFixed(2)
    let formatted = Math.round(saleDec);
    return formatted
};

var psPriceGetter = function(params) {
    let newSale = params.data.PlusPrice * usExchange;
  let saleDec = (newSale/100).toFixed(2)
    let formatted = Math.round(saleDec);
    return formatted

   
};

var priceGetter = function(params) {
    let newSale = params.data.BasePrice * usExchange;
     let saleDec = (newSale/100).toFixed(2)
    let formatted = Math.round(saleDec);
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
        return ""
    }
    return newRating

};



var columnDefs = [


    {
        headerName: "Title",
        field: "ProductName",
        sortable: true,
        filter: true,
        minWidth: 150,
        // wrapText: true,
       

               pinned: 'left',
          lockPosition: true,
            lockPinned: true,
    cellClass: 'lock-pinned',
          resizable: true,
        sortable: true,
              cellRenderer: function(params) {
            let keyData = params.value
            let keyLink = params.data.PSStoreURL
            let keyImg = params.data.Img
            let newLink = `<a href=${keyLink} class="link-dark">${keyData}</a>`;
            let newimgdata = `<a class="imgData" href= ${keyLink}><img class="imageInsideps4" onerror="this.style.display='none'" src="${keyImg}?w=60"/></a>`;
            let imgTitle = newimgdata +'<br>' + newLink
            return imgTitle
        },
    },
    {
        headerName: "% Off",
        field: "DiscPerc",
        sortable: true,
        filter: true,
        hide: false,
        valueFormatter: percentFormatter,
        minWidth: 80,
    },
       {
        headerName: "US",
        field: "SalePrice",
        minWidth: 80,
        sortable: true,
        filter: true,
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
                '    <img class="flag" src="hong-kong.svg" alt="Hong Kong">&nbsp;HK' +
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
                    // "cell-normal": params => params.api.getValue("SalePrice", params.node),
      "ps4price": params => params.api.getValue("SalePrice", params.node) 
  }
    },

      {
        headerName: "Plus Price",
        field: "PlusPrice",
        minWidth: 90,
        sortable: true,
        filter: true,
         valueGetter: psPriceGetter,
          headerComponentParams: {
            template: 
                  '<div class="ag-cell-label-container" role="presentation">' +
                '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
                '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
                '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
                '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
                '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
                '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
                '    <img class="flag" src="psplus.svg" alt="United States Minor Outlying Islands Flag">&nbsp;PS+' +
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
                    // "cell-normal": params => params.api.getValue("SalePrice", params.node),
      "psprice": params => params.api.getValue("PlusPrice", params.node) 
  }
    },
        {
        headerName: "Score",
        field: "SCORE",
        sortable: true,
        filter: true,
        sort: 'desc',
        minWidth: 80,
        filter: 'agNumberColumnFilter',
        valueGetter: ratingGetter,

           cellRenderer: function(params) {
            let openId = params.data.OpenCriticID
            let openName = params.data.ProductName
            let openScore = params.value
            let keyData = `<a href= https://opencritic.com/game/${openId}/${openId} class="link-dark">${openScore}</a>`;
            return keyData
        },
    },
    {
        headerName: "Retail Price",
        field: "BasePrice",
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
        headerName: "Sale Started",
        field: "LastDiscounted",
        sortable: true,
        filter: true,
           minWidth: 110,
        filter: 'agDateColumnFilter',
        valueFormatter: dateFormatter,

        filterParams: {
            // provide comparator function
            comparator: (filterLocalDateAtMidnight, cellValue) => {
                const dateAsString = cellValue;
                const dateAsString2 = dateAsString.substring(0,10);

                if (dateAsString2 == null) {
                    return 0;
                }

                // In the example application, dates are stored as dd/mm/yyyy
                // We create a Date object for comparison against the filter date
                const dateParts = dateAsString2.split('-');
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
        headerName: "Sale Ends",
        field: "DiscountedUntil",
        sortable: true,
        filter: true,
             minWidth: 100,
        filter: 'agDateColumnFilter',
        valueFormatter: dateFormatter,

        filterParams: {
            // provide comparator function
            comparator: (filterLocalDateAtMidnight, cellValue) => {
                const dateAsString = cellValue;
                const dateAsString2 = dateAsString.substring(0,10);

                if (dateAsString2 == null) {
                    return 0;
                }

                // In the example application, dates are stored as dd/mm/yyyy
                // We create a Date object for comparison against the filter date
                const dateParts = dateAsString2.split('-');
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
        headerName: "Publisher",
        field: "Publisher",
        sortable: true,
        minWidth: 100,
        filter: true,
        hide: false
    },
       {
        headerName: "Release Date",
        field: "ReleaseDate",
         minWidth: 115,
        sortable: true,
        filter: true,
        hide: false
    },
    {
        headerName: "ESRB Rating",
        field: "Rating",
        minWidth: 110,
        sortable: true,
        filter: true,
        hide: false
    },



    {
        headerName: "PSStoreURL",
        field: "PSStoreURL",
        sortable: true,
        filter: true,
        hide: true
    },
       {
        headerName: "Img",
        field: "Img",
        sortable: true,
        filter: true,
        hide: true
    },
     {
        headerName: "OpenCriticID",
        field: "OpenCriticID",
        sortable: true,
        filter: true,
        hide: true
    },
   

];

var gridOptions = {
  rowHeight: 140,
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

function percentFormatter(params) {
    var percentAsString = params.value;
    return percentAsString + '%';
}

function dateFormatter(params) {
    var dateAsString = params.value;
    var dateSub = dateAsString.substring(0,10)
    var dateParts = dateSub.split('-');
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
            url: 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/csvjsonhk.json',
        })
        .then(data => {
            const newData = Object.values(data);
            // const myJSON = JSON.stringify(newData, null, 2);
            gridOptions.api.setRowData(data);

            autoSizeAll(false);
        });
});


