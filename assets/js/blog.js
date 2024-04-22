const testTitle = document.getElementById("testTitle")

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }



 function displayUserName () {
    const nameFromLocalStorage = localStorage.getItem("Title")
    //const contentFromLocalStorage = localStorage.getItem("Content")
    if (nameFromLocalStorage) {
      testTitle.textContent = nameFromLocalStorage
    } else {
      testTitle.textContent = "No name data in local storage"
    }
  }
  
  displayUserName();
 
  