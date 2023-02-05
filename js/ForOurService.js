$(document).ready(function() {
    $('.menu_service li, .content_service > div').removeClass('active');
    $('.menu_service li:first-of-type, .content_service > div:first-of-type').addClass('active');

    $('.menu_service li').on('click', function() {
        $('.menu_service li, .content_service > div').removeClass('active');
        $(this).addClass('active');

        let id = $(this).attr('data-id');

        $(`#${id}`).addClass('active');
    });
});