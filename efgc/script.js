
function search(){
    let input = document.getElementById('search-input');
    let url = "https://www.google.com/search?q=";
    window.location.href = url + input.value;
}

//add listener to input
document.getElementById("search-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        search();
    }
});