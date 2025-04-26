let apiUrl = "https://jsonplaceholder.typicode.com/users";
let row = document.getElementById('row');
let users = [];
let searchInput = document.querySelector("#searchInput");
let open = false

fetch(apiUrl)
    .then(res => res.json())
    .then(res => {
        users = res;
        renderCards(users);
    });

function renderCards(data) {
    row.innerHTML = '';

    if (data.length === 0) {
        row.innerHTML = `<p class="text-center text-gray-500 text-lg">Пользователь не найден</p>`;
        return;
    }

    data.forEach(item => {
        let card = document.createElement('div');
        card.className = "max-w-sm bg-white rounded-2xl shadow-md p-6 m-4 border border-gray-200";
        card.innerHTML = `
            <h2 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h2>
            <p class="text-gray-600"><strong>Username:</strong> ${item.username}</p>
            <p class="text-gray-600"><strong>Email:</strong> ${item.email}</p>
            <p class="text-gray-600"><strong>Street:</strong> ${item.address.street}</p>
            <p class="text-gray-600"><strong>City:</strong> ${item.address.city}</p>
            <p class="text-gray-600"><strong>Phone:</strong> ${item.phone}</p>
            <p class="text-gray-600"><strong>Company:</strong> ${item.company.name}</p>
        `;
        row.appendChild(card);
    });
}

searchInput.addEventListener('keydown', (event) => {

    if (event.key === "Enter") {
        searchData()
    }

})

function searchData() {
    let inputValue = searchInput.value.toLowerCase();
    let filteredUsers = users.filter(item => item.name.toLowerCase().includes(inputValue));
    renderCards(filteredUsers);
    searchInput.value = "";
}

let body = document.querySelector('body')
let darkModeButton = document.querySelector('#darkModeButton')

darkModeButton.addEventListener('click', toggleDarkMode)
function toggleDarkMode() {
    body.classList.toggle("dark-mode");

}

