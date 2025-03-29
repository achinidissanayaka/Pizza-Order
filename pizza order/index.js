function calculateTotal() {
    let size = document.getElementById('pizza-size').value;
    let price = 0;

    // Base price based on size
    switch (size) {
        case 'small':
            price = 800;
            break;
        case 'medium':
            price = 1000;
            break;
        case 'large':
            price = 1500;
            break;
    }

    // Adding the prices of selected toppings
    if (document.getElementById('pepperoni').checked) {
        price += 200;
    }
    if (document.getElementById('mushrooms').checked) {
        price += 250;
    }
    if (document.getElementById('onions').checked) {
        price += 200;
    }
    if (document.getElementById('sausage').checked) {
        price += 300;
    }

    // Display total price
    document.getElementById('total-price').innerText = 'Total Price: Rs.' + price.toFixed(2);
}
