(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
  
    [
    	{title:"Introducción ¿qué es la astrología?",duration:"1:05",items:[
    	{description:"Historia- de donde viene",enabled:true,duration:"10:05"},
    	{description:"Componentes de una carta",enabled:false,duration:"8:00"},
    	]},
    	{title:"Planetas",duration:"1:05",items:[
    	{description:"Planetas introducción",duration:"3:05"},
    	{description:"Signos, elementos y modos",duration:"3:45"},
    	{description:"Casas y casas angulares",duration:"1:05"},
    	]},
    	{title:"Ascendente",duration:"6:05",items:[
    	{description:"Ascendente introducción",duration:"10:05"},
    	]},

    	].forEach((category,index)=>{
    	 $('#contenido-collapsable').append(` <li class="collection">
			<div class="collapsible-header row-striped"><i class="material-icons">play_arrow</i> ${category.title}</div>
        		<div class="collapsible-body" id="video-section-${index}">

		        </div>
		        </div>
		      </li>`);

	category.items.forEach((video,itemIndex)=> {$('#video-section-'+index).append(`<div class="flex flex-space-between collection-item">
					            <i class="material-icons ${!video.enabled?'grey-text text-lighten-1':''}">play_circle_filled</i>
					            <div class="video-description">
					               ${video.description}
					            </div>              
					            <div style="${!video.enabled?'display:none':''}">
					              <a href="#curso-progreso"> Vista previa</a>
					            </div>    
					            <div >${video.duration} </div>
          </div`);
		if (itemIndex<category.items.length-1)
			$('#video-section-'+index).append(` <div class="divider"> </div`);
		}
	 )

    })
   
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