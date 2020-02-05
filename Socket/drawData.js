function drawData(data) {
    drawQueue(data.queue);
    drawStatus(data.status);
}

function drawStatus(status) {
    document.getElementById('status').innerHTML = "";
    for (let i = 0; i < status.length; i++) {
        let table = document.createElement('div');
        document.getElementById('status').appendChild(table);
        let title = document.createElement('h3');
        title.innerText = "Tafel " + status[i].table;
        table.appendChild(title);
        let select = createStatusSelect(status[i].status, status[i].table);
        select.classList.add('status');
        table.appendChild(select);
    }
}

function drawQueue(queue) {
    let queueDom = document.getElementById('queue');
    queueDom.innerHTML = "";
    for (let i = 0; i < queue.length; i++) {
        let item = document.createElement('div');
        queueDom.appendChild(item);
        let total = 0;
        let productCount = document.createElement('div');
        productCount.classList.add('productCount');
        productCount.innerText = queue.length + " item";
        if (queue.length > 1) {
            productCount.innerText += "s";
        }
        item.classList.add('item');
        if (!queue[i].isOpen) {
            item.classList.add('closed');
            let openButton = document.createElement('button');
            openButton.innerText = "open order";
            openButton.classList.add("openButton");
            openButton.setAttribute("onClick", "setOpen(" + queue[i].table + ")");
            item.appendChild(openButton);
        }
        let title = document.createElement('h3');
        title.innerText = "Tafel " + queue[i].table;
        item.appendChild(title);
        item.appendChild(productCount);

        let itemList = document.createElement('ul');
        for (let ii = 0; ii < queue[i].order.length; ii++) {
            let product = document.createElement('li');
            let productTitle = document.createElement('h4');
            productTitle.innerText = queue[i].order[ii].name;
            product.appendChild(productTitle);
            let productPrice = document.createElement('span');
            productPrice.classList.add('price');
            total += queue[i].order[ii].price;

            // turns 8.5 into "€ 8,50" (example)
            productPrice.innerText = getPriceString(queue[i].order[ii].price);
            productTitle.appendChild(productPrice);
            itemList.appendChild(product);

            let extras = queue[i].order[ii].extras;
            let extraList = document.createElement('ul');
            extraList.classList.add('extras');
            product.appendChild(extraList);
            for (let iii = 0; iii < extras.length; iii++) {
                let extraTitle = document.createElement('li');
                extraTitle.innerText = extras[iii].name;

                let extraItemPrice = document.createElement('span');
                extraItemPrice.classList.add('price');
                total += extras[iii].price;

                // turns 12.5 into "+ € 12,50" (example)
                extraItemPrice.innerText = "+ " + getPriceString(extras[iii].price);
                extraTitle.appendChild(extraItemPrice);
                extraList.appendChild(extraTitle);
            }

        }

        item.appendChild(itemList);
        item.innerHTML += "<div class=\"total\">Total:<span class=\"price\">" + getPriceString(total) + "</span></div>"
    }
}

function getPriceString(price) {
    let string = "€ " + Math.floor(price) + "," + (price - Math.floor(price)) * 100;
    if (price - Math.floor(price) === 0) {
        string += "0";
    }
    return string
}

function setOpen(table) {
    socket.emit('open order', table);
}

function createStatusSelect(index, table) {
    const array = ["In Queue", "Preparing", "In the oven", "done"];
    let selectList = document.createElement("select");

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        if (i === index) {
            option.selected = true;
        }
        option.text = array[i];
        selectList.appendChild(option);
    }
    selectList.addEventListener('change', function (e) {
        socket.emit('status update', {table: table, status: parseInt(selectList.value)});
    });

    return selectList
}