import axios from 'axios';

export function getData() {
  axios
    .get('/api/bankAccounts/data')
    .then(response => response)
    .then(data => {
      alert(data?.num);
      // Get a reference to the table body element
      //   const tableBody = document.querySelector('#data-table tbody');

      //   // Clear the table body
      //   tableBody?.innerHTML = '';

      //   // Loop through the data and add rows to the table
      //   data.forEach(item => {
      //     const row = document.createElement('tr');
      //     const column1 = document.createElement('td');
      //     const column2 = document.createElement('td');
      //     const column3 = document.createElement('td');
      //     column1.textContent = item.column1;
      //     column2.textContent = item.column2;
      //     column3.textContent = item.column3;
      //     row.appendChild(column1);
      //     row.appendChild(column2);
      //     row.appendChild(column3);
      //     tableBody?.appendChild(row);
      //   });
    })
    .catch(error => console.error(error));
}