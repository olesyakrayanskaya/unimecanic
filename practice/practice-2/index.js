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
  tableHeader.append(userIDTitle);
  const idTitle = document.createElement('th');
  idTitle.innerHTML = 'id';
  tableHeader.append(idTitle);
  const postTitle = document.createElement('th');
  postTitle.innerHTML = 'title';
  tableHeader.append(postTitle);
  const postBody = document.createElement('th');
  postBody.innerHTML = 'body';
  tableHeader.append(postBody);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) =>
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
      })
    );
}

getPostsDisplayTable();
