export function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value.length === 0) {
    showError(firstName);
  } else {
    removeError(firstName);
  }

  if (lastName.value.length === 0) {
    showError(lastName);
  } else {
    removeError(lastName);
  }

  if (!email.validity.valid) {
    showError(email);
  } else {
    removeError(email);
  }

  if (password.value.length === 0) {
    showError(password);
  } else {
    removeError(password);
  }
}

function showError(element) {
  element.classList.add("error-color");

  element.nextElementSibling.firstChild.innerHTML = `${element.placeholder} cannot be empty`;
  if (
    element === email &&
    element.value.length !== 0 &&
    !element.validity.valid
  ) {
    element.nextElementSibling.firstChild.innerHTML =
      "Looks like this is not an email";
  }

  element.nextElementSibling.style.display = "block";
  element.nextElementSibling.nextElementSibling.style.display = "block";
}

function removeError(element) {
  element.classList.remove("error-color");
  element.nextElementSibling.style.display = "none";
  element.nextElementSibling.nextElementSibling.style.display = "none";
}
