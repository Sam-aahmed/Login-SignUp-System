
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("Password");
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    
    if (!emailInput || !passwordInput || !emailError || !passwordError) {
      console.error("One or more input elements were not found. Check your HTML.");
      return;
    }

  
    const email = emailInput?.value || "";
    const password = passwordInput?.value || "";

    
    emailError.textContent = "";
    passwordError.textContent = "";
    emailError.classList.add('d-none');
    passwordError.classList.add('d-none');

    let hasError = false;

    
    if (email === "") {
      emailError.textContent = "Email is required.";
      emailError.classList.remove('d-none');
      hasError = true;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format.";
      emailError.classList.remove('d-none');
      hasError = true;
    }

    
    if (password === "") {
      passwordError.textContent = "Password is required.";
      passwordError.classList.remove('d-none');
      hasError = true;
    }

    if (hasError) return;

    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      passwordError.textContent = "Incorrect email or password.";
      passwordError.classList.remove('d-none');
      return;
    }

   
    localStorage.setItem("loggedInUser", user.name);
    window.location.href = "welcome.html";
  });
}


