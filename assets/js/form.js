//const userNinput = document.querySelector('.userN');
//const titleInput = document.querySelector('.bTitle');
//const contInput = document.querySelector('.cont');
//const sumitInput = document.querySelector()
//const submitEl = document.querySelector('#submit');

//submitEl.addEventListener('click');
// CUANDO HAGO ESTO SOLAMENTE ME SALE EL VALOR DEL ULTIMO 

/*
let userName; 
document.getElementById("mysumit").onclick = function (){
    userName = document.getElementById("userInput").value; 
    console.log(userName);
}

let blogtitle; 
document.getElementById("mysumit").onclick = function (){
    blogtitle = document.getElementById("titleInput").value; 
    console.log(blogtitle);
}

let content; 
document.getElementById("mysumit").onclick = function (){
    content = document.getElementById("contInput").value; 
    console.log(content);
}*/
 
const userName = document.getElementById("userInput");
const blogtitle = document.getElementById("titleInput");
const content = document.getElementById("contInput");
const sumit = document.getElementById("mysumit");

function func1(){
    userName.innerHTML = userInput.value;
    console.log(userName);
    //localStorage.setItem( 'userN', userName);
}

sumit.addEventListener('click', func1);

function func2(){
    blogtitle.innerHTML = blogtitle.value;
    console.log(blogtitle);
}
sumit.addEventListener('click', func2);

function func3 (){
    content.innerHTML = content.value;
    console.log(content);
}
sumit.addEventListener('click', func3);
$('#link').click();
//document.getElementById('').click();


localStorage.setItem('userName', userInput);
localStorage.setItem('blogtitle', titleInput);
localStorage.setItem('content', contInput);