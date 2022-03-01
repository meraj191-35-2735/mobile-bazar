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
    for (const phone of phones) {
      const phoneDetails = document.getElementById("phone-details");
      // phoneDetails.textContent = "";
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-3" alt="..." />
        <div class="card-body mx-auto">
          <h5 class="card-title">${phone.phone_name}</h5>
          <button onclick="loadDetail()" class="btn btn-primary text-white fw-bold">Show Details</button>
        </div>
      </div>`;
      searchResult.appendChild(div);
    }
  } else if (phones.length > 20) {
    for (const phone of phones.slice(0, 20)) {
      const phoneDetails = document.getElementById("phone-details");
      phoneDetails.textContent = "";
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top mx-auto w-50 h-50 pt-3" alt="..." />
        <div class="card-body mx-auto">
          <h5 class="card-title">${phone.phone_name}</h5>
          <button onclick="loadDetail()" class="btn btn-primary text-white fw-bold">Show Details</button>
        </div>
      </div>`;
      searchResult.appendChild(div);
    }
  } else {
    const alert = document.getElementById("alert");
    phoneDetails.textContent = "";
    const h6 = document.createElement("h6");
    h6.classList.add("text-danger", "text-center");
    h6.innerText = "No results found! Try again later.";
    alert.appendChild(h6);
  }
};

// load details results
const loadDetail = () => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhoneDetail(data.data));
};

// display details results
const displayPhoneDetail = (phone) => {
  const phoneDetails = document.getElementById("phone-details");
  // phoneDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card", "mb-3");
  const sensors = phone.mainFeatures.sensors;
  div.innerHTML = `
    <img src="${
      phone.image
    }" class="card-img-top w-25 h-25 mx-auto pt-3" alt="..." />
    <div class="card-body text-center">
      <h5 class="card-title fw-bold">${phone.name}</h5>
    <div class="card-text text-center">
      Release Date: ${phone.releaseDate} <br>
      Brand Name: ${phone.brand}<br>
      Features:<br>
      Chip set: ${phone.mainFeatures.chipSet}<br>
      Display size: ${phone.mainFeatures.displaySize}<br>
      Memory: ${phone.mainFeatures.memory}<br>
      Sensors: ${sensors.forEach((sensor) => sensor)} <br>
      Others:<br>
      Bluetooth: ${phone.others.Bluetooth}<br>
      GPS: ${phone.others.GPS}<br>
      NFC: ${phone.others.NFC}<br>
      Radio: ${phone.others.Radio}<br>
      USB: ${phone.others.USB}<br>
      WLAN: ${phone.others.WLAN}
      </p>
      </div>
      `;
  phoneDetails.appendChild(div);

  // const displaySensors = () => {
  // const sensorList = phone.mainFeatures.sensors;
  //     sensorList.forEach((sensor))
  //   };
};
