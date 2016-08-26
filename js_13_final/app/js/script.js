$(function () {

    $('.jcarousel').jcarousel();

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


    // $.ajax({
    //     url: "api.pixplorer.co.uk/image?amount=8",
    //     dataType: "jsonp",
    //     success: function (data) {
    //         var items = $('.grid-item');
    //         if(data.count > 0) {

    //         }
    //     }
    // });


    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'

    });
});

