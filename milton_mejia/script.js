function sayHello() {
  alert("Hola mundo");
}

function addMessage(){
  var text = document.createElement('p');
  text.textContent = 'Hola';
  document.body.appendChild(text);
}

function getInputText(){
  var input = document.getElementById('search-input');
  var text = document.createElement('p');
  text.textContent = input.value;
  document.body.appendChild(text);
}

function search(){
  var input = document.getElementById('search-input');
  window.location.href = 'https://www.google.com/search?q='+input.value;
}
