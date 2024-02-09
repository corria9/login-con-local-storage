const logInForm = document.querySelector('#loginForm');
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email);
    if (!validUser) { // Si el usuario NO es válido, muestra la alerta y redirige a login.html
        alert('Usuario no registrado!');
        window.location.href = 'login.html';
        return;
    }
    if (validUser.password !== password) { // Si la contraseña es incorrecta, muestra la alerta y redirige a login.html
        alert('Contraseña incorrecta!');
        window.location.href = 'login.html';
        return;
    }
    alert(`Bienvenido ${validUser.name}`); // Muestra el mensaje de bienvenida con el nombre de usuario
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'index.html'; // Redirige al usuario a index.html después de iniciar sesión
});

// Ejemplo de cómo guardar un nuevo usuario en localStorage
const newUser = { name: "Nombre del Usuario", email: "correo@example.com", password: "contraseña" };
const Users = JSON.parse(localStorage.getItem('users')) || [];
Users.push(newUser);
localStorage.setItem('users', JSON.stringify(Users));
