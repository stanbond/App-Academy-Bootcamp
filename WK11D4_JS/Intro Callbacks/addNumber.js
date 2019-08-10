const readline = require("readline");

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
      reader.question("Please provide a number: ", function (num){
        sum += parseInt(num);
        console.log(sum);
        addNumbers(sum, numsLeft - 1, completionCallback);
      });

    } else {
      completionCallback(sum);
      reader.close();
    }
}

addNumbers(0, 3, sum => console.log("Total sum: " + sum));

