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
      <div class="card">
      <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-3" alt="..." />
      <div class="card-body mx-auto">
        <h5 class="card-title">${phone.phone_name}</h5>
        <button onclick="loadDetail(${phone.slug})" class="btn btn-primary text-white fw-bold">Show Details</button>
      </div>
    </div>
      `;
    searchResult.appendChild(div);
  }
};
const loadDetail = (id) => {
  console.log("button clicked");
  /*   const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhoneDetail(data));
};
const displayPhoneDetail = (phone) => {
  const phoneDetails = document.getElementById("phone-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${phone.image}" width="75" height="75"class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <p class="card-text">
      ${phone.releaseDate}
      ${phone.mainFeatures}
      </p>
     
    `;
  phoneDetails.appendChild(div); */
};
