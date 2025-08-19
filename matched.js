const numbers = [11, 22, 44, 55, 66, 77];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }
// mordern javascript e for loop evabe lekha jai(for..of loop)

// for (const number of numbers){
// // const number = numbers;
// console.log(number)
// // console.log(number)
// }

const products = [
  { id: 1, name: 'walton Prime', price: 45000 },
  { id: 2, name: 'vivo phone', price: 55000 },
  { id: 3, name: 'shamshang hd1', price: 65000 },
  { id: 4, name: 'lenevo Phone', price: 95000 },
  { id: 5, name: 'itel  Phone lapToP', price: 25000 }
];
// for (const product of products) {
//   console.log(product.name + ' price:', product.price);
// }
function matchProduct(products, search) {
  const matched = [];
  for (const product of products) {
    // namer modde kichu khuji olpo match korche kina tokhon 
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);

    }

  }
  return matched;
}
const result = matchProduct(products, 'laptop');
console.log(result);