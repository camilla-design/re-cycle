function formValidation() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var emailAdress = document.getElementById("email").value;
  var yourMessage = document.getElementById("subject").value;
  var errorMessage = document.getElementById("error");

  errorMessage.style.padding = "18px";

  var text;

  if (firstName.length < 1) {
    text = "Your first name is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if (lastName.length < 2) {
    text = "Your last name is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if (emailAdress.indexOf("@") == -1 || emailAdress.lenght < 5) {
    text = "Your first email is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if (yourMessage.lenght < 0) {
    text = "Please enter a message with more than 50 characters";
    errorMessage.innerHTML = text;
    return false;
  }
  return true;
}