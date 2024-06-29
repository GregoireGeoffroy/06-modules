// IIFE syntax
(function() {
    // code goes here
    const inventory = [];

function addStringToInventory(str) {
    inventory.push(str);
}

require.cache['stringInventory.js'] = {
    exports: {
        inventory,
        addStringToInventory,
    },
};
  })();