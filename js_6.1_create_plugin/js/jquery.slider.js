(function($) {

    $.fn.slider = function() {

        var left = $('.arrows__left');
        var right = $('.arrows__right');
        var list = $('.slider__list');

        var pixelsOffset = 350;
        var cuurrentLeftValue = 0;

        var elementsCount = list.find('li').length;
        var minimumOffset = -((elementsCount - 2) * pixelsOffset);
        var maximumOffset = 0;

        left.on('click', function() {
            if (cuurrentLeftValue != maximumOffset) {
                cuurrentLeftValue += pixelsOffset;
                list.animate({
                    left: cuurrentLeftValue + 'px'
                }, 500);
            }
        });

        right.on('click', function() {
            if (cuurrentLeftValue != minimumOffset) {
                cuurrentLeftValue -= pixelsOffset;
                list.animate({
                    left: cuurrentLeftValue + 'px'
                }, 500);
            }
        });


        return this;
    };

})(jQuery);
