//Evento enter del teclado para búsqueda
window.onload = function () {
  document.getElementById("inputBuscar").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          var input = document.getElementById("inputBuscar");
          window.location.href = "https://www.google.com/search?q=" + input.value;
        }
    });
}

  function sayHello() {
    alert("Hello World!");
  }

  function addMessage() {
    var text = document.createElement("p");
    text.textContent = "You clicked the button!";
    document.body.appendChild(text);
  }

  function getinputBuscar() {
    var input = document.getElementById("inputBuscar");
    var text = document.createElement("p");
    text.textContent = input.value;
    document.body.appendChild(text);
  }

  function search() {
    var input = document.getElementById("inputBuscar");
    window.location.href = "https://www.google.com/search?q=" + input.value;
  }

  function clickLuck() {
    window.location.href = "https://www.google.com/doodles/";
  }