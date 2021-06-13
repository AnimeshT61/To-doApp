$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+$(this).val()+"</li>");
		$(this).val("");
	}
});
$(".fa-pen-nib").click(function(){
	$("input[type=text]").fadeToggle();
});