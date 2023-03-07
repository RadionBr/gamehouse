knopka = document.querySelector("#k");
popup = document.querySelector(".popup");
close = document.querySelector("#clo");

console.log(close);

knopka.onclick = function() {
	popup.style.display = "block";
}

close.onclick = function() {
	popup.style.display = "none";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}