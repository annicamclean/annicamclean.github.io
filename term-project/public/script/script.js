'use strict';
(function () {
    window.addEventListener('load', init);
    /**
     * initiates page upon load
     */
    let addButtons = document.querySelectorAll('.add');
    let subButtons = document.querySelectorAll('.sub');
    let delButtons = document.querySelectorAll('.del');
    function init() {
        //document.getElementById("menu-icon-button").addEventListener('click', toggleAllMenu);
        document.getElementById("change-signup").addEventListener('click', changeToSignUp);
        document.getElementById("change-login").addEventListener('click', changeToLogin);
        addButtons.forEach(addButton => {
            addButton.addEventListener('click', () => {
                
            });
        });
    }
    let smallScreenHidden = true;

    function removeFirstLetter(word) {
        let id = word.substring(2);
    }

    function toggleAllMenu() {
        if (smallScreenHidden === true) {
            smallScreenHidden = false;
            document.getElementById('small-screen').style.display = 'block';
        } else {
            document.getElementById('small-screen').style.display = 'none';
            smallScreenHidden = true;
        }
    }


    function changeToLogin() {
        document.getElementById('login-container').classList.remove('hide')
        document.getElementById('signup-container').classList.add('hide');
    }

    function changeToSignUp() {
        document.getElementById('login-container').classList.add('hide')
        document.getElementById('signup-container').classList.remove('hide');
    }

})();