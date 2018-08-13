var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice = Math.floor(Math.random() * 100 + 1);
var item = { itemName: itemName, itemPrice: itemPrice };
cart.push(item);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  var cartEverything = "In your cart, you have";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    cartEverything += ` ${item.itemName} at $${item.itemPrice}`;
  }
  return cartEverything + '.';
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
