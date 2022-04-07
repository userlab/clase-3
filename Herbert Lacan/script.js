window.addEventListener('load', function () {
    let today = new Date();
    
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    this.document.getElementById('date').innerHTML = '[ ' + date + ' / ' + month + ' / ' + year + ']'
  })

function sayHello(){
    alert('Hola mundo!')
}

function addMessage(){
    var text = document.createElement('p')
    text.textContent = 'You clicked the button!'
    document.body.appendChild(text)
}

function getInputText(){
    var input = document.getElementById('search-input')
    var text = document.createElement('p')
    text.textContent = input.value
    document.body.appendChild(text)
}

function search(){
    var input = document.getElementById('search-input')
    window.location.href = 'https://www.google.com/search?q=' + input.value
}

function luckySearch(){
    var text = document.getElementById('search-input').value
    alert('Im lucky : ' + text)
}

function voiceSearch(){
    alert('Activating activating microphone...')
}

function randomColor(){
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    var rgb =  'rgb(' + r + ',' + g + ',' + b + ')'

    document.body.style.backgroundColor = rgb;
}

