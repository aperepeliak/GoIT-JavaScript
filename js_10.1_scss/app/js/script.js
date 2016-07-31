$(function() {

    // Carousel
    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + '<div class="pages page-' + page + '" style="width:8px; height:8px; background-color:#000;"></div>' + '</a>';
        }
    });
    
    $pages = $('.pages');
    console.log($pages);

    $items = $('.items');
     console.log($items);

    // $pages[0].addClass('test'); - what's wrong with this code??
    // $items[0].addClass('test');       
});

