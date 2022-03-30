window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem)
}

function $(elem){
    return document.querySelector(elem)
}

function ß(elem){
    return document.querySelectorAll(elem)
}

let kep = []



function init(){
    ID("csonak").innerHTML = "<img src=kepek/csonak.png alt=csonak>"
    $("footer p").innerHTML = "Paál Ádám";
    $("footer p").style.textAlign = "center";
    $("footer p").style.fontSize = "20px";
    $("footer p").style.backgroundColor = "aqua";

    let kepekhossz = ß("#bal img").length;
    for (let index = 0; index < kepekhossz; index++) {
        ß("#bal img")[index].addEventListener("click", kattintas);
        
    }
    
}


function kattintas(){
    kep.push(event.target.src);
    console.log(kep);
    event.target.removeEventListener("click", kattintas)
}
