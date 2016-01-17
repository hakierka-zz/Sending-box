$(document).ready(function() {

    function moveSlides (){
        var wrapperWidth = $(".wrapper").outerWidth();
        var sliderParent = $(".slideshow");
        var slideChildren = sliderParent.children();
        var countOfSlide = slideChildren.length;
        var widthSlider = wrapperWidth;
        slideChildren.css("width", wrapperWidth);
        sliderParent.css("width", countOfSlide * wrapperWidth + 4);
        var counter = 1;
        setInterval(function(){
            sliderParent.animate({
                left: -widthSlider * counter
            });

            if(counter > countOfSlide-2){
                counter=0;
            }
            else{
                counter++;
            }
        },3000);
    }

    function validateForm() {
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

    moveSlides();
    validateForm();


});