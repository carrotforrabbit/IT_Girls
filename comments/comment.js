const input = document.querySelector('.comment');
const button = document.querySelector('.btn');
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const author = document.querySelector('.author');
const img = document.querySelector('.userpic');
const clear = document.querySelector('.clear');
let allComments = [];

document.addEventListener('DOMContentLoaded', function(event) {
    let name = localStorage.getItem('name');
    if (name !== null) {
        author.value = name;
    }

    let avatar = localStorage.getItem('avatar');
    if (avatar !== null) {
        img.value = avatar;
    }
    
    const notesString = localStorage.getItem('notes');
    if (notesString !== null) {
        allComments = JSON.parse(notesString);
    }
    if (allComments.length > 0) {
        for (let comment of allComments) {
            result.innerHTML += comment;
                }
            }
})

button.addEventListener ('click', () => {
    if (input.value != "") {
        error.innerHTML = "";
        error.classList.remove("errorMSG");
    let str = input.value.toLowerCase();
    let reg = /(viagra)|(xxx)/g;
    let newStr = str.replace(reg, "***");
    addElement(newStr);
    input.value = '';

    function checkMessage() {
        if (localStorage.getItem('author') == null) {
            localStorage.setItem('name', author.value);
        }
        if (localStorage.getItem('img') == null) {
            localStorage.setItem('avatar', img.value);
        }
        localStorage.setItem('notes', JSON.stringify(allComments));
    }

    checkMessage();

    function addElement() {
        let elementResult = document.createElement('div');
        newStrForAdding = `<img width= "60px" height="auto" src="${img.value}"> ${author.value} : ${newStr}`;
        elementResult.innerHTML = newStrForAdding;
        result.appendChild(elementResult);
        elementResult.classList.add("commentText");
        allComments.push(newStrForAdding);
    }} else {
        error.innerHTML = "Add your comment!";
        error.classList.add("errorMSG");
    }  
})

clear.addEventListener ('click', () => {
    localStorage.clear();
    result.innerHTML = '';
    author.value = '';
    img.value = '';
})