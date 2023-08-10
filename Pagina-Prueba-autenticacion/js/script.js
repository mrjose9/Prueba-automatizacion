document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
      
      if (username === "usuario" && password === "102030") {
        
        window.location.href = "index.html";
      } else {
        errorMessage.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
      }
    });
  });
  