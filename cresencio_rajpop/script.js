function sayHello(){
    //crea un alerta
    alert('Hola mundo')
}

function addMessage(){
    //altera el contenido de la pagina.
    var text=document.createElement('p')
    text.textContent='Usted a clicado este boton'
    document.body.appendChild(text)
}

function getInputText(){
    var input = document.getElementById('search-info') //Hace referecia a un obhjeto por su ID
    var text=document.createElement('p')
    text.textContent=input.value  //Se le pasa el texto escrito en el Input al parrafo a crear
    document.body.appendChild(text)
}

// https://www.google.com.gt/search?q=hola

function search(){
    var input = document.getElementById('search-info') //Hace referecia a un obhjeto por su ID
    window.location.href='https://www.google.com.gt/search?q='+input.value  //para realizar la busqueda  
}

function meSientoSuerte(){
    var input = document.getElementById('search-info') //Hace referecia a un obhjeto por su ID
    window.location.href='https://es.wikipedia.org/wiki/'+input.value
}


var teclaEnter = document.getElementById("search-info"); //capturando informacion del input
teclaEnter.addEventListener("keydown", function (e) { 
    if (e.keyCode === 13) {  //verificando la tecla que se presiona
        meSientoSuerte(e);
    }
});