const userName = document.getElementById("userInput");
const blogtitle = document.getElementById("titleInput");
const content = document.getElementById("contInput");
const sumit = document.getElementById("mysumit");

function func1(){
    userName.innerHTML = userInput.value;
    console.log(userName);
}

sumit.addEventListener('click', func1);

function func2(){
    blogtitle.innerHTML = titleInput.value;
    console.log(blogtitle);
}
sumit.addEventListener('click', func2);

function func3 (){
    content.innerHTML = contInput.value;
    console.log(content);
}
sumit.addEventListener('click', func3);