$(function() {

    var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';

    $('.search-input').keypress(function(e) {
        var key = e.which;
        if (key === 13) {
            $('.test').click();
        }
    });

    $('.test').on('click', function() {

        var searchInput = $('.search-input').val();
        $.ajax({

            url: "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchInput) + "&per_page=" + 42,
            dataType: "jsonp",

            success: function(data) {
                var ul = document.createElement("ul");
                if (parseInt(data.totalHits) > 0) {
                    $.each(data.hits, function(i, hit) {
                        var li = document.createElement("li");
                        var inner = '<a href="' + hit.pageURL + '" target="_blank">  <img src="' + hit.previewURL + '"></a>';
                        li.innerHTML = inner;
                        ul.appendChild(li);
                    });
                    $('.search-results').html(ul);
                } else {
                    var message = $('<p>Sorry. No matches found :(</p>');
                    $('.search-results').html(message);
                }
            }
        });

    });

});
