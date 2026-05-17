"use strict"
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

const signForm = document.getElementById('signForm');

if (signForm) {
  signForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signName').value;
    const email = document.getElementById('signEmail').value;
    const password = document.getElementById('signPassword').value;

    if (name === '' || email === '' || password === '') {
      alert("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      alert("This email is already registered.");
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Sign-up successful!");
    window.location.href = "index.html"; 
  });
}