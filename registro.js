// Registro de Usuario
document.getElementById('registroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  var usuario = {
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

  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  var usuario = JSON.parse(localStorage.getItem(email));

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
