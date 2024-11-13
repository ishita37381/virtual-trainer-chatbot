let login = document.getElementById('login');

login.addEventListener('click', function (e) {
    e.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const userData = JSON.parse(localStorage.getItem(email));


    if (!userData) {
        alert("User not found! Please sign up.");
        return;
    }

    if (userData.password !== password) {
        alert("Incorrect password!");
        return;
    }

    window.location.href = 'index.html';
});
