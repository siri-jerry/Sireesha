// script.js

function updateOrder() {
    const form = document.getElementById('groceryForm');
    const checkboxes = form.querySelectorAll('input[name="item"]:checked');
    
    let items = [];
    let totalPrice = 0;
    
    checkboxes.forEach(checkbox => {
        const itemName = checkbox.value;
        const itemPrice = parseFloat(checkbox.getAttribute('data-price'));
        items.push(itemName);
        totalPrice += itemPrice;
    });

    const itemsList = document.getElementById('itemsList');
    const totalPriceElement = document.getElementById('totalPrice');

    itemsList.textContent = items.length > 0 ? items.join(', ') : 'None';
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
