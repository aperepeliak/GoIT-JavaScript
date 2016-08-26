$(function () {

    $('.jcarousel').jcarousel();

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    // var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';

    var URL = "http://api.pixplorer.co.uk/image?amount=7?size=l";
    $.getJSON(URL, function (data) {
        var $items = $('.grid-item');
        $.each(data.images, function (i, hit) {
            var innerImage = '<img src="' + hit.imageurl + '">';
            var innerText = '<p>' + hit.word + '</p>';
            var layer = '<div class="layer"></div>';
            $items.eq(i).append(innerImage);
            $items.eq(i).append(layer);
            $items.eq(i).append(innerText);
        });
    });

    $('.search-input').keypress(function (e) {
        var key = e.which;
        if (key === 13) {
            $('.search-button').click();
        }
    });

    $('.search-button').on('click', function () {
        
        var searchInput = $('.search-input').val();

        $('.grid-item').empty();

        $.ajax({

            url: "http://api.pixplorer.co.uk/image?word="+ searchInput +"&amount=7?size=l",
            dataType: "json",

            success: function (data) {
                var $items = $('.grid-item');
                $.each(data.images, function (i, hit) {
                    var innerImage = '<img src="' + hit.imageurl + '">';
                    var innerText = '<p>' + hit.word + '</p>';
                    var layer = '<div class="layer"></div>';
                    $items.eq(i).append(innerImage);
                    $items.eq(i).append(layer);
                    $items.eq(i).append(innerText);
                });
            }
        });

    });








    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'

    });
});

