$(function() {

    // Carousel
    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + '<div class="pages page-' + page + '" style="width:8px; height:8px; background-color:#000;"></div>' + '</a>';
        }
    });
    
    $pages = $('.pages');
    console.log('$pages = ', $pages);
    console.log('$pages[0] = ', $pages[0]);

    $pages.eq(0).addClass('test');

    $items = $('.items');
     console.log('$items = ', $items);
     console.log('$items[0] = ', $items[0]);
     console.log('$ = ', $);

     $('.jcarousel > ul').css({"top": "0", "left": "0"});
   
});

