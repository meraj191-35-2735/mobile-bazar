const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // clear value
  searchField.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
