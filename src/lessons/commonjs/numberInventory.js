// IIFE syntax
(function() {
    // code goes here
    const inventory = [];

function addNumbertoInventory(number) {
    inventory.push(number);
}

require.cache['./numberInventory.js'] = {
    exports: {
        inventory,
        addNumbertoInventory,
},
  };
})();