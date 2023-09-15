
var pizzaOrder = () => {

    const customer=document.querySelectorAll('#customerName');
    const pizzaSize = document.querySelector('input[name="pizzaSize"]:checked').id;
    const toppingCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const deliveryMethodSelect = document.querySelector("#deliveryMethod");
    
    let customerName = customer.value;
    let toppingsResult = [];
    let cost = 0;
    let deliveryResult= deliveryMethodSelect.options[deliveryMethod.selectedIndex].value;
    
    switch (pizzaSize) { 
    
        case 'size2':
        cost += 7.50
        break;
        case 'size4':
        cost +=10.50;
        break;
        case 'size6':
        cost +=12.50;
        break;
        case 'size8':
        cost += 15.50
        break;
    }
    
     toppingCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
    toppingsResult.push(checkbox.value);
    
    }
    
    });
    
    if (toppingsResult.lenght> 4) {
        cost += (toppingsResult.length - 4) * 0.5;
    }
    
    if (deliveryResult === "homeDelivery") {
        cost += 5;
    }
    
     document.getElementById('totalCost').textContent = '€'+ cost;
}