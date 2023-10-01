let form = document.querySelector(".form");
const formvalues = {
  username: null,
  email: null,
  password: null,
  password1: null,
};

let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let password1 = document.querySelector(".password1");


function checkData() {

  let usernameValue = username.value.trim();
  let emailValue = document.querySelector(".email").value.trim();
  let passwordValue = document.querySelector(".password").value.trim();
  let password1Value = document.querySelector(".password1").value.trim();

  if (usernameValue === "") {
    setError(username, "Username can't be blank");
    formvalues.username = false
  } else if (usernameValue.length <= 3) {
    setError(username, "Name Have Alteast 4 Character");
    formvalues.username = false
  } else {
    setSuccess(username);
    formvalues.username = true
  }

  if (emailValue === "") {
    setError(email, "Email can't be blank");
    formvalues.email = false;
  } else if (!isEmail(emailValue)) {
    setError(email, "Formate Is Not Valid");
    formvalues.email = false;
  } else {
    setSuccess(email);
    formvalues.email = true;
  }

  if (passwordValue === "") {
    setError(password, "password can't be blank");
    formvalues.password = false;
  } else if (passwordValue.length <= 5) {
    setError(password, "PassWord Should've altest 6 Character");
    formvalues.password = false;
  } else {
    setSuccess(password);
    formvalues.password = true;
  }

  if (password1Value !== passwordValue ) {
    setError(password1, "Both password should be same ");
    formvalues.password1 = false;
  }else if(password1Value == ""){
    setError(password1,"password can't be blank")
    formvalues.password1 = false;
  }else {
    setSuccess(password1);
    formvalues.password1 = true
  }
}

function setError(error, msg) {
  error.style.border = "var(--error-color) 2px solid";
  error.nextElementSibling.innerText = msg;
  error.nextElementSibling.classList.add("error");
}

function setSuccess(success) {
  success.style.border = "var(--success-color) 2px solid";
  success.nextElementSibling.classList.remove("error");
}


function isEmail(e){
    let reg =  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return reg.test(e)
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkData();

  const SuccessObj = {
    username: username.value,
    email: email.value,
    password: password.value,
    password1: password1.value,
  };

  if(Object.values(formvalues).every((value) => value === true)){
    console.log('Form Filled Sucesfully', SuccessObj)
  }else{
    console.log('Validation failed, Please Coorect the Values')
    alert('Form Not Submmited')
  }

   username.value = "";
   email.value = "";
   password.value = "";
   password1.value = "";
});