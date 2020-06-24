(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();


    [{title:"video de astro",duration:"1:05",items:[
    	{description:"primera descripcion",enabled:true,duration:"10:05"},
    	{description:"otra descripcion",enabled:false,duration:"8:00"},
    	{description:"3ra descripcion",duration:"8:00"},
    	]}].forEach((category,index)=>{
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
					              <a href="#udemy"> Vista previa</a>
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
