var columnDefs = [{
        field: "Title",
        filter: true,
        resizable: true,
        lockPosition: true,
        pinned: 'left',
        cellRenderer: function(params) {
          let keyData = params.data.Price
          let newLink = `<a href= https://ag-grid.com/${keyData}-getting-started
            target="_blank">${keyData}</a>`;
            return newLink;
  }
    },
    {
        field: "Release Date",
        filter: true,
        hide: true
    },
    {
        field: "ESRB Rating",
        sortable: true,
        filter: true
    },
    {
        field: "Number of Players",
        sortable: true,
        filter: true
    },
    {
        field: "Publisher",
        filter: true
    },
    {
        field: "Price",
        sortable: true,
        filter: true,
        valueFormatter: currencyFormatter,
        cellStyle: params => {
      // you can use either came case or dashes, the grid converts to whats needed
         return {textDecoration: 'line-through'};
    },
    },
    {
        field: "Sale Price",
        sortable: true,
        filter: true,
        valueFormatter: currencyFormatter
    },
    {
        field: "Percent Off",
        sortable: true,
        filter: true
    },
    {
        field: "Lowest Price",
        sortable: true,
        filter: true
    },
    {
        field: "Sale Started",
        sortable: true,
        filter: true,
        sort: 'desc'
    },
    {
        field: "Sale Ends",
        sortable: true,
        filter: true
    },
    {
        field: "URL",
        sortable: true,
        filter: true
    },
    {
        field: "SCORE",
        sortable: true,
        filter: true
    }
];

var gridOptions = {

    defaultColDef: {
        resizable: true,
        lockPinned: true,

    },
    enableCellTextSelection: true,
    ensureDomOrder: true,
    columnDefs: columnDefs,
    rowData: null,
    onColumnResized: function(params) {
        console.log(params);
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

    return "P"+params.value
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