var columnDefs = [
  { field: "Title", filter: true, resizable: true },
  { field: "Release Date", sortable: true, filter: true, hide: true },
  { field: "ESRB Rating", sortable: true, filter: true  },
  { field: "Number of Players", sortable: true, filter: true  },
  { field: "Publisher", filter: true  },
  { field: "Price", sortable: true, filter: true  },
  { field: "Sale Price", sortable: true, filter: true  },
  { field: "Percent Off", sortable: true, filter: true  },
  { field: "Lowest Price", sortable: true, filter: true  },
  { field: "Sale Started", sortable: true, filter: true, sort: 'desc' },
  { field: "Sale Ends", sortable: true, filter: true  }
];

var gridOptions = {
  defaultColDef: {
    resizable: true,
  },
  columnDefs: columnDefs,
  rowData: null,
  onColumnResized: function (params) {
    console.log(params);
  },
};

function sizeToFit() {
  gridOptions.api.sizeColumnsToFit();
}

function autoSizeAll(skipHeader) {
  var allColumnIds = [];
  gridOptions.columnApi.getAllColumns().forEach(function (column) {
    allColumnIds.push(column.colId);
  });

  gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
}



// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  agGrid
    .simpleHttpRequest({
      url: 'https://raw.githubusercontent.com/maysaleba/maysaleba.github.io/main/source.json',
    })
    .then(function (data) {
      gridOptions.api.setRowData(data);
      autoSizeAll(false);
    });
});