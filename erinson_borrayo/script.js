var input = document.getElementById('search-input');

function sayHello() {
    alert("Hola Mundo!")
}

function addMEssage() {
    var text = document.createElement('p');
    text.textContent = 'You cliked the button!'
    document.body.appendChild(text);
}

function getInputText() {
    var text = document.createElement('p');
    text.textContent = 'You cliked the button!'
    document.body.appendChild(text);
}

function search() {
    let urlSearch = `https://www.google.com/search?q=${input.value}`
    if (input.value) {
        goTo(urlSearch)
    }
}

/*
 * Implementación al dar enter
*/
input.addEventListener("keyup", function(event) {
    if (event.code === "Enter" || event.code === "Intro") {
        search();
    }
});

/**
 * Impementación me siento con suerte
 */

function doodles() {
    let urlDoodles = `https://www.google.com/doodles`
    goTo(urlDoodles);
}

function goTo(url) {
    window.location.href = url
}