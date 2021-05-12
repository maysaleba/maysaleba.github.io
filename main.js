var phpExchange = 47.80;


var salePriceGetter = function(params) {
    let newSale = params.data.SalePrice * phpExchange;
    let formatted = Math.ceil(newSale);
    return formatted
};

var priceGetter = function(params) {
    let newSale = params.data.Price * phpExchange;
    let formatted = Math.ceil(newSale);
    return formatted
};

var alltimelowGetter = function(params) {
    let newSale = params.data.LowestPrice * phpExchange;
    let formatted = Math.ceil(newSale);
    return formatted
};

var ratingGetter = function(params) {
    let newRating = params.data.SCORE
    if (newRating == -1) {
        return null
    }
    return newRating
};



var columnDefs = [{
        field: "Title",
     
        filter: true,
        resizable: false,
        lockPosition: true,
        suppressSizeToFit: true,
        // pinned: 'left',
        cellRenderer: function(params) {
            let keyData = params.value
            let keyLink = params.data.URL
            let newLink = `<a href= https://www.nintendo.com${keyLink} class="link-dark">${keyData}</a>`;
            return newLink;
        }
    },
    {
        field: "Price",
        sortable: true,
        filter: true,
        suppressSizeToFit: true,
        valueGetter: priceGetter,
        valueFormatter: currencyFormatter,
        filter: 'agNumberColumnFilter',
        cellStyle: params => {
            // you can use either came case or dashes, the grid converts to whats needed
            return {
                textDecoration: 'line-through'
            };
        },
    },
    {
        headerName: "% Off",
        field: "PercentOff",
        suppressSizeToFit: true,
        sortable: true,
        filter: true
    },
    {
        field: "SalePrice",
        suppressSizeToFit: true,
        sortable: true,
        filter: true,

        cellStyle: {
            backgroundColor: '#aaffaa'
        },

        valueGetter: salePriceGetter,
        valueFormatter: currencyFormatter,
        filter: 'agNumberColumnFilter',

    },

    {
        headerName: "All Time Low",
        field: "LowestPrice",
        sortable: true,
        filter: true,
        valueGetter: alltimelowGetter,
        valueFormatter: currencyFormatter,
        filter: 'agNumberColumnFilter',
    },

    {
        field: "SaleStarted",
        sortable: true,
        sort: 'desc',
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
        headerName: "Rating",
        field: "SCORE",
        sortable: true,
        filter: true,
        filter: 'agNumberColumnFilter',
        valueGetter: ratingGetter,

    },
    {
        field: "Publisher",
        filter: true
    },

    {
        field: "ReleaseDate",
        filter: true,
        hide: true
    },

    {
        headerName: "# of Players",
        field: "NumberofPlayers",
        sortable: true,
        filter: true
    },
    {
        field: "ESRBRating",
        sortable: true,
        filter: true
    },


    {
        field: "URL",
        sortable: true,
        filter: true,
        hide: true
    }
];

var gridOptions = {

    defaultColDef: {
        resizable: false,
        lockPinned: true,

    },
     onFirstDataRendered: onFirstDataRendered,
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

var saleFilterParams = {
    allowedCharPattern: '\\d\\-\\,\\P',
    numberParser: function(text) {
        return text == null ?
            null :
            parseFloat(text.replace('P', ''));
    },
};


function sizeToFit() {
    gridOptions.api.sizeColumnsToFit();
}

function autoSizeAll(skipHeader) {
    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
    });

    gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
}

function currencyFormatter(params) {
    let peso = params.value;
    return 'P' + formatNumber(peso);
}

function dateFormatter(params) {
    var dateAsString = params.value;
    var dateParts = dateAsString.split('-');
    return `${dateParts[2]} - ${dateParts[1]} - ${dateParts[0]}`;
}

function formatNumber(number) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}





// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid
        .simpleHttpRequest({
            url: 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/source.json',
        })
        .then(function(data) {
            gridOptions.api.setRowData(data);
            autoSizeAll(false);
        });
});


