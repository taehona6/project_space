// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    var lastClickedTable = localStorage.getItem('lastClickedTable');
    if (lastClickedTable) {
        showTable(lastClickedTable);
    } else {
        showTable('table1');
    }
});

function showTable(tableId) {
    var tables = document.querySelectorAll('.table-content');
    tables.forEach(function(table) {
        table.style.display = 'none';
    });

    var links = document.querySelectorAll('.table-wrap ul li a');
    links.forEach(function(link) {
        link.classList.remove('active-tab');
        link.removeEventListener('mouseenter', handleMouseEnter);
    });

    var selectedTable = document.getElementById(tableId);
    selectedTable.style.display = 'block';

    var clickedLink = document.querySelector('a[href="#' + tableId + '"]');
    clickedLink.classList.add('active-tab');

    clickedLink.addEventListener('mouseenter', handleMouseEnter);

    localStorage.setItem('lastClickedTable', tableId);
}

function handleMouseEnter(event) {
    event.target.classList.add('active-tab');
}
