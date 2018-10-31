var rootGalery = document.getElementById('root-galery-id');
const serverURL = 'https://fedorvlad.github.io/Alttex/';
var galeryHtml = '';

// Start using JQuery
$(document).ready(function(){
//console.log(serverURL +'data/header.html' );
    $('#header-for-all-website-id').load(serverURL + 'data/header.html');
    $('#footer-for-all-website-id').load(serverURL + 'data/footer.html');

    $.get(serverURL + 'data/galery.json',
     function(data, status){
        if ( ! $.isEmptyObject(data) && Array.isArray(data) ) {
            data.forEach(function(item) {
                galeryHtml = galeryHtml + 
                '<div class="col-12 col-sm-4 col-lg-2">' +
                '<div class="card animated fadeIn m-3">' +
                '<img class="card-img-top" src="' + item['img'] + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h3 class="card-title text-capitalize text-center"><a>' + item['title'] + '</a></h3>' +
                '<p class="card-text">' + item['text'] + '</p>' +
                '</div>' +
              '</div>' +
              '</div>';
            });

            rootGalery.innerHTML = galeryHtml;
        }
    });

    const cards = $('#root-galery-id .card');

    var maxHeight = 0;
    cards.each(function(){
        if ( maxHeight < $(this).height() ) {
            maxHeight = $(this).height();
        }
    });
    cards.height(maxHeight);
});