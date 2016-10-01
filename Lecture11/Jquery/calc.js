/**
 * Created by championswimmer on 01/10/16.
 */

$(function () {
    $('td').click(function () {
        console.log($('td').css('height'))
        $('td').css('height', '30px')
        //$('#calcbox').val($(this).html() == '=' ? eval(calcbox.val()) : calcbox.val() + op)
    })
})
