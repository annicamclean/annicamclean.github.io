var lcsContainer = document.getElementById("lcsContainer");
var webpageNav = document.getElementById("webpage-nav");
var topNav = document.getElementsByClassName("top-nav");



lcsContainer.style.maxHeight = "0px";
webpageNav.style.maxHeight = "0px";

function toggleHomeMenu() {
    if (lcsContainer.style.maxHeight == "0px" && webpageNav.style.maxHeight == "0px") {
        lcsContainer.style.maxHeight = "150px";
        webpageNav.style.maxHeight = "150px";
    } else {
        lcsContainer.style.maxHeight = "0px";
        webpageNav.style.maxHeight = "0px";
    }
}

function toggleSplashMenu() {
    if (topNav.style.maxHeight === "0px") {
        topNav.style.maxHeight = "150px";
    } else {
        topNav.style.maxHeight = "0px";
    }
}

