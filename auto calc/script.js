const form = document.querySelector('.form');
const autoType = document.querySelector('.select');
const services = document.querySelectorAll('.inputChoice');
const result = document.querySelector('.results');
const error = document.querySelector('.error');
const kia = document.querySelector('.fieldset_kia');
const ferrari = document.querySelector('.fieldset_ferrari');
const lambo = document.querySelector('.fieldset_lambo');

function changeModel() {
   
    switch (document.getElementById("autoType").value)
    {
        case "300000" : 
            kia.style.visibility = 'visible';
            break;
        case "1000000" : 
            ferrari.style.visibility = 'visible';
            break;
        case "2000000" : 
            lambo.style.visibility = 'visible'; 
            break;
    }
};

form.onsubmit = (evt) => {
	if (autoType.value == '') {
        error.innerHTML = 'Выберите марку машины';
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
	result.innerHTML = 'Стоимость машины: ' + total + ' рублей';
    error.innerHTML = '';
    error.style.border = '';
    error.style.backgroundColor = '';
}
};