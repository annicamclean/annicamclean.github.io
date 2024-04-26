'use strict';
(function () {
    window.addEventListener('load', init);
    /**
     * initiates page upon load
     */
    function init() {
        document.getElementById("selected-watch-id").addEventListener('click', chooseItemEdit);
        document.getElementById("add-product-btn").addEventListener('click', addNewItem);

    }

    let chosenId = 0;
    // makes it so the person knows what watch they are editing
    // adds the attributes that can be edited 
    // hides the add new item part of page
    function chooseItemEdit() {
        document.getElementById("new-item").classList.remove('show');
        document.getElementById("new-item").classList.add('hide');
        let x = document.getElementById('product-id-names');
        //the actual option name
        if (x.value != "no-option") {
            let text = x.options[x.selectedIndex].text;
            //the Product ID
            let y = x.value;
            document.getElementById("product-id-label2").innerHTML = "Product: " + text;
            document.getElementById("product-id-label1").innerHTML = "Product ID: " + y;
            document.getElementById('product-edit-inputs').classList.add('show');
            document.getElementById('product-edit-inputs').classList.remove('hide');
            document.getElementById("id").value = y;
            chosenId = y;
            console.log(chosenId);
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


    document.getElementById("add-product").addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm();
    });

    function submitForm() {
        let params = new FormData(document.getElementById("add-product"));

        console.log("THIS IS PARAMS: " + params);
        let jsonBody = JSON.stringify(Object.fromEntries(params));
        console.log("THIS IS THE JSON BODY: \n" + jsonBody);
        fetch("http://localhost:8000/admin/new/item", {
            method: "POST",
            body: jsonBody,
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then(data => {
                console.log("THIS IS THE DATA: \n" + data);
            })
            .catch(alert);
    }

    document.getElementById("change-btn").addEventListener("click", function (e) {
        e.preventDefault();
        let id = chosenId;
        console.log(id);
        submitUpdateForm(id);
    });



    function submitUpdateForm(id) {
        let params = new FormData(document.getElementById("product-edit-inputs")); // pass in entire form tag
        console.log("THIS IS PARAMS: " + params);
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        console.log("THIS IS THE JSON BODY: \n" + jsonBody);

        fetch(`http://localhost:8000/admin/update/id/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonBody,
        })
            .then(data => {
                console.log("THIS IS THE DATA: \n" + data);
            })
            .catch(console.error("Not WOrking"));
    }

    document.getElementById("bulk-btn").addEventListener("click", function (e) {
        e.preventDefault();
        bulkUpload();
    });

    function bulkUpload() {
        let jsonFile = document.getElementById('json-file');
        console.log("THIS IS JSON FILE: " + jsonFile);
        let file = jsonFile.files[0];
        console.log("THIS IS FILE: " + file);

        if (!file) {
            alert("Please add a file!");
            return;
        }


        let params = new FormData();
        params.append('jsonFile', file);

        console.log("THIS IS PARAMS: " + params);
        let jsonBody = JSON.stringify(Object.fromEntries(params));
        console.log("THIS IS THE JSON BODY: \n" + jsonBody);
        fetch("http://localhost:8000/admin/bulk", {
            method: "POST",
            body: jsonBody,
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then(data => {
                console.log("THIS IS THE DATA: \n" + data);
            })
            .catch(alert);
    }

    function goHome() {
        console.log("Going home");
        location.refresh();
    }

})();