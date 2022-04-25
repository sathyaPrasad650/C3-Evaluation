// Store the wallet amount to your local storage with key "amount"
console.log("Sa");
// var totalAmount = document.querySelector("#wallet");
// var s = totalAmount.innerText;
// console.log('s:', s)
// console.log("totalAmount:", totalAmount);

var money = 0;
// console.log("money:", money);

function addToWallet() {
  var inputAmount = document.querySelector("#amount").value;
  console.log(inputAmount);
  money = money + Number(inputAmount);
  localStorage.setItem("amount", money);
  var totalAmount = document.querySelector("#wallet");
  totalAmount.innerText = money;
}
