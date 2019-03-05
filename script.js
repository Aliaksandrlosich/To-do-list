$(function() {
	$("#add").on("click",function(){
		let input = $("#input").val();
		if(input!=="") {
			let element = $("<li></li>").text(input);
			$(element).append("<button class='del' >X</button>");
			$("#mylist").append(element);
			$("#input").val("");

			$(".del").on("click",function(){
				$(this).parent().remove();
			});
		}
	});
});