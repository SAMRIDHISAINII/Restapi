 const API_URL = "https://jsonplaceholder.typicode.com/users";
    const tableBody = document.querySelector("#users-table-body");

    async function getUsers()
    {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    }

    async function main() {
      const users = await getUsers();
      for (const user of users) {
        const row = document.createElement('tr');
      row.innerHTML = `
      <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td> 
        <td>${user.email}</td>
    `;
        tableBody.appendChild(row);
      }
    }

