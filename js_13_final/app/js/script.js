$(function () {

    $('.jcarousel').jcarousel();

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';

    var URL = "http://api.pixplorer.co.uk/image?amount=7?size=l";
    $.getJSON(URL, function (data) {
        var $items = $('.grid-item');
        $.each(data.images, function (i, hit) {
            var inner = '<img src="' + hit.imageurl + '">';
            $items.eq(i).append(inner);
        });
    });








    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'

    });
});

