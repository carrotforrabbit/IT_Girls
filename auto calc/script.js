const form = document.querySelector('.form');
const autoType = document.querySelector('.select');
const services = document.querySelectorAll('.inputChoice');
const result = document.querySelector('.results');
const error = document.querySelector('.error');

form.onsubmit = (evt) => {
	if (autoType.value == '') {
        error.innerHTML = 'Выбирете марку машины';
        error.style.border = '1px solid red';
        error.style.backgroundColor = 'lightpink';
    } else {
    console.log(result);
    evt.preventDefault();
	let total;
	const status = autoType.value;
	total = +status;

	for (let i = 0; i < services.length; i++) {
		if (services[i].checked) {
			total = total + Number(services[i].value);
		}
	}
	result.innerHTML = total;
    error.innerHTML = '';
    error.style.border = '';
    error.style.backgroundColor = '';
}
};