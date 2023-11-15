let selectedTable = 1;

document.addEventListener('DOMContentLoaded', function() {
    showTable('table1',1);
});

function showTable(tableId,tableSel) {
    var clickedLink = document.querySelectorAll('.table-li');
    selectedTable = tableSel;

    if (selectedTable == 1)
    {
        clickedLink[0].style.color="red";
        clickedLink[1].style.color="black";
    }
    else if (selectedTable == 2) {
        clickedLink[1].style.color="red";
        clickedLink[0].style.color="black";
    }

    var tables = document.querySelectorAll('.table-content');

    tables.forEach(function(table) {
        table.style.display = 'none';
    });

    var selectedTable = document.getElementById(tableId);
    selectedTable.style.display = 'block';
}
