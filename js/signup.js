console.log("signup")

let signup=document.getElementById('signup');
signup.addEventListener("click",
    function signup(event) {
        event.preventDefault(); 
    
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
    
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            alert("User already registered. Please log in.");
            return;
        }
    
       
        const userData = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(userData));
        localStorage.setItem('currentUserEmail', email);
    
        
        window.location.href = 'index.html';
    }
)    