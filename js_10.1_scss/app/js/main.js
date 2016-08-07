$(function() {

    // Carousel
    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a class="pgs" href="#' + page + '">' + '<span class="pages page-' + page + '" style="display:block; width:8px; height:8px; background-color:#000;"></span>' + '</a>';
        }
    });
    $pgs = $('.pgs');
    $pages = $('.pages');
    // console.log('$pages = ', $pages);
    // console.log('$pages[0] = ', $pages[0]);
    // console.log('$pages.length = ', $pages.length);
  
    

    $pages.eq(0).addClass('active');

    $pgs.eq(0).on('click', function() {
        $pages.removeClass('active');
        $pages.eq(0).addClass('active');
    });

    $pgs.eq(1).on('click', function() {
        $pages.removeClass('active');
        $pages.eq(1).addClass('active');
    });

    $pgs.eq(2).on('click', function() {
        $pages.removeClass('active');
        $pages.eq(2).addClass('active');
    });

   

    // for (var i = 0; i < $pgs.length; i++) {
    //     $pgs.eq(i).on('click', MakeItActive);
    // }

    //  function MakeItActive () {
    //     console.log('test = ', i);
    //     $pages.eq(i).addClass('active');
    // }

   



    // $items = $('.items');
    //  console.log('$items = ', $items);
    //  console.log('$items[0] = ', $items[0]);
    //  console.log('$ = ', $);

     $('.jcarousel > ul').css({"top": "0", "left": "0"});
   
});

