 $(document).ready(function(){
// heroslider
	$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
		items:1,
		smartspeed:1000,
		dots:false,
		navText:['PREV','NEXT'],
    responsive:{
        0:{
           nav:false,
        },
        768:{
             nav:true,
        },
      
    }
})		   
 });

/*multidiv view*/
jQuery(function(){
	
	jQuery('.single').click(function(){
		jQuery('.target').hide();
		jQuery('#div'+$(this).attr('target')).show();
	});
});





