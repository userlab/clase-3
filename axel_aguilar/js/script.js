"use strict";

const helloWorld = function () {
  alert("Hello World!");
};

const addMessage = function () {
  let text = document.createElement("p");
  text.textContent = "You clicked the button!";
  document.body.appendChild(text);
};

const getInputText = function () {
  let input = document.getElementById("search-bar");
  let text = document.createElement("p");
  text.textContent = input.value;
  document.body.appendChild(text);
};

function search() {
  var input = document.getElementById("search-bar");
  window.location.href = "https://www.google.com/search?q=" + input.value;
}

const luck = () => {
  window.location.href = "https://www.google.com/doodles";
};
const products = () => {
  window.location.href = "https://www.google.com.gt/intl/es-419/about/products";
};

const login = () => {
  window.location.href =
    "https://accounts.google.com/ServiceLogin?hl=es-419&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ";
};
