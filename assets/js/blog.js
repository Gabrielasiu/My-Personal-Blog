
//const declared

const titleFromLocalStorage = JSON.parse(localStorage.getItem("Title"));
const contentFromLocalStorage = JSON.parse(localStorage.getItem("Content"));
const userFromLocalStorage = JSON.parse(localStorage.getItem("Username"));



//turns page into dark-mode
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//made my divs 

const posts = document.querySelector(".posts");


function calltitle(index) {
    const blogcontainer = document.createElement('div');
    blogcontainer.classList.add("blogcontainer");
    posts.appendChild(blogcontainer);
    const title = document.createElement('h4');
    title.classList.add("title");
    title.textContent = titleFromLocalStorage[index];
    blogcontainer.appendChild(title);
}



function callcontent(index) {

    const inputcontent = document.createElement('div');
    inputcontent.classList.add("inputcontent");
    posts.appendChild(inputcontent);
    const inputc = document.createElement('p');
    inputc.classList.add("content");
    inputc.textContent = contentFromLocalStorage;
    inputcontent.appendChild(inputc);
}



function callusername(index) {

    const username = document.createElement('div');
    username.classList.add("username");
    posts.appendChild(username);
    const userN = document.createElement('p');
    userN.classList.add("usern");
    userN.textContent = userFromLocalStorage;
    username.appendChild(userN);
}



for (let i=0; i < titleFromLocalStorage.length; i++){
    
    calltitle(i)
    
    callusername(i)
    callcontent(i)
    console.log("AAAAAAAAAAAAA")
    console.log("eeEEEEEENNNNDDDDDDDDD")
}