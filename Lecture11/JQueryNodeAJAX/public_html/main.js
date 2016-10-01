/**
 * Created by championswimmer on 01/10/16.
 */

$(function () {
    $('#add').click(function () {
        var a = $('#a').val();
        var b = $('#b').val();

        $.get('/add?a='+a+'&b='+b, function(data) {
            $('#ans').text(data)
        })

        $.post('/add', {
            a: 10,
            b: 20
        }, function (data) {

        })
    })
})