
"use strict"
const Text = document.getElementById("welcomeText");
const logoutLink = document.querySelector('a[href="index.html"]');

if (Text) {
  const username = localStorage.getItem("loggedInUser");

  if (username) {
    Text.textContent = `Welcome ${username}`;
  } else {
    
    window.location.href = "index.html";
  }
}

if (logoutLink) {
  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
  });
}