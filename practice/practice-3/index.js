'use  strict';

function getPostsDisplayTable() {
  const table = document.createElement('table');
  table.className = 'table';
  const tableTitle = document.createElement('caption');
  tableTitle.className = 'table__title';
  tableTitle.innerHTML = 'Posts';
  document.body.append(table);
  table.append(tableTitle);
  const tableHeader = document.createElement('thead');
  table.append(tableHeader);
  const tableBody = document.createElement('tbody');
  table.append(tableBody);
  const userIDTitle = document.createElement('th');
  userIDTitle.innerHTML = 'userId';
  userIDTitle.setAttribute('dataType', 'num');
  tableHeader.append(userIDTitle);
  const idTitle = document.createElement('th');
  idTitle.innerHTML = 'id';
  idTitle.setAttribute('dataType', 'num');
  tableHeader.append(idTitle);
  const postTitle = document.createElement('th');
  postTitle.innerHTML = 'title';
  postTitle.setAttribute('dataType', 'text');
  tableHeader.append(postTitle);
  const postBody = document.createElement('th');
  postBody.setAttribute('dataType', 'text');
  postBody.innerHTML = 'body';
  tableHeader.append(postBody);

  const tab = document.querySelector('.table');
  const tabHeads = Array.from(document.getElementsByTagName('th'));
  let clickIndex = 0;

  tabHeads.forEach((head) => {
    head.addEventListener('click', () => {
      let i = tabHeads.indexOf(head);
      let sortedRows;
      if (head.getAttribute('dataType') === 'num') {
        if (clickIndex === 0) {
          sortedRows = Array.from(tab.rows).sort((rowA, rowB) => {
            return rowA.cells[i].innerHTML - rowB.cells[i].innerHTML;
          });
          clickIndex = 1;
        } else {
          sortedRows = Array.from(tab.rows).sort((rowA, rowB) => {
            return rowB.cells[i].innerHTML - rowA.cells[i].innerHTML;
          });
          clickIndex = 0;
        }
      }
      if (head.getAttribute('dataType') === 'text') {
        if (clickIndex === 0) {
          sortedRows = Array.from(tab.rows).sort((rowA, rowB) => {
            return rowA.cells[i].innerHTML.localeCompare(
              rowB.cells[i].innerHTML
            );
          });
          clickIndex = 1;
        } else {
          sortedRows = Array.from(tab.rows).sort((rowA, rowB) => {
            return rowB.cells[i].innerHTML.localeCompare(
              rowA.cells[i].innerHTML
            );
          });
          clickIndex = 0;
        }
      }
      tab.tBodies[0].append(...sortedRows);
    });
  });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      json.map((el) => {
        const tr = document.createElement('tr');
        tableBody.append(tr);
        const tdUser = document.createElement('td');
        tdUser.innerHTML = el.userId;
        tr.append(tdUser);
        const tdId = document.createElement('td');
        tdId.innerHTML = el.id;
        tr.append(tdId);
        const tdTitle = document.createElement('td');
        tdTitle.innerHTML = el.title;
        tr.append(tdTitle);
        const tdBody = document.createElement('td');
        tdBody.innerHTML = el.body;
        tr.append(tdBody);
      });
    });
}

getPostsDisplayTable();

const tab = document.querySelector('.table');
const search = document.getElementById('search');
const select = document.getElementById('select');
const rowArr = tab.getElementsByTagName('tr');

search.addEventListener('input', () => {
  filterStr = search.value.toUpperCase();
  if (filterStr.length >= 3) {
    let searchColIndex = select.value === 'in title' ? 2 : 3;
    for (let i = 0; i < rowArr.length; i++) {
      let searchCell;
      searchCell = rowArr[i].getElementsByTagName('td')[searchColIndex];
      if (searchCell) {
        let textValue = searchCell.textContent || searchCell.innerText;
        if (textValue.toUpperCase().indexOf(filterStr) > -1) {
          rowArr[i].style.display = '';
        } else {
          rowArr[i].style.display = 'none';
        }
      }
    }
  } else {
    for (let i = 0; i < rowArr.length; i++) {
      rowArr[i].style.display = '';
    }
  }
});
