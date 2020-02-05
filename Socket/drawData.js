function drawData(data) {
    drawQueue(data.queue);
    drawStatus(data.status);
}

function drawStatus(status) {
    document.getElementById('status').innerHTML = "";
    for (let i = 0; i < status.length; i++){
        console.log(i);
        let table = document.createElement('div');
        document.getElementById('status').appendChild(table);
        let title = document.createElement('h3');
        title.innerText = "Tafel " + status[i].table;
        table.appendChild(title);
        let statusText = document.createElement('span');
        statusText.classList.add('status');
        statusText.innerText = status[i].status;
        table.appendChild(statusText);
    }
}

function drawQueue(queue) {
    document.getElementById('queue').innerHTML = "";
    for (let i = 0; i < queue.length; i++) {
        let item = document.createElement('div');
        let total = 0;
        item.classList.add('item');
        if (!queue[i].isOpen) {
            item.classList.add('closed');
        }
        let title = document.createElement('h3');
        title.innerText = "Tafel " + queue[i].table;
        item.appendChild(title);

        let itemList = document.createElement('ul');
        for (let ii = 0; ii < queue[i].order.length; ii++){
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
            for (let iii = 0; iii < extras.length; iii++){
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
        item.innerHTML += "<div class\"total\">Total:<span class=\"price\">"+ getPriceString(total) +"</span></div>"
        document.getElementById('queue').appendChild(item);
    }
}

function getPriceString(price) {
    let string = "€ " + Math.floor(price) + "," + (price - Math.floor(price)) * 100;
    if (price - Math.floor(price) === 0){
        string += "0";
    }
    return string
}