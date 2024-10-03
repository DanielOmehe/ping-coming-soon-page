const notifyForm = document.querySelector(".ping-coming-soon-form");
const emailField = document.getElementById("ping-mail");
const errorMessage = document.querySelector(".ping-message");

const checkEmail = () => {
  const emailRegex = /^([a-z\d\,-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (!emailField.value.match(emailRegex)) {
    emailField.classList.remove("success");
    errorMessage.classList.remove("success");
    emailField.classList.add("error");
    errorMessage.classList.add("error");
    errorMessage.innerText = "Please provide a valid email address";

    if (emailField.value === "") {
      emailField.classList.remove("success");
      errorMessage.classList.remove("success");
      emailField.classList.add("error");
      errorMessage.classList.add("error");
      errorMessage.innerText = "Email cannot be blank";
    }
  } else {
    emailField.classList.remove("error");
    errorMessage.classList.remove("error");
    emailField.classList.add("success");
    errorMessage.innerText = "";
  }
};

emailField.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkEmail();
});

notifyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();

  if (!emailField.classList.contains("error")) {
    Swal.fire({
      title: "Success",
      text: "Email Registered Successfully",
      icon: "success",
    });

    notifyForm.reset();
    emailField.classList.remove('success');
    return false;
  }
});
