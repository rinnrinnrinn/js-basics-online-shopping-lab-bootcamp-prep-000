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
  var cartEverything = 'In your cart, you  have';
  var cartItems = [];
  var cartPrices = [];
  if (cart.length === 0) {console.log('Your shopping cart is empty.'); }
  else {
    let i = 0;
    while (cart.length > i) {
      cartItems.push
      (Object.keys(cart[i]));
      cartPrices.push(' at $' + cart[i] [Object.keys(cart[i])]);
      cartEverything += ( ' ' + cartItems[i] + cartPrices[i]);
      
      if((2 < cart.length) && ((i) != (cart.length - 1))) {cartEverything += ',';
      
      if((1 < cart.length) && ((i + 1) === (cart.length - 1))) {cartEverything += (' and');}
      }
      else if ((1 < cart.length) && ((i + 1) === (cart.length - 1))) {cartEverything += (' and');}
      console.log(i++);
    }
  }
console.log(cartEverything + '.');
  
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
