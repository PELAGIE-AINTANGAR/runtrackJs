document.addEventListener("DOMContentLoaded", function (){
    let button = document.getElementById("button");
    button.addEventListener("click", addone);
});


function addone() {
    let counter = document.getElementById("compter");
    let value = counter.textContent;
    let newValue = parseInt(value) + 1;
    counter.textContent = newValue;
}

