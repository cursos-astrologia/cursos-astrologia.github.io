const layout =()=> {
	$('#nav-container').append(`<div class="navbar-fixed">
      <nav class="primary-background " role="navigation">
        <div class="nav-wrapper container ">
          <a id="logo-container" href="https://cursos-astrologia.github.io" class="brand-logo  white-text main-text">Astrología</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="https://cursos-astrologia.github.io/#contenido-curso"  class="white-text">Contenido</a></li>
            <li><a href="https://cursos-astrologia.github.io/#curso-requisitos" class="white-text">Preguntas frecuentes</a></li>
            <li><a href="https://cursos-astrologia.github.io/#curso-sobre-mi" class="white-text">Sobre mí</a></li>
          </ul>

          <ul id="nav-mobile" class="sidenav">
            <li><a href="https://cursos-astrologia.github.io/#contenido-curso"  class="primary-text">Contenido</a></li>
            <li><a href="https://cursos-astrologia.github.io/#curso-requisitos" class="primary-text">Preguntas frecuentes</a></li>
            <li><a href="https://cursos-astrologia.github.io/#curso-sobre-mi" class="primary-text">Sobre mí</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger  white-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </div>`)

    $('#footer-container').append(`<footer class="page-footer primary-background">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h3 class="white-text">Contacto</h3>
            <p class="grey-text text-lighten-4">Ponete en contacto conmigo si tenes alguna duda
                <br />
              <i class="material-icons">mail</i> luciarocca.b@gmail.com
          	</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        	Desarrollado por Leonardo R. con <a class="white-text " href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>`)

    $('head').append(`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-123383467-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-123383467-2');
</script>
<link rel="icon" href="favico.png" type="image/png" sizes="16x16">
	<meta http-equiv="Cache-Control" content="max-age=3600">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta charset="UTF-8">
  <meta name="author" content="Leonardo Rocca">
  <meta name="theme-color" content="#5e35b1">
  <link rel="manifest" href="manifest.json">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="PWA">
  <link rel="apple-touch-icon" href="images/logo192.png">

  <meta name="msapplication-TileImage" content="images/logo192.png">
  <meta name="msapplication-TileColor" content="#5e35b1">

  <meta property="og:type" content="article"> 
  <meta property="og:image" content="images/logo192.png"> 
  <meta property="og:title" content="astrología conceptos basicos"> 
  <meta property="og:description" content="astrología desde cero. Curso basico"> 
  <meta property="og:site_name" content="Astrología"> 
  <meta property="og:url" content="https://cursos-astrologia.github.io/"> 
  <meta name="twitter:card" content="astrología"> 
  <meta name="twitter:image" content="images/logo192.png"> 
  <meta name="twitter:title" content="astrología"> 
  <meta name="twitter:description" content="astrología"> 
  `)

}









   $('.pushpin.curso-card').pushpin({offset:50,top:1200/*,bottom:2500*/});
    $('.carousel.carousel-slider').carousel({fullWidth: true,indicators: true});

 var loadDeferredStyles = function(id) {
      var addStylesNode = document.getElementById(id);
      var replacement = document.createElement("div");
      replacement.innerHTML = addStylesNode.textContent;
      document.body.appendChild(replacement);
      addStylesNode.parentElement.removeChild(addStylesNode);
    };
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    let src = 'all-deferred-styles';
    if (raf) raf(function() { window.setTimeout(loadDeferredStyles(src), 0); });
     else window.addEventListener('load', loadDeferredStyles(src));

     main()