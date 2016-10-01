/**
 * Created by championswimmer on 01/10/16.
 */

$(function () {

    $('#addbtn').click(function () {
        add()
    })

    // document.getElementById('addbtn').onclick = function () {
    //     add();
    // }

})

function add () {
    var a = $('#op1').val();
    var b = $('#op2').val();

    var ans = $('#ans')

    ans.html(parseInt(a) + parseInt(b));

    console.log(ans.html());

    $('.classname').click(function () {
        var a = ans.val();
        a = a + 'appended stuff here'
        ans.val(a);
    })

}
