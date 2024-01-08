document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-btn');
    var mainMenu = document.querySelector('.main-nav ul.main-menu');

    menuBtn.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var modoOscuroBtn = document.getElementById('modo-oscuro-btn');
  var body = document.body;

  modoOscuroBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      // Opcional: Guardar la preferencia del usuario en localStorage
      var modoOscuroActivado = body.classList.contains('dark-mode');
      localStorage.setItem('modoOscuro', modoOscuroActivado);
  });

  // Verificar y aplicar el modo oscuro almacenado en localStorage
  var modoOscuroGuardado = localStorage.getItem('modoOscuro');
  if (modoOscuroGuardado === 'true') {
      body.classList.add('dark-mode');
  }
});
