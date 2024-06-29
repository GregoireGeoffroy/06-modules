// IIFE syntax
(function() {
    // code goes here
    const inventory = [];

function addNumbertoInventory(number) {
    inventory.push(number);
}

window.addNumbertoInventory = addNumbertoInventory
window.inventory = inventory;
  })();