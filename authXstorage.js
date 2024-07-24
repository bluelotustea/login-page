window.addEventListener("load", () => {
  if (localStorage.getItem("json_react_app")) {
    window.location.href = "profile.html";
  }
});
showpw = () => {
  let a = document.getElementById("password");
  if (a.type === "password") {
    a.type = "text";
  } else {
    a.type = "password";
  }
};

let loginButton = document.querySelector(".btn-login");
var form = document.querySelector(".container");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  var email = form.querySelector("#email").value;
  var password = form.querySelector("#password").value;
  let warning = document.getElementById("warning");

  const showWarning = () => {
    warning.style.display = "inline-block";
    setTimeout(() => {
      warning.style.display = "none";
    }, 3000);
  }
  const mailRec = () =>{
    warning.textContent = "Email Not Recognized";
    warning.style.display = "inline-block";
    setTimeout(() => {
      warning.style.display = "none";
    }, 3000);
  }

  if (email === "mgmg@gmail.com" && password === "password123") {
    const data = {
      email: email,
      name: "Mg Mg",
    };
    localStorage.setItem("json_react_app", JSON.stringify(data));
    window.location.href = "profile.html";
  } else if (email === "mgmg@gmail.com") {
    showWarning();
   
  } else if (email === "ayeaye@gmail.com" && password === "ayeaye123") {
   const data = {
    email: email,
    name: "Aye Aye",
   };
   localStorage.setItem("json_react_app", JSON.stringify(data))
   window.location.href = "profile.html";
  }else if (email === "ayeaye@gmail.com"){
    showWarning();
  } else {
    mailRec();
  }
});
