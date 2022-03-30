window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem)
}

function $(elem){
    return document.querySelector(elem)
}



function init(){
    $("footer p").innerHTML = "Paál Ádám";
    $("footer p").style.textAlign = "center";
    $("footer p").style.fontSize = "20px";
}