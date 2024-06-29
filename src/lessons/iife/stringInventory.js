// IIFE syntax
(function() {
    // code goes here
    const inventory = [];

function addStringToInventory(str) {
    inventory.push(str);
}

window.addStringToInventory = addStringToInventory;

  })();