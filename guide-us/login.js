// Toggle to Show Sign-Up Form
function showSignUp() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

// Toggle to Show Login Form
function showLogin() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Validate Login Form
function validateLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Login successful!");
    return false; // Prevent actual form submission
}

// Validate Sign-Up Form
function validateSignUp() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm').value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Sign-Up successful! (For demo purposes)");
    return false; // Prevent actual form submission
}

// After successful login
localStorage.setItem("userName", enteredUserName);
window.location.href = "dashboard.html"; // Redirect to dashboard

