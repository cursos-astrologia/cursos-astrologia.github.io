(function($){

  window.onload=()=>{
    M.AutoInit();
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
      accordion: false
    });

    $('.pushpin.curso-card').pushpin({offset:50,top:1200/*,bottom:2500*/});
    $('.carousel.carousel-slider').carousel({fullWidth: true,indicators: true});
    const nextComment = () => $('.carousel.carousel-slider.move').carousel("next"); 
    setInterval(nextComment,30000)

    const link = 'images/background1-small.';
    $('.no-webp .bgimg-1').attr("src", link+"jpg")
    $('.webp .bgimg-1').attr("src", link+"webp")

  }
    

  $(function(){
    const ORIGINAL_PRICE = 99.99
    const REAL_PRICE = 12.99


    $('.sidenav').sidenav();
    $('.parallax').parallax();

  
  //CARGAR CONTENIDO DE CLASES
    [
    	{title:"Introducción",duration:"1:05",items:[
    	{description:"Introducción",enabled:true,duration:"1:13"},
      {description:'Carta Natal', duration:'02:33'},
    	]},
    	{title:"Planetas",duration:"1:05",items:[
        {description:'Planetas personales', duration:'05:03'},
        {description:'Planetas sociales', duration:'02:20'},
        {description:'Planetas transpersonales', duration:'02:59'},
    	]},      

      {title:"Signos",duration:"30:05",items:[
        {description:'Introduccion', duration:'01:52'},
        {description:'Elementos y modos', duration:'04:44'},
        {description:'Signos de Aries a Cancer', duration:'07:49'},
        {description:'Signos de Leo a Escorpio', duration:'07:06'},
        {description:'Signos de Sagitario a Piscis', duration:'07:54'},
      ]},
      {title:"Casas",duration:"30:05",items:[
        {description:'Introduccion', duration:'02:42'},
        {description:'Casas del hemisferio inferior', duration:'03:03'},
        {description:'Casas del hemisferio superior', duration:'03:56'},
        {description:'Introducción Ascendente', duration:'02:20'},
        {description:'Final', duration:'00:41'},
      ]},

    	].forEach((category,index)=>{
    	 $('#contenido-collapsable').append(` <li class="collection ${index==0?'active':''}">
			<div class="collapsible-header row-striped"><i class="material-icons">keyboard_arrow_down</i> ${category.title}</div>
        		<div class="collapsible-body" id="video-section-${index}">

		        </div>
		        </div>
		      </li>`);

	         category.items.forEach((video,itemIndex)=> {$('#video-section-'+index).append(`
            <div class="flex flex-space-between collection-item">
					             <a href="#promo-video"><i class="material-icons ${!video.enabled?'grey-text text-darken-1':'primary-text'}">play_circle_filled</i></a>
					            <div class="video-description">
					               ${video.description}
					            </div>              
					            <div style="${!video.enabled?'display:none':''}">
					              <a href="#promo-video" class="primary-text"> Vista previa</a>
					            </div>    
					            <div >${video.duration} </div>
          </div>
`);
		if (itemIndex<category.items.length-1)
			$('#video-section-'+index).append(` <div class="divider"> </div`);
    		}
    	 )
  })


	// CONTADOR DE CUANTO FALTA
  if (false) {
	// Set the date we're counting down to
	var countDownDate = new Date("Jul 30, 2020 15:37:25").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {
	  var now = new Date().getTime();
	  // Find the distance between now an the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in an element with id="demo"
	  document.getElementById("comming-soon-time").innerHTML = days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ";

	  // If the count down is finished, write some text
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("comming-soon-time").innerHTML = "Un poco sobre mí";
	  }
	}, 1000);

  }
  // SHOW MORE DESCRIPTION


    const showHide =(id,triggerElem,shouldAdd)=>{
      const trigger = shouldAdd? "more":"less";
      const target = !shouldAdd? "more":"less";

      $(".show-"+trigger+"-"+id+"-container").removeClass("show-"+trigger+"--container").removeClass("show-"+target+"--container");
      $("."+trigger+"-text").removeClass(trigger+"-text").addClass(target+"-text");
      triggerElem.removeClass("less-text").addClass("more-text");    
      $("#show-"+target+"-btn-"+id).addClass("less-text").removeClass("more-text");    
    }

    const moreBtn = $('#show-more-btn-');
    moreBtn.click(()=>showHide("",moreBtn,true));    
    
    const lessBtn = $('#show-less-btn-');
    lessBtn.click(()=>showHide("",lessBtn,false));

    main()

    const priceToString =(pr)=> (pr+'').replace('.',',');
    const discount =priceToString(Math.floor(100-(REAL_PRICE*100)/ORIGINAL_PRICE));
    $('[data-purpose="discount-percentage"]').empty().append("<span>&nbsp; "+discount+" % de descuento</span>");
    $('[data-purpose="course-old-price-text"]').empty().append("<span><s><span>"+priceToString(ORIGINAL_PRICE)+"&nbsp;US$</span></s></span>");
    $('[data-purpose="course-price-text"]').empty().append("<span><span>"+priceToString(REAL_PRICE)+"&nbsp;US$</span></span>");

   
  const blogs = [
  {title:"¿Qué es el signo ascendente?", img:"images/blogs/fondo-blog-1.jpg",link:"que-es-signo-ascendente.html",desc:"Todo lo que necesitas saber ¿Qué es?¿Qué significa? ¿Alguien dijo signo ascendente? Revelamos todas las incógnitas."},
  {title:"¿Cómo leer una carta astral?", img:"images/blogs/fondo-blog-2.jpg",link:"como-leer-carta-astral.html",desc:"La astrología es un tema hermoso, pero como todo estudio tiene sus dificultades y sus propias reglas. Acá te cuento cómo encarar la lectura de una carta astral."},
  {title:"Aprender astrología fácil", img:"images/blogs/fondo-blog-3.jpg",link:"aprender-astrologia-facil.html",desc:"Acá encontraras el contenido del curso para poder aprender astrología de una manera muy fácil"},
 ]

 blogs.forEach(blog=>  $("#blogs-container").append(` <div class="card max-width-400 card-action">
        <a href="${blog.link}">
        <div class="card-image">
          <img src="${blog.img}">
          <span class="card-title"><strong>${blog.title}</strong></span>
        </div>
        <div class="card-content primary-text">
          <p>${blog.desc}</p>
        </div>
        </a>
      </div>`));


 const comments = [
{name:"Laura R",avatar:"LR",stars:5,color:"purple lighten-2", description:"Me gustó mucho el curso, los conceptos están muy bien explicados, con mucha claridad. Me sirvió para obtener y entender mi carta natal y usarlo como fuente de consulta al analizar la carta." },
{name:"Edu P.",avatar:"EP",stars:4,color:"light-blue darken-4", description:"Me parece muy interesante. Buena exposición, clara y concisa." },
{name:"Leo ",avatar:"LR",stars:5,color:"blue darken-1 ", description:"Muy bueno 👏 Los conceptos están explicados de forma clara y concisa. Me gustó lo de las luminarias. Lo recomiendo!" },
{name:"Marcelo",avatar:"MS",stars:5,color:"indigo darken-1 ", description:"Para quienes queremos acercarnos a estos temas arrancando desde 0, nos encontramos con explicaciones claras, sencillas y didácticas, que acrecientan el interés por los mismos, para continuar profundizando." },
{name:"Yammel Maron.",avatar:"YM",stars:4,color:"light-blue darken-4", description:"Me esta gustando mucho como explica y como se esta llevando el curso, muy buena información introductoria para saber que es la Astrologia y como se compone, espero poder tomar mas para completar mi estudio. Gracias" },
 ];

 const starClass = (stars,index) => index<stars?"orange-text text-darken-4":"darken-4";
 comments.forEach(com=>  $("#comments-container").append(`<a class="carousel-item flex flex-align-center mini-container" href="#one!">
          <div class="container center card pad-rem-1 flex flex-align-center flex-start2 flex-column flex-space-between flex-no-wrap">
            <div class="avatar-container">
              <div class="avatar ${com.color} flex-grow-1 hide-on-med-and-down2">${com.avatar}</div>
            </div>
            <div class="black-text">
              <h5>${com.name}</h5>
              <span>
              <i class="material-icons ${starClass(com.stars,0)}  ">star</i>
              <i class="material-icons ${starClass(com.stars,1)} ">star</i>
              <i class="material-icons ${starClass(com.stars,2)} ">star</i>
              <i class="material-icons ${starClass(com.stars,3)} ">star</i>
              <i class="material-icons ${starClass(com.stars,4)} ">star</i>
              </span>
              <p class="flow-text">
                ${com.description}
              </p>

            </div>
          </div>
        </a>`));


    const nextComment = () => $('.carousel.carousel-slider.move').carousel("next"); 
    const prevComment = () => $('.carousel.carousel-slider.move').carousel("prev"); 
    $("#nextCom").click(nextComment)
    $("#prevCom").click(prevComment)


  }); // end of document ready
})(jQuery); // end of jQuery name space










/*
 <li class="active">
        <div class="collapsible-header row-striped"><i class="material-icons">play_arrow</i>Video Introductorio al curso dignidades esenciales para astrologos </div>
        <div class="collapsible-body">
          <div class="flex flex-space-between">
            <i class="material-icons ">play_circle_filled</i>
            <div class="video-description">
              En este video les cuento de que se trata el curso de dignidades esenciales, a quien esta dirigido y que habrán aprendido al finalizar el curso.
            </div>              
            <div >
              <a href="#udemy"> Vista previa</a>
            </div>    
            <div >
              1:05
            </div>
          </div>
          <div class="divider"></div>            
          <div class="row">
            <div class="col s12 m8">
              Introducción a dignidades esenciales, elementos y cualidades de los signos.
            </div>              
            <div class="col s12 m2">
              <a href="#udemy"> Vista previa</a>
            </div>    
            <div class="col s12 m2">
              2:05
            </div>
          </div>

        </div>
      </li>*/


/*
         <a class="carousel-item flex flex-align-center mini-container" href="#one!">
          <div class="container center card pad-rem-1 flex flex-align-center flex-start flex-space-between flex-no-wrap">
            <div class="avatar-container">
              <div class="avatar purple lighten-2 flex-grow-1 hide-on-med-and-down">LR</div>
            </div>
            <div class="black-text">
              <h5>Laura R.</h5>
              <span>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              </span>
              <p class="flow-text">
                Me gustó mucho el curso, los conceptos están muy bien explicados, con mucha claridad. Me sirvió para obtener y entender mi carta natal y usarlo como fuente de consulta al analizar la carta.
              </p>

            </div>
          </div>
        </a>        

        <a class="carousel-item flex flex-align-center mini-container" href="#two!">
          <div class="container center card pad-rem-1 flex flex-align-center  flex-start flex-space-between flex-no-wrap">
            <div class="avatar-container">
            <div class="avatar light-blue darken-4 circle hide-on-med-and-down">EP</div>
          </div>
            <div class="black-text">
              <h5>Edu P.</h5>
              <span>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons  darken-4">star</i>
              </span>
              <p class="flow-text">
                Me parece muy interesante
              </p>

            </div>
          </div>
        </a>        


        <a class="carousel-item flex flex-align-center mini-container" href="#three!">
          <div class="container center card pad-rem-1 flex flex-align-center  flex-start flex-space-between flex-no-wrap">
            <div class="avatar-container">
            <div class="avatar blue darken-1 circle hide-on-med-and-down">LR</div>
          </div>
            <div class="black-text">
              <h5>Leo R.</h5>
              <span>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              </span>
              <p class="flow-text">
                Muy bueno 👏
                Los conceptos están explicados de forma clara y concisa. Me gustó lo de las luminarias.
                Lo recomiendo!
              </p>

            </div>
          </div>
        </a>

        <a class="carousel-item flex flex-align-center mini-container" href="#three!">
          <div class="container center card pad-rem-1 flex flex-align-center  flex-start flex-space-between flex-no-wrap">
            <div class="avatar-container">
            <div class="avatar indigo darken-1 circle hide-on-med-and-down">MS</div>
          </div>
            <div class="black-text">
              <h5>Marcelo</h5>
              <span>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              <i class="material-icons orange-text text-darken-4">star</i>
              </span>
              <p class="flow-text">
                Muy bueno el curso, sigue así.
              </p>

            </div>
          </div>
        </a>
*/