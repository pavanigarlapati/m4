const boxen = require("boxen");

const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1️⃣ Classic (default)
console.log(
  boxen(message, {
    title: title,
    padding: 1
  })
);

// 2️⃣ SingleDouble
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble"
  })
);

// 3️⃣ Round
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round"
  })
);

// ⭐ Bonus: Background color
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round",
    backgroundColor: "green",
    borderColor: "yellow"
  })
);
