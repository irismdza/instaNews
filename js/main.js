$(function() {
    $('.dropdown-menu').on('change', function() {
        var $section = $('.dropdown-menu').val();
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + $section + '.json';
        url += '?' + $.param({ 'api-key': 'bc19b3c20a46467681e96804ed0ee1dd'
        });
        $.ajax({
            method: 'GET',
            url: url
        })
        .done(function(articleData) {
            var articleList = ''
            var filteredData = articleData.results.filter(function(result) {
                return result.multimedia.length >= 5; 
            }).slice(0, 12);
            $.each(filteredData, function(key, value) {
                articleList += '<li>';
                articleList += '<div><a href="' + value.url + '">';
                articleList += '<img src="' + value.multimedia[4].url + '" />';
                articleList += '<p>' + value.abstract + '</p>';
                articleList += '</a></div></li>';
            });
        $('.article-list').append(articleList);
        });
    });
});