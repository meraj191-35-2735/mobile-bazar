// load search results
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

// display search results
const displayPhone = (phones) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";

  if (phones.length < 20 && phones.length > 0) {
    const alert = document.getElementById("alert");
    alert.textContent = "";
    for (const phone of phones) {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-3" alt="..." />
        <div class="card-body mx-auto">
          <h5 class="card-title">${phone.phone_name}</h5>
          <button onclick="loadDetail('${phone.slug}')" class="btn btn-primary text-white fw-bold">Show Details</button>
        </div>
      </div>`;
      searchResult.appendChild(div);
    }
  } else if (phones.length > 20) {
    const alert = document.getElementById("alert");
    alert.textContent = "";
    for (const phone of phones.slice(0, 20)) {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-3" alt="..." />
        <div class="card-body mx-auto">
          <h5 class="card-title">${phone.phone_name}</h5>
          <button onclick="loadDetail('${phone.slug}')" class="btn btn-primary text-white fw-bold">Show Details</button>
        </div>
      </div>`;
      searchResult.appendChild(div);
    }
    const div2 = document.createElement("div");
    div2.classList.add("d-flex", "align-items-end");
    div2.innerHTML = `<button onclick="showAll()" class="btn-small btn-light text-primary text-decoration-none fw-bold">Show All</button>`;
    searchResult.appendChild(div2);
  } else {
    const alert = document.getElementById("alert");
    alert.textContent = "";
    const phoneDetails = document.getElementById("phone-details");
    phoneDetails.textContent = "";
    const h6 = document.createElement("h6");
    h6.classList.add("text-danger", "text-center");
    h6.innerText = "No results found❕ Enter a valid phone name 📱";
    alert.appendChild(h6);
  }
};

// load details results
const loadDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhoneDetail(data.data));
};

// display details results
const displayPhoneDetail = (phone) => {
  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card", "mb-3", "w-50", "mx-auto");
  const sensors = phone.mainFeatures.sensors;
  if (phone.others !== undefined) {
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-25 h-25 mx-auto pt-3" alt="..." />
    <div class="card-body">
      <h5 class="card-title fw-bold">${phone.name}</h5>
    <div class="card-text">
    <p>
       ${phone.releaseDate} <br>
      <span class='fw-bold'>Brand Name:</span> ${phone.brand}<br>
      <span class='fw-bold'>Features:</span><br>
      <span class='fw-bold'>Chip set:</span> ${phone.mainFeatures.chipSet}<br>
      <span class='fw-bold'>Display size:</span> ${phone.mainFeatures.displaySize}<br>
      <span class='fw-bold'>Memory:</span> ${phone.mainFeatures.memory}<br>
      <span class='fw-bold'>Sensors:</span> ${sensors[0]},${sensors[1]},${sensors[2]} <br>
      <span class='fw-bold'>Others:</span><br>
        <span class='fw-bold'>Bluetooth:</span> ${phone.others.Bluetooth}<br>
        <span class='fw-bold'>GPS:</span> ${phone.others.GPS}<br>
        <span class='fw-bold'>NFC:</span> ${phone.others.NFC}<br>
        <span class='fw-bold'>Radio:</span> ${phone.others.Radio}<br>
        <span class='fw-bold'>USB:</span> ${phone.others.USB}<br>
        <span class='fw-bold'>WLAN:</span> ${phone.others.WLAN}
      </p>  
      </div>
      `;
  } else {
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-25 h-25 mx-auto pt-3" alt="..." />
    <div class="card-body">
      <h5 class="card-title fw-bold">${phone.name}</h5>
    <div class="card-text">
    <p>
      ${phone.releaseDate} <br>
      <span class='fw-bold'>Brand Name:</span> ${phone.brand}<br>
      <span class='fw-bold'>Features:</span><br>
      <span class='fw-bold'>Chip set:</span> ${phone.mainFeatures.chipSet}<br>
      <span class='fw-bold'>Display size:</span> ${phone.mainFeatures.displaySize}<br>
      <span class='fw-bold'>Memory:</span> ${phone.mainFeatures.memory}<br>
      <span class='fw-bold'>Sensors:</span> ${sensors[0]},${sensors[1]},${sensors[2]} 
    </p>  
    </div>`;
  }
  phoneDetails.appendChild(div);
};
