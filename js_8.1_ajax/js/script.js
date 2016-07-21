// function GoogleCallback () {
// 	console.log (arguments);
// }

// function GoogleCallback (func, data) {
//     window[func](data);
//     console.log('data', data);
// }

$(function() {

    var API_KEY = '2957253-77eda47a6d8c06c5cf8269032';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('test');
    $.getJSON(URL, function(data) {
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function(i, hit) { console.log(hit.pageURL); });
        else
            console.log('No hits');
    });
    // 	(function() {
    //   var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
    //   var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
    //   gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
    //       '//www.google.com/cse/cse.js?cx=' + cx;
    //   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
    // })();

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



    // 	$.ajax({
    //             // AJAX-specified URL
    //            url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + 'test' + '&callback=GoogleCallback&context=?',
    //            dataType : "jsonp"
    //            // Handle the success event
    //            // success: function (data) {
    //            //     // equal to previuos example
    //            //     // ...
    //            // }
    // });

    //         $.ajax({
    //         url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q='+'test'+'&callback=GoogleCallback&context=?',
    //         dataType: 'jsonp'
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

    // url= "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+"test"+"&callback=?";
    // $.getJSON(url, function (json){
    //     var results = json.responseData.results;
    //     for (var i=0;i<results.length;++i){
    //         var r = results[i];
    //         //...
    //     }
    // });


    // ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg


});
