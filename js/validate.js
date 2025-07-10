function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let components = document.querySelectorAll('input[name="components"]:checked');
  let category = document.getElementById("category").value;
  let date = document.getElementById("date").value;
  let file = document.getElementById("file").value;
  let message = document.getElementById("message").value.trim();

  // Name
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Email
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Gender
  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  // Components (Checkbox)
  if (components.length === 0) {
    alert("Please select at least one preferred component.");
    return false;
  }

  // Category (Dropdown)
  if (category === "") {
    alert("Please select a category.");
    return false;
  }

  // Date
  if (date === "") {
    alert("Please choose a preferred delivery date.");
    return false;
  }

  // File Upload
  if (file === "") {
    alert("Please upload a circuit diagram.");
    return false;
  } else {
    let extension = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
    if (!["jpg", "png", "pdf"].includes(extension)) {
      alert("Only JPG, PNG or PDF files are allowed.");
      return false;
    }
  }

  // Message
  if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
