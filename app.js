const currencyEleOne = document.querySelector('#currency-one');
const currencyEleTwo = document.querySelector('#currency-two');
const amountEleOne = document.querySelector('#amount-one');
const amountEleTwo = document.querySelector('#amount-two');
const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

// Calculator Function

const calculate = () => {
	const currencyOne = currencyEleOne.value;
	const currencyTwo = currencyEleTwo.value;

	fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne}`).then((res) => res.json()).then((data) => {
		const rate = data.rates[currencyTwo];
		rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
		amountEleTwo.value = (amountEleOne.value * rate).toFixed(2);
	});
};

// Event Listeners
currencyEleOne.addEventListener('change', calculate);
amountEleOne.addEventListener('input', calculate);
currencyEleTwo.addEventListener('change', calculate);
amountEleTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
	const temp = currencyEleOne.value;
	currencyEleOne.value = currencyEleTwo.value;
	currencyEleTwo.value = temp;
	calculate();
});
