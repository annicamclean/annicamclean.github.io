//grabs all images and changes size of certain ones
const recommendations = document.querySelectorAll('img');
const desc = document.querySelectorAll('p.desc');
for (let index = 0; index < recommendations.length; index++) {
    let element = recommendations[index];
    element.addEventListener('click', expand);
}

function expand(event) {
    const smallImage = event.currentTarget;
    console.log(smallImage.src);
    const bigImage = document.querySelector(".big");
    if (!bigImage) {
        smallImage.classList.remove('small');
        smallImage.classList.add('big');
        description(smallImage.src);
    } else {
        bigImage.classList.remove('big');
        bigImage.classList.add('small');
        smallImage.classList.remove('small');
        smallImage.classList.add('big');
        description(smallImage.src);
    }
}

//adds description with image
function description(currentImage) {
    if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Spartan-Burger-Copy.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc1');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc1');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Black-Bean-Burger-Copy.jpeg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc2');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc2');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Bacon-Burger-Copy.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc3');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc3');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Spartan-Burger.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc4');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc4');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Black-Bean-Burger.jpeg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc5');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc5');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Bacon-Burger.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc6');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc6');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Grilled-Teriyaki-Chicken.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc7');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc7');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/orange-chicken.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc8');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc8');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Honey-Walnut-Shrimp.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc9');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc9');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Spicy-Chicken-Sandwhich.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc10');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc10');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/12-Count-Nuggets.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc11');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc11');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else if (currentImage == "https://annicamclean.github.io/csc300x-hw3/images/Cobb-Salad.jpg") {
        const oldDesc = document.querySelector('.show');
        if (!oldDesc) {
            const newDesc = document.querySelector('.desc12');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        } else {
            oldDesc.classList.remove('show');
            oldDesc.classList.add('hide');
            const newDesc = document.querySelector('.desc12');
            newDesc.classList.remove('hide');
            newDesc.classList.add('show');
        }
    } else {
        const hideAll = document.querySelector('.show');
        hideAll.classList.remove('show');
        hideAll.classList.add('hide');
    }
}

let grandTotal = 0;

function displayTotal() {
    let total = document.querySelector("#total");
    total.textContent = "Total: $" + grandTotal.toFixed(2);
}

displayTotal();

//Calls AddItem() or RemoveItem() with a parameter
let item1add = document.getElementById("addItem1");
item1add.addEventListener("click", addItem.bind(null, 1));

let item1remove = document.getElementById("removeItem1");
item1remove.addEventListener("click", removeItem.bind(null, 1));

let item2add = document.getElementById("addItem2");
item2add.addEventListener("click", addItem.bind(null, 2));

let item2remove = document.getElementById("removeItem2");
item2remove.addEventListener("click", removeItem.bind(null, 2));

let item3add = document.getElementById("addItem3");
item3add.addEventListener("click", addItem.bind(null, 3));

let item3remove = document.getElementById("removeItem3");
item3remove.addEventListener("click", removeItem.bind(null, 3));

let item4add = document.getElementById("addItem4");
item4add.addEventListener("click", addItem.bind(null, 4));

let item4remove = document.getElementById("removeItem4");
item4remove.addEventListener("click", removeItem.bind(null, 4));

let item5add = document.getElementById("addItem5");
item5add.addEventListener("click", addItem.bind(null, 5));

let item5remove = document.getElementById("removeItem5");
item5remove.addEventListener("click", removeItem.bind(null, 5));

let item6add = document.getElementById("addItem6");
item6add.addEventListener("click", addItem.bind(null, 6));

let item6remove = document.getElementById("removeItem6");
item6remove.addEventListener("click", removeItem.bind(null, 6));

let item7add = document.getElementById("addItem7");
item7add.addEventListener("click", addItem.bind(null, 7));

let item7remove = document.getElementById("removeItem7");
item7remove.addEventListener("click", removeItem.bind(null, 7));

let item8add = document.getElementById("addItem8");
item8add.addEventListener("click", addItem.bind(null, 8));

let item8remove = document.getElementById("removeItem8");
item8remove.addEventListener("click", removeItem.bind(null, 8));

let item9add = document.getElementById("addItem9");
item9add.addEventListener("click", addItem.bind(null, 9));

let item9remove = document.getElementById("removeItem9");
item9remove.addEventListener("click", removeItem.bind(null, 9));


//Depending on the button clicked on Meal Plan Page it removes an item
function addItem(number) {
    if (number === 1) {
        let itemValue = document.getElementById('item1').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item1').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 999;
        grandTotal = grandTotal / 100;
    } else if (number === 2) {
        let itemValue = document.getElementById('item2').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item2').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1139;
        grandTotal = grandTotal / 100;
    } else if (number === 3) {
        let itemValue = document.getElementById('item3').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item3').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1209;
        grandTotal = grandTotal / 100;
    } else if (number === 4) {
        let itemValue = document.getElementById('item4').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item4').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 965;
        grandTotal = grandTotal / 100;
    } else if (number === 5) {
        let itemValue = document.getElementById('item5').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item5').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1129;
        grandTotal = grandTotal / 100;
    } else if (number === 6) {
        let itemValue = document.getElementById('item6').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item6').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 979;
        grandTotal = grandTotal / 100;
    } else if (number === 7) {
        let itemValue = document.getElementById('item7').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item7').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1080;
        grandTotal = grandTotal / 100;
    } else if (number === 8) {
        let itemValue = document.getElementById('item8').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item8').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1230;
        grandTotal = grandTotal / 100;
    } else {
        let itemValue = document.getElementById('item9').textContent;
        itemValue = parseInt(itemValue) + 1;
        document.getElementById('item9').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal + 1380;
        grandTotal = grandTotal / 100;
    }
    displayTotal();
}


//Depending on the button clicked on Meal Plan Page it removes an item
function removeItem(numberRemove) {
    if (numberRemove === 1) {
        let itemValue = document.getElementById('item1').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item1').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 999;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 2) {
        let itemValue = document.getElementById('item2').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item2').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1139;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 3) {
        let itemValue = document.getElementById('item3').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item3').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1209;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 4) {
        let itemValue = document.getElementById('item4').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item4').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 965;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 5) {
        let itemValue = document.getElementById('item5').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item5').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1129;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 6) {
        let itemValue = document.getElementById('item6').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item6').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 979;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 7) {
        let itemValue = document.getElementById('item7').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item7').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1080;
        grandTotal = grandTotal / 100;
    } else if (numberRemove === 8) {
        let itemValue = document.getElementById('item8').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item8').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1230;
        grandTotal = grandTotal / 100;
    } else {
        let itemValue = document.getElementById('item9').textContent;
        itemValue = parseInt(itemValue) - 1;
        document.getElementById('item9').innerHTML = itemValue;
        grandTotal = grandTotal * 100;
        grandTotal = grandTotal - 1380;
        grandTotal = grandTotal / 100;
    }
    displayTotal();
}

