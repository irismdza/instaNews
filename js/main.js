$(function() {
    // this is my message
    // var message = 'Hello world';
    // console.log(message);
    $('.dropdown-menu').on('select', function() {
        $.ajax({
            method: 'GET',
            url: 'https://'
        })
        .done(function(result) {
            console.log('hello');
        })
        .fail(function(err) {
        })
    })
});