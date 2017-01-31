$(function () {
    //call selectric plugin for dropdown menu
    $('select').selectric();

    $('.dropdown-menu').on('change', function () {
        var $articleList = $('.article-list');
        $articleList.empty(); //empty article list

        //shrink header size
        $('.large-header').addClass('small-header');

        var $section = $('.dropdown-menu').val();
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + $section + '.json';
        url += '?' + $.param({
            'api-key': 'bc19b3c20a46467681e96804ed0ee1dd'
        });

        //show loader gif
        $('.loader').toggle();

        $.ajax({
            method: 'GET',
            url: url
        })
            .done(function (articleData) {
                var articleList = ''
                var filteredData = articleData.results.filter(function (result) {
                    return result.multimedia.length >= 5;
                }).slice(0, 12);

                $.each(filteredData, function (key, value) {
                    var imageUrl = value.multimedia[4].url;

                    articleList += '<li>';
                    articleList += '<a href="' + value.url + '">';
                    articleList += '<div class="article-grid" style="background-image:url(' + imageUrl + ')">'
                    articleList += '<p class="article-abstract">' + value.abstract + '</p>';
                    articleList += '</div></a></li>';
                });

                $('.article-list').append(articleList);

            })

        //error message on fail
        .fail(function () {
            $('.article-list').append('Sorry there was an error.');
        })

        //hide loader gif 
        .always(function () {
            $('.loader').toggle();
        })
    });
});