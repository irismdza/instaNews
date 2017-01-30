$(function() {

    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
  'api-key': "bc19b3c20a46467681e96804ed0ee1dd"
        });
    $('.dropdown-menu').on('change', function() {
        $.ajax({
            method: 'GET',
            url: url
        })
        .done(function(arrayData) {
            var onlyResults = arrayData.results.filter(function(result) {
                return result.multimedia.length >= 5; 
            }).slice( 0, 12 );
    console.log(onlyResults);
        });
    });
});