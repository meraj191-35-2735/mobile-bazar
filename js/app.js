const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // clear value
  searchField.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhone(data.data));
};
const displayPhone = (phones) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  for (const phone of phones.slice(0, 20)) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div onclick="loadData()" class="card">
      <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-2" alt="..." />
      <div class="card-body mx-auto">
        <h5 class="card-title text-center">${phone.phone_name}</h5>
        <a href="#" class="btn btn-light border-4 border-primary btn-small text-primary">Show Details</a>
      </div>
    </div>
      `;
    searchResult.appendChild(div);
  }
};
