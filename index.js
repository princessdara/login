function login(e) {
  e.preventDefault(); // ✅ stops the form from submitting

  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let message = document.getElementById("mess");

  if (email == "" && password == "") {
    message.innerHTML = "Please fill all fields!";
    message.style.color = "red";
  } else if (email == "" || password == "") {
    message.innerHTML = "Please fill all fields!";
    message.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    message.innerHTML = "Invaild email";
    message.style.color = "red";
  }
  else if(password.length >6){
    message.innerHTML = "password must not be greater than 6";
    message.style.color = "red";
  }
  else{
    message.innerHTML=" You have login successfully✔";
    message.style.color="green"
  }
}
