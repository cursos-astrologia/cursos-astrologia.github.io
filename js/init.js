(function($){
  $(function(){
    const DISCOUNT_PAGE = "https://www.udemy.com/course/astrologia-desde-cero/?couponCode=PROMOAGOSTO"
    const GIFT_PAGE = "https://www.udemy.com/gift/astrologia-desde-cero/?couponCode=PROMOAGOSTO"
    const ORIGINAL_PRICE = 99.99
    const REAL_PRICE = 14.99





  /* modernizr 3.6.0 (Custom Build) | MIT *
  * https://modernizr.com/download/?-webp-setclasses */
  !function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);


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
					            <i class="material-icons ${!video.enabled?'grey-text':''}">play_circle_filled</i>
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