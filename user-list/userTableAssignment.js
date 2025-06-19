'use strict';

const table = document.createElement('table');
const tr = document.createElement('tr');
table.appendChild(tr);

const header = document.createElement('h2');
header.innerHTML = 'User list';

const root = document.getElementById('root');
root.appendChild(header);
root.appendChild(table);

fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
}).then(json => {
    const users = json;
    // let thList = Object.keys(users[1]); 
    let thList = ['id', 'name', 'username', 'email', 'address'];
    
    thList.forEach(el => {
        const th = document.createElement('th');
        th.innerHTML = `${el}`
        tr.appendChild(th);
    });
    
    for (let i = 0; i <= users.length-1; i++) {
        users[i].address = `${users[i].address.city} ${users[i].address.suite}`;

        let tr = document.createElement('tr');
        tr.id = `tr-${users[i].id}`;
        
        for (let j = 0; j <= thList.length; j++) {
            let td = document.createElement('td');
            td.innerHTML = `${users[i][`${thList[j]}`]}`;
            if (j == thList.length) {
                td.innerHTML = 'x';
                td.style = 'background-color: red; color: white; cursor: pointer;';
                td.addEventListener('click', () => tr.remove())
            }
            tr.appendChild(td);
        }

        table.appendChild(tr);   
    }
}).catch(err => {
    throw new Error(err);
});
