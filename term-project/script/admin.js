'use strict';
(function () {
    window.addEventListener('load', init);
    /**
     * initiates page upon load
     */
    function init() {
        document.getElementById("selected-watch-id").addEventListener('click', chooseItemEdit);
        document.getElementById("add-product").addEventListener('click', addNewItem);
    }

    // makes it so the person knows what watch they are editing
    // adds the attributes that can be edited 
    // hides the add new item part of page
    function chooseItemEdit() {
        document.getElementById("new-item").classList.remove('show');
        document.getElementById("new-item").classList.add('hide');
        let x = document.getElementById('product-id-names');
        //the actual option name
        if(x.value != "no-option") {
        let text = x.options[x.selectedIndex].text;
        //the Product ID
        let y = x.value;
        document.getElementById("product-id-label2").innerHTML = "Product: " + text;
        document.getElementById("product-id-label1").innerHTML = "Product ID: " + y;
        document.getElementById('product-edit-inputs').classList.add('show');
        document.getElementById('product-edit-inputs').classList.remove('hide');
        }
    }

    // allows the person to added a new watch
    // hides the editing part of an already existing watch
    function addNewItem() {
        document.getElementById("product-id-label2").innerHTML = "";
        document.getElementById("product-id-label1").innerHTML = "";
        document.getElementById('product-edit-inputs').classList.add('hide');
        document.getElementById('product-edit-inputs').classList.remove('show');
        document.getElementById("new-item").classList.remove('hide');
        document.getElementById("new-item").classList.add('show');
    }


})();