function sayHello() {
    alert('hola mundo')
}

function addMessage(params) {
    var text = document.createElement('p')
    text.textContent = 'You Clicked the button'
    document.body.appendChild(text)
}

function getInputText(params) {
    var input = document.getElementById('search-input')
    var text = document.createElement('p')
    text.textContent = input.value
    document.body.appendChild(text)
}

function search(params) {
    var input = document.getElementById('search-input')
    window.location.href = 'https://www.google.com/search?q=' + input.value
}

function luck(params) {
    alert('Si te sale esto es porque me copiaste el codigo from Victor Corado')
    window.location.href = 'https://www.google.com/doodles'
}