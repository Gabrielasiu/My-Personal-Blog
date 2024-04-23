
//const declared

const titleFromLocalStorage = localStorage.getItem("Title")
const contentFromLocalStorage = localStorage.getItem("Content")
const userFromLocalStorage = localStorage.getItem("Username")
//turns page into dark-mode
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//made my divs 

const posts = document.querySelector(".posts");


function calltitle() {
    const blogcontainer = document.createElement('div');
    blogcontainer.classList.add("blogcontainer");
    posts.appendChild(blogcontainer);
    const title = document.createElement('h4');
    title.classList.add("title");
    title.textContent = titleFromLocalStorage;
    blogcontainer.appendChild(title);
}
calltitle();


function callcontent() {

    const inputcontent = document.createElement('div');
    inputcontent.classList.add("inputcontent");
    posts.appendChild(inputcontent);
    const inputc = document.createElement('p');
    inputc.classList.add("content");
    inputc.textContent = contentFromLocalStorage;
    inputcontent.appendChild(inputc);
}
callcontent();


function callusername() {

    const username = document.createElement('div');
    username.classList.add("username");
    posts.appendChild(username);
    const userN = document.createElement('p');
    userN.classList.add("userN");
    userN.textContent = userFromLocalStorage;
    username.appendChild(userN);
}
callusername();
