function warnig() {
     alert("¡Hey! Esto aún no está listo")
 }

 function search() {
     var input = document.getElementById('searchButtom');
     window.location.href = "https://www.google.com/search?q=" + input.value;
    }

function getLucky () {
    window.location.href = "https://www.google.com/doodles";
}

function loging () {
    window.location.href = "https://accounts.google.com/login?hl=es";
}