function customGreeting(greeting, name, adjective, occasion) {
    return `${greeting}, ${name}! Have a ${adjective} ${occasion}!`;
  }

  customGreeting("Good morning", "Pouja", "fantastic", "Tuesday");

  //*********************************/
function discountedPrice(itemPrice, discount){
    return itemPrice - (itemPrice * discount);
}
discountedPrice(100, 0.25);


  //*********************************/
  function discountedAndTaxedPrice(itemPrice, tax, discount = 0.25) {
    let subtotal = itemPrice - (itemPrice * discount);
    return subtotal + (subtotal * tax);
  };

  discountedAndTaxedPrice(100, 0.10);
  discountedAndTaxedPrice(100, 0.10, 0.20);

  //*********************************/

  function add(a, b, c) {
    return a + b + c ;
  }
  const arr = [1, 2, 3];

  add(...arr);

//*********************************/

  function muppetLab(a, b, ...muppets) {
    console.log(a, ' ', b);

    console.log(muppets);
    console.log(muppets[0]);
    console.log(muppets.length); 
  }

  muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");
