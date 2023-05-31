document.getElementById('nombreForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var nombreUsuario = document.getElementById('nombre').value;

  openNewTab(nombreUsuario);
});

function openNewTab(nombreUsuario) {
  var newTab = window.open('', '_blank');
  newTab.document.write(`
    <html>
      <head>
        <title>Bienvenido</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
          <h2>Bienvenido a la carrera de coches interactiva</h2>
          <p>Para empezar, por favor ingresa tu nombre:</p>
          <button class="btn btn-info" onclick="showGreeting('${nombreUsuario}')">Comenzar</button>
          <div id="saludo" style="display: none;">
            <h3>Hola <span id="nombreUsuario"></span></h3>
          </div>
        </div>
        <script src="app.js"></script>
      </body>
    </html>
  `);
  newTab.document.close();
}

function showGreeting(nombreUsuario) {
  var saludoDiv = window.opener.document.getElementById('saludo');
  saludoDiv.style.display = 'block';
  var nombreUsuarioSpan = window.opener.document.getElementById('nombreUsuario');
  nombreUsuarioSpan.textContent = nombreUsuario;
}
