window.addEventListener('load', () =>{
 if (!localStorage.getItem("json_react_app")){
    window.location.href = "login.html";
 }
});
let welcome = document.getElementById("welcome");
let storage = JSON.parse(localStorage.getItem("json_react_app"));

welcome.innerText = `Welcome ${storage.name}`;
