let query = document.querySelector(".search");
function search() {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
}

function PressEnter(e){
  var key=e.keyCode || e.which;
   if (key==13){
      search();
   }
 }

function luck() {
  window.location.href = "https://www.google.com/doodles";
}

function login() {
  window.location.href =
    "https://accounts.google.com/signin/v2/identifier?hl=es&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
}
