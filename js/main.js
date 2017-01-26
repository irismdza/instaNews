$(function() {
    // this is my message
    // var message = 'Hello world';
    // console.log(message);
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
  'api-key': "bc19b3c20a46467681e96804ed0ee1dd"
        });
    $('.dropdown-menu').on('change', function() {
        $.ajax({
            method: 'GET',
            url: url
        })
        .done(function(data) {
            console.log(data);

/*





    append.(article)



*/
        })
        .fail(function(err) {
            console.log('error');
        })
    })
});