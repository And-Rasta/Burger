// JS tied to Index
$(function() {

    $('.devour-button').on('click', devourClick);

    function devourClick() {
        let id = $(this).attr('data-id');
        let url = '/api/update/' + id;
        $.ajax({
            url: url,
            method: "POST",
            success: function() {
                location.reload();
            }
        })
    }
});