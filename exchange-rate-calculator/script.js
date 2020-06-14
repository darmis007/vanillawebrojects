const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate')
const swapEl = document.getElementById('swap');

//Fetch Exchange Rate and make relevant conversion
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    const amount_one = amountEl_one.value;
    const amount_two = amountEl_two.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then(res => res.json())
        .then(data => {
            price = +amount_one * +data.rates[currency_two];
            amountEl_two.value = price.toFixed(2);
            rateEl.innerHTML = `<font size="5"><b>1${currency_one} = ${((+data.rates[currency_two]).toFixed(2)) + currency_two}</b></font>`;
        });
}

//Perform swap of currency values
function swap() {
    var trans = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = trans;
    calculate();
}

//Event Listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);
swapEl.addEventListener('click', swap)

calculate()