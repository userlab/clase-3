'use strict'

let  login = ()=>{
  window.location.href = 'https://accounts.google.com/ServiceLogin?hl=es-419&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ';
}

let   aplicaciones = ()=>{
  window.location.href='https://maps.google.co.ve/maps?hl=es-419&amp;tab=rl';
}

let  suerte = ()=>{
  window.location.href='https://www.google.com/doodles';

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
