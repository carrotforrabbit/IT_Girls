const form = document.querySelector('.form');
const autoType = document.querySelector('.select');
const services = document.querySelectorAll('.inputChoice');
const result = document.querySelector('.results');

form.onsubmit = (evt) => {
	evt.preventDefault();
	let total;
	const status = autoType.value;
	total = +status;
	console.log(total);

	for (let i = 0; i < services.length; i++) {
		if (services[i].checked) {
			total = total + Number(services[i].value);
		}
	}
	result.innerHTML = total;
};