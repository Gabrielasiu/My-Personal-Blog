//arrays 
let userNames =[]
let titles=[]
let contents=[]


function getLocalStorage (){
    
    //userNames = JSON.parse(localStorage.getItem("Username"));
    if (!(localStorage.getItem("Username")=== null)){
        userNames = JSON.parse(localStorage.getItem("Username"));
    }
}


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }


const sumitBtn = document.getElementById('mysumit');

sumitBtn.addEventListener('click', sumit); 

 function sumit(){


 const uInput = document.getElementById('userInput'); 
userNames.push(uInput.value);
 //const userStorage = uInput.value;
 localStorage.setItem('Username',JSON.stringify(userNames));

 const tInput = document.getElementById('titleInput');
 const titleStorage= tInput.value;
 localStorage.setItem( 'Title', titleStorage);

 const cInput = document.getElementById('usercont');
 const contStorage = cInput.value;
 localStorage.setItem('Content', contStorage);
  
 }

 //lamando la función 
getLocalStorage();

 /////hice esta función de abajo pero sigue sin aparecerme 
 // el valor

 //https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/#:~:text=To%20store%20data%20in%20local%20storage%2C%20you%20use%20the%20setItem,a%20key%20and%20a%20value.&text=If%20the%20key%20does%20not,the%20given%20value%20to%20it.


 
 
 /*
const userName = document.getElementById('userInput');
const blogtitle = document.getElementById('titleInput');
const content = document.getElementById('contInput');
const sumit = document.getElementById("mysumit");
const valueToStore = userName.value;

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

*/