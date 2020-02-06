function drawData(data) {
    drawQueue(data.queue);
    drawStatus(data.status);
    drawIngredients(data.ingredients);
}

function drawStatus(status) {
    // empties the status element
    document.getElementById('status').innerHTML = "";

    // for each status element makes a div with a title and a select
    for (let i = 0; i < status.length; i++) {
        // the div
        let table = document.createElement('div');
        document.getElementById('status').appendChild(table);

        // the title
        let title = document.createElement('h3');
        title.innerText = "Tafel " + status[i].table;
        table.appendChild(title);

        // the select
        let select = createStatusSelect(status[i].status, status[i].table);
        select.classList.add('status');
        table.appendChild(select);
    }
}

function drawIngredients(ingredients) {
    let ingredientDom =  document.getElementById('ingredients');
   ingredientDom.innerHTML = "";
    for (let i = 0; i < ingredients.length; i++){
        let ingredient = document.createElement('div');
        ingredientDom.appendChild(ingredient);
        let ingredientTitle = document.createElement('h4');
        let ingredientNumber = document.createElement('span');
        let ingredientIdentifier = document.createElement('span');
        ingredient.appendChild(ingredientTitle);
        ingredient.appendChild(ingredientNumber);
        ingredient.appendChild(ingredientIdentifier);
        ingredientTitle.innerText = ingredients[i].name;
        ingredientNumber.innerText = ingredients[i].amount;
        ingredientIdentifier.innerText = ingredients[i].identifier;
    }
}

function drawQueue(queue) {
    //gets the Queue html dom element and clears it
    let queueDom = document.getElementById('queue');
    queueDom.innerHTML = "";

    // for every queue item loops
    for (let i = 0; i < queue.length; i++) {
        // creates a holder and adds it to the HTML dom element
        let item = document.createElement('div');
        queueDom.appendChild(item);
        item.classList.add('item');

        //start pricing (at 0 duuh) and makes the product counter
        let total = 0;
        let productCount = document.createElement('div');
        productCount.classList.add('productCount');
        productCount.innerText = queue.length + " item";
        if (queue.length > 1) {
            productCount.innerText += "s";
        }

        // adds classlist and button if an item is "closed"
        if (!queue[i].isOpen) {
            item.classList.add('closed');
            let openButton = document.createElement('button');
            openButton.innerText = "open order";
            openButton.classList.add("openButton");
            openButton.setAttribute("onClick", "setOpen(" + queue[i].table + ")");
            item.appendChild(openButton);
        }

        // creates the pizza title element and puts the product counter after it (ordering)
        let title = document.createElement('h3');
        title.innerText = "Tafel " + queue[i].table;
        item.appendChild(title);
        item.appendChild(productCount);


        // createst a list and fills it for every "Item" in there
        let itemList = document.createElement('ul');
        for (let ii = 0; ii < queue[i].order.length; ii++) {
            //item holder itself
            let product = document.createElement('li');
            itemList.appendChild(product);
            //title
            let productTitle = document.createElement('h4');
            productTitle.innerText = queue[i].order[ii].name;
            product.appendChild(productTitle);

            //price
            let productPrice = document.createElement('span');
            productPrice.classList.add('price');
            total += queue[i].order[ii].price; //adds to price
            // price to string
            productPrice.innerText = getPriceString(queue[i].order[ii].price);
            productTitle.appendChild(productPrice);

            //extra-holder
            let extras = queue[i].order[ii].extras;
            let extraList = document.createElement('ul');
            extraList.classList.add('extras');
            product.appendChild(extraList);

            //for each extra
            for (let iii = 0; iii < extras.length; iii++) {
                //extra-title
                let extraTitle = document.createElement('li');
                extraTitle.innerText = extras[iii].name;

                //extra price
                let extraItemPrice = document.createElement('span');
                extraItemPrice.classList.add('price');
                total += extras[iii].price;
                //price to string
                extraItemPrice.innerText = "+ " + getPriceString(extras[iii].price);

                //add dom to dom element
                extraTitle.appendChild(extraItemPrice);
                extraList.appendChild(extraTitle);
            }

        }

        // each item gets added to the list
        item.appendChild(itemList);

        // each item get a span that says the total price
        item.innerHTML += "<div class=\"total\">Total:<span class=\"price\">" + getPriceString(total) + "</span></div>"
    }
}

function getPriceString(price) {
    // 8.5 => "€ 8,5"
    let string = "€ " + Math.floor(price) + "," + (price - Math.floor(price)) * 100;
    // "€ 8,5" => "€ 8,50"
    if (price - Math.floor(price) === 0) {
        string += "0";
    }
    // returns the INT to STRING (price)
    return string
}

function setOpen(table) {
    // just a simple onclick function. event listeners wouldn't work..
    socket.emit('status update', {table: table, status: 1});
}

function createStatusSelect(index, table) {
    // all statuses
    const array = ["In Queue", "Preparing", "In the oven", "done"];

    //create a dom element
    let selectList = document.createElement("select");

    // for each status create an Option and a value and it it to the SELECT
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        if (i === index) {
            option.selected = true;
        }
        option.text = array[i];
        selectList.appendChild(option);
    }
    // add event listener to update on change and send it to server
    selectList.addEventListener('change', function (e) {
        socket.emit('status update', {table: table, status: parseInt(selectList.value)});
    });

    // returns the SELECT dom element
    return selectList
}