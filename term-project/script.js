var lcsContainer = document.getElementById("lcsContainer");
var webpageNav = document.getElementById("webpage-nav");
var topNav = document.getElementsByClassName("top-nav");
var detailsNav = document.querySelectorAll(".small-screen");



lcsContainer.style.maxHeight = "0px";
webpageNav.style.maxHeight = "0px";
detailsNav.style.maxHeight = "0px";

function toggleSplashMenu() {
    if (topNav.style.maxHeight === "0px") {
        topNav.style.maxHeight = "150px";
    } else {
        topNav.style.maxHeight = "0px";
    }
}

function toggleAllMenu() {
    if (detailsNav.style.maxHeight === "0px") {
        detailsNav.style.maxHeight = "150px";
    } else {
        detailsNav.style.maxHeight = "0px";
    }
}