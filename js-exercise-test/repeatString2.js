const repeatString = function (word, num) {
  if (num < 0) console.log("ERROR");
  let string = "";
  for (let i = 0; i < num; i++) {
    string += word;
  }
  console.log(string);
};
repeatString("hey", -1); // Do not edit below this line
// module.exports = repeatString;
