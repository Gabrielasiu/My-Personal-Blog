
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
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


localStorage.setItem('userName', userInput);
localStorage.setItem('blogtitle', titleInput);
localStorage.setItem('content', contInput);