const URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let selectFrom = document.getElementById("select_from");
let selectTo = document.getElementById("select_to");
let CurrencyFrom = document.getElementById("Currency_from");
let CurrencyTo = document.getElementById("Currency_to");
let numberInput = document.getElementById("numberInput");

let exchangeButton = document.getElementById("exchangeButton");
let finalPrice = document.getElementById("finalAmount");
let oneMoney = "";
async function fetchingData() {
  let selectFromLower = selectFrom.value.toLowerCase();
  let selectToLower = selectTo.value.toLowerCase();

  let fetchingUrl = `${URL}/${selectFromLower}.json`;
  const response = await fetch(fetchingUrl);

  let data = await response.json();
  let findData = data[selectFromLower][selectToLower];
  oneMoney = findData;
  let finalAmount = numberInput.value * findData;
  console.log(finalAmount);

  finalPrice.innerText = selectToLower + finalAmount;

  CurrencyFrom.innerText = 1 + selectFrom.value;
  CurrencyTo.innerText = oneMoney + selectTo.value;
}

exchangeButton.addEventListener("click", () => {
  fetchingData();
});

// reload on the single update
selectTo.addEventListener("change", () => {
  fetchingData();
});
// reload on the single update
selectTo.addEventListener("change", () => {
  fetchingData();
});

