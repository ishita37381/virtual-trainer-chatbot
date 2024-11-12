// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (email === "user@example.com" && password === "password") {
//         window.location.href = "dashboard.html";
//     } else {
//         alert("Invalid email or password.");
//     }
// });



// Toggle between login and signup
function toggleAuth() {
    const header = document.getElementById("auth-header");
    const toggleText = document.getElementById("toggle-auth");
    const form = document.getElementById("auth-form");
  
    if (header.textContent === "Login") {
      header.textContent = "Sign Up";
      toggleText.innerHTML = 'Already have an account? <span onclick="toggleAuth()">Login</span>';
    } else {
      header.textContent = "Login";
      toggleText.innerHTML = 'Don\'t have an account? <span onclick="toggleAuth()">Sign Up</span>';
    }
  }
  
  // Handle login/signup form submission
  document.getElementById("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const isSignUp = document.getElementById("auth-header").textContent === "Sign Up";
  
    if (isSignUp) {
      // Signup logic
      if (localStorage.getItem(username)) {
        alert("User already exists! Please login.");
      } else {
        localStorage.setItem(username, JSON.stringify({ password }));
        alert("Signup successful! Please login.");
        toggleAuth();
      }
    } else {
      // Login logic
      const user = JSON.parse(localStorage.getItem(username));
      if (user && user.password === password) {
        localStorage.setItem("currentUser", username);
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials!");
      }
    }
  });
  
