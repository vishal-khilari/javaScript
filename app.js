
/////////////////////////////////////////

const numbers = [24, 54, 76, 24, 56];

const BoolanGreater = numbers.every((number) => {
  return number > 10; // ✅ must return
});

const BoolanSoem = numbers.some((number) => {
  return number > 50; // ✅ must return
});

console.log(BoolanGreater); // true (all > 10)
console.log(BoolanSoem); // true (at least one > 50)
