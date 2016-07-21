// function GoogleCallback () {
// 	console.log (arguments);
// }



$(function() {

    // INITIAL SCRIPT
    // var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';
    // var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('test');
    // $.getJSON(URL, function(data) {
    //     if (parseInt(data.totalHits) > 0)
    //         $.each(data.hits, function(i, hit) { console.log(hit.pageURL); });
    //     else
    //         console.log('No hits');
    // });

    var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('test');
    $.getJSON(URL, function(data) {
        var ul = document.createElement("ul");
        if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit) {
                var li = document.createElement("li");
                var inner = '<img src="' + hit.previewURL + '">';
                li.innerHTML = inner;
                ul.appendChild(li);
                console.log('li', li);
            });
            $('body').html(ul);
        } else
            console.log('No hits');
    });


    // 	$.getJSON("http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=PHP&callback=?",
    // function(data){
    //     var ul = document.createElement("ul");
    //     $.each(data.ResultSet.Result, function(i, val){
    //            var li = document.createElement("li");
    //             var inner = '<a href="'+val.Url+'" title="'+val.Url+'" target="_blank">'+val.Title+"</a>";
    //             if (val.Summary != "" && val.Summary != "undefined") {
    //                 inner += " - "+val.Summary;
    //             }
    //             li.innerHTML = inner;                               
    //             ul.appendChild(li);
    //     });
    //     $('body').html(ul);
    // });




    // change key!!!
    // $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&context=?",
    // function(data){
    //     var ul = document.createElement("ul");
    //     $.each(data.results, function(i, val){
    //             var li = document.createElement("li");
    //             li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
    //             ul.appendChild(li);
    //     });
    //     $('body').html(ul);
    // });




});
