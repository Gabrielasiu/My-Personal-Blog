
const titleFromLocalStorage = localStorage.getItem("Title")
const contentFromLocalStorage = localStorage.getItem("Content")
const userFromLocalStorage = localStorage.getItem("Username")
//turns page into dark-mode
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}


const posts = document.querySelector(".posts");

function createElement() {
    const blogcontainer = document.createElement('div');
    blogcontainer.classList.add("blogcontainer");
    posts.appendChild(blogcontainer);
    //kuego agtegar los otros con los nombres del html (notas)
    const title = document.createElement('h4');
    title.classList.add("title");
    title.textContent = titleFromLocalStorage;
    blogcontainer.appendChild(title);
}
createElement();



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
