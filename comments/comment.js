const input = document.querySelector('.comment');
const button = document.querySelector('.btn');
const error = document.querySelector('.error');
const result = document.querySelector('.result');

button.addEventListener ('click', () => {
    if (input.value != "") {
        error.innerHTML = "";
        error.classList.remove("errorMSG");
    let str = input.value.toLowerCase();
    console.log (str);
    let reg = /(viagra)|(xxx)/g;
    let newStr = str.replace(reg, "***");
    console.log(newStr);
    addElement(newStr);
    input.value = '';
    console.log(newStr);

    function addElement(elementComment) {
        let elementResult = document.createElement('div');
        elementResult.innerHTML = elementComment;
        document.querySelector('.result').appendChild(elementResult);
        elementResult.classList.add("commentText");
    }} else {
        error.innerHTML = "Add your comment!";
        error.classList.add("errorMSG");
    }  
    }
)