$(document).ready(function() {
    $('.h4_menu_title li, .content_description > div').removeClass('active');
    $('.h4_menu_title li:first-of-type, .content_description > div:first-of-type').addClass('active');

    $('.h4_menu_title li').on('click', function() {
        $('.h4_menu_title li, .content_description > div').removeClass('active');
        $(this).addClass('active');

        let id = $(this).attr('data-id');

        $(`#${id}`).addClass('active');
    });
});
$(document).ready(function() {
    $('.list_title option, .content_description > div').removeClass('active');
    $('.list_title option:first-of-type, .content_description > div:first-of-type').addClass('active');

    $('.list_title').change(function() {
        $('.list_title option, .content_description > div').removeClass('active');
        $(this).addClass('active');
        
        let id = $(this).find(":selected").attr('data-id');

        $(`#${id}`).addClass('active');
    })
});