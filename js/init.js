(function($){

  window.onload=()=>{
    M.AutoInit();
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
      accordion: false
    });

    $('.pushpin.curso-card').pushpin({offset:50,top:1200/*,bottom:2500*/});
    $('.carousel.carousel-slider').carousel({fullWidth: true,indicators: true});
    setInterval(()=>$('.carousel.carousel-slider.move').carousel("next"),20000)
 

    const link = 'images/background1-small.';
    $('.no-webp .bgimg-1').attr("src", link+"jpg")
    $('.webp .bgimg-1').attr("src", link+"webp")

  }
    

  $(function(){
    const DISCOUNT_PAGE = "https://www.udemy.com/course/astrologia-desde-cero/?couponCode=PROMOAGOSTO"
    const GIFT_PAGE = "https://www.udemy.com/gift/astrologia-desde-cero/?couponCode=PROMOAGOSTO"
    const ORIGINAL_PRICE = 99.99
    const REAL_PRICE = 14.99


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
			<div class="collapsible-header row-striped"><i class="material-icons">play_arrow</i> ${category.title}</div>
        		<div class="collapsible-body" id="video-section-${index}">

		        </div>
		        </div>
		      </li>`);

	         category.items.forEach((video,itemIndex)=> {$('#video-section-'+index).append(`<div class="flex flex-space-between collection-item">
					            <i class="material-icons ${!video.enabled?'grey-text text-darken-1':'primary-text'}">play_circle_filled</i>
					            <div class="video-description">
					               ${video.description}
					            </div>              
					            <div style="${!video.enabled?'display:none':''}">
					              <a href="#promo-video" class="primary-text"> Vista previa</a>
					            </div>    
					            <div >${video.duration} </div>
          </div`);
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



    const addLink = (selector,link)=> $(selector).attr("href", link).attr("rel","noreferrer").attr("target","_blank");
    addLink('.go-to-course',DISCOUNT_PAGE);
    addLink('.gift-to-course',GIFT_PAGE);

    const priceToString =(pr)=> (pr+'').replace('.',',');
    const discount =priceToString(Math.floor(100-(REAL_PRICE*100)/ORIGINAL_PRICE));
    $('[data-purpose="discount-percentage"]').empty().append("<span>&nbsp; "+discount+" % de descuento</span>");
    $('[data-purpose="course-old-price-text"]').empty().append("<span><s><span>"+priceToString(ORIGINAL_PRICE)+"&nbsp;US$</span></s></span>");
    $('[data-purpose="course-price-text"]').empty().append("<span><span>"+priceToString(REAL_PRICE)+"&nbsp;US$</span></span>");

      console.log("hola")


   
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

