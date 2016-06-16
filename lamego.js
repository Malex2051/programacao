$(function() {
     $("#menuh").hide();
    
   $(".botao").click(function(){
    $(".menu").slideToggle("slow");
      
});
    $(".thumbs a").click(function() {
		var path = $(this).attr("href");
		var alt = $(this).attr("title");
		
		$("#imagem").attr({src: path, alt: alt});
		return false;
	});	

    $("#scroll").click(function(event){
                       event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
                       
                       
                       })
});

