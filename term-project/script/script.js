'use strict';
(function () {
    window.addEventListener('load', init);
    /**
     * initiates page upon load
     */
    function init() {
        //document.getElementById("menu-icon-button").addEventListener('click', toggleAllMenu);
    }
    let smallScreenHidden = true;


    function toggleAllMenu() {
        if (smallScreenHidden === true) {
            smallScreenHidden = false;
            document.getElementById('small-screen').style.display = 'block';
        } else {
            document.getElementById('small-screen').style.display = 'none';
            smallScreenHidden = true;
        }
    }


})();