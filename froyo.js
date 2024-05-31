const flavorInput = prompt(
  "Please enter the flavors you would like separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const flavors = flavorInput.split(",");

const amount = {};

for (let ele of flavors) {
  if (amount[ele]) {
    amount[ele] += 1;
  } else {
    amount[ele] = 1;
  }
}
console.table(amount);
