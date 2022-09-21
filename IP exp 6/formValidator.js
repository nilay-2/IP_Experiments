const phoneValidator = /^\+\d{2,3}\s\d{10}/;

const emailValidator = /^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,3}/;

const passValidator = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

const pass = document.querySelector(".password");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const submit = document.querySelector("button");

const err = [];

submit.addEventListener("click", function () {
  if (!phone.value.match(phoneValidator)) err.push(new Error("Phone number is invalid"));
  if (!email.value.match(emailValidator)) err.push(new Error("Email is invalid"));
  if (!pass.value.match(passValidator)) err.push(new Error("Password must contain atleast 1 uppercase, 1 lowercase, 1 special character"));
  if (err.length) alert(err.join("\n"));
  else alert("Registration successful");
  err.length = 0;
});
