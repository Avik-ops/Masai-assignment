class Item {  
    constructor(id, name, quantity, price) {  
        this.id = id;  
        this.name = name;  
        this.quantity = quantity;  
        this.price = price;  
    }  
}  

function addItem(inventory, item) {  
    inventory.push(item);  
    console.log("Adding item:", inventory);  
}  

function updateItem(inventory, id, newDetails) {  
    const itemIndex = inventory.findIndex(item => item.id === id);  
    if (itemIndex !== -1) {  
        Object.assign(inventory[itemIndex], newDetails);  
        console.log("Updating item:", inventory);  
    } else {  
        console.log("Item not found.");  
    }  
}  

function deleteItem(inventory, id) {  
    const itemIndex = inventory.findIndex(item => item.id === id);  
    if (itemIndex !== -1) {  
        inventory.splice(itemIndex, 1);  
        console.log("Deleting item:", inventory);  
    } else {  
        console.log("Item not found.");  
    }  
}  

function getItem(inventory, id) {  
    return inventory.find(item => item.id === id) || null;  
}  

function printInventory(inventory) {  
    console.log("Current Inventory:", JSON.stringify(inventory, null, 2));  
}  

let inventory = [  
    new Item(1, 'Apple', 10, 0.5),  
    new Item(2, 'Banana', 20, 0.2)  
];  

console.log("Initial Inventory:");  
printInventory(inventory);  

addItem(inventory, new Item(3, 'Orange', 15, 0.7));  

updateItem(inventory, 2, { quantity: 30 });  

deleteItem(inventory, 1);  

printInventory(inventory);