function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  alert("Thank you for contacting me, " + name + "!");
  return true;
}