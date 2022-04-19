function sayHello(){
    alert('Hola'); 
}
function addMessage(){
    var text = document.createElement('p');
    text.textContent ='You clicked the button'; 
    document.body.appendChild(text); 
}

function getInputText(){
    var input = document.getElementById('buscar');
    var text = document.createElement('p'); 
    text.textContent = input.value;
    document.body.appendChild(text); 
}

function search(){
    var input= document.getElementById('buscar'); 
    window.location.href='https://www.google.com/search?q='+input.value;  

}

let  luck = ()=>{
    window.location.href='https://www.google.com/doodles'; 

}
let   products = ()=>{
    window.location.href='https://www.google.com.gt/intl/es-419/about/products'; 
}

let  login = ()=>{
    window.location.href = 'https://accounts.google.com/ServiceLogin?hl=es-419&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ'; 
}

