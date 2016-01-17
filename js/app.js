$(document).ready(function() {
    function validateForm() {
        //Form Validate
        var inputText = $("#inputText");

        inputText.on("input", function(event){

            if($.isNumeric($(this).prop("value")) || $(this).prop("value").length <= 5){
                $("#warning").removeClass("hidden-text").addClass("hidden-text-show");
            }
            else {
                $("#warning").removeClass("hidden-text-show").addClass("hidden-text");
            }

        });

    }

    validateForm();

});