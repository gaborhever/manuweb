let position = "";

console.log(window.innerWidth);
console.log(window.innerHeight);

document.querySelector(".navbar").onclick = function(event){

    page = event.target.name;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.querySelector(".main-content").innerHTML = this.responseText;
    }
    if (page) {
        xhttp.open("GET", page + ".html");
        xhttp.send();
    }

};

document.querySelector(".hamburger-menu").onclick = function(event){

    let page = event.target.name;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.querySelector(".main-content").innerHTML = this.responseText;
    }
    if (page) {
        xhttp.open("GET", page + ".html");
        xhttp.send();
    }
    
    /*mobileMenu();*/
};

function gombLink(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.querySelector(".main-content").innerHTML = this.responseText;
    }
    if (page) {
        xhttp.open("GET", page + ".html");
        xhttp.send();
    }
};

/*function mobileMenu() {

    if(!position)
    {
        position = document.querySelector(".mobile-navbar").style.width = "280px";
    } else {
        document.querySelector(".mobile-navbar").style.width = "0px";
        position = "";
    }
}*/