//arrays 
let userNames =[]
let titles=[]
let contents=[]


//gets my value from the localStorage
function getLocalStorage (){
    if (!(localStorage.getItem("Username")=== null)){
        userNames = JSON.parse(localStorage.getItem("Username"));
    }
}

function getLocalStorage (){
    if (!(localStorage.getItem("Title")=== null)){
        titles = JSON.parse(localStorage.getItem("Title"));
    }
}

function getLocalStorage (){
    if (!(localStorage.getItem("Content")=== null)){
        contents = JSON.parse(localStorage.getItem("Content"));
    }
}



//turns my website into darkmode
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

const sumitBtn = document.getElementById('mysumit');
sumitBtn.addEventListener('click', sumit); 

//when clicking the mysumit button, the input submited will get storage in localstorage  
 function sumit(){
 const uInput = document.getElementById('userInput'); 
 userNames.push(uInput.value);
 localStorage.setItem('Username',JSON.stringify(userNames));

 const tInput = document.getElementById('titleInput');
 titles.push(tInput.value);
 localStorage.setItem ('Title',JSON.stringify(titles));//( 'Title', titleStorage);

 const cInput = document.getElementById('usercont');
 contents.push(cInput.value);
 localStorage.setItem('Content', JSON.stringify(contents));
 }

 //calls the function
getLocalStorage();

