function shoppingCart() {
    var orders = JSON.parse(localStorage.getItem('cart'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;

    var nameElement = document.querySelector("#name");
    var sizeElement = document.querySelector("#size");
    var priceElement = document.querySelector("#price");
    var billElement = document.querySelector("#total");

    nameElement.textContent = 'Name';
    sizeElement.textContent = 'Size';
    priceElement.textContent = 'Price (&pound;)';

    var totalPrice = 0; // Initialize total price variable

    for (let i = 0; i < cartSize; i++) {
        var button = '<div class="del" onclick="removeItem(' + i + ')">x</div>';
        nameElement.innerHTML += '<h4>' + orders[i].name + '</h4>';
        let sizeText = '';
        if (orders[i].size) {
            sizeText = orders[i].size === 'M' ? 'M - Medium' : 'L - Large';
        }
        sizeElement.innerHTML += '<h4>' + sizeText + '</h4>';
        priceElement.innerHTML += '<h4>&pound;' + orders[i].price.toFixed(2) + button + '</h4>';

        totalPrice += orders[i].price; // Add current item's price to total
    }

    billElement.innerHTML = '<h2>Total: &pound;' + totalPrice.toFixed(2) + '</h2>'; // Display total price

    // Update the total in localStorage as well
    localStorage.setItem('total', totalPrice.toFixed(2));
}

document.addEventListener('DOMContentLoaded', function () {
    shoppingCart(); // Call the shoppingCart function when the page loads
});
