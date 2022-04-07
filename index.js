

var input = document.getElementById("text");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});

const getInput = () => {

    var input = document.getElementById('text');
    text.textContent = input.value;

    // console.log(text);
}

const search = () => {
    var input = document.getElementById('text')
    window.location.href = `https://www.google.com/search?q=${input.value}`;
}



