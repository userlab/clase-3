function sayHello(){
    alert("Hola mundo JAVASCRIPT");
}

function addmessage(){
    var text = document.createElement('p')
    text.textContent='you clicked the button'
    document.body.appendChild(text)
}

function getText(){
    var input = document.getElementById('search-input')
    var text = document.createElement('p')
    text.textContent=input.value
    document.body.appendChild(text)
}

function search(){
    var input = document.getElementById('search-input')
    window.location.href='https://www.google.com/search?q='+input.value

}