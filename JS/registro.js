// Registro de Usuario
document.getElementById('registroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let contrasena = document.getElementById('contrasena').value;

  let usuario = {
    nombre: nombre,
    email: email,
    contrasena: contrasena
  };

  localStorage.setItem(email, JSON.stringify(usuario));

  Swal.fire({
    icon: 'success',
    title: '¡Registro exitoso!',
    text: 'Ahora puedes iniciar sesión con tu email y contraseña.',
    showConfirmButton: false,
    timer: 2000
  }).then(function () {
    document.getElementById('registroForm').reset();
  });
});

// Inicio de Sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let email = document.getElementById('email').value;
  let contrasena = document.getElementById('contrasena').value;

  let usuario = JSON.parse(localStorage.getItem(email));

  if (usuario && usuario.contrasena === contrasena) {
    Swal.fire({
      icon: 'success',
      title: '¡Inicio de sesión exitoso!',
      showConfirmButton: false,
      timer: 2000
    }).then(function () {
      document.getElementById('loginForm').reset();
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Email o contraseña incorrectos',
      showConfirmButton: false,
      timer: 2000
    });
  }
});

