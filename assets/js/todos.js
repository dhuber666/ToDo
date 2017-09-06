// Check of specific todos by clicking
$("ul").on("click", "li", function() {

    $(this).toggleClass("completed");

})

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    if(event.which === 13)
        {
            // Grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            // create a new li and add to ul
            $("ul").append("<li><span>X</span> " + todoText + "</li>");
            
        }
})