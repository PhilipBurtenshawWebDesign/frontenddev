$(function () {


    initButtons();
    initCB();

})

function initCB() {

    $('#checkAll').on("click", function () {

        $('input:checkbox').not(this).prop('checked', this.checked);

        let numberOfChecked = $('input:checkbox:checked').not(this).length;
        console.log(numberOfChecked);
    })

}

function initButtons() {

    $('#btnDemo').on("click", function () {

        $('#messagePanel').html("<p>Hello World");
        $('#messagePanel').append("<p>IBAT Calling");

    })


    $('#btnAge').on("click", function () {

        let age = $('#tbAge').val();


        $('#messagePanel').html(age);

    })

    $('#btnSum').on("click", function () {

        // + in front of string numeric converts to numeric
        let num1 = +$('#tbNum1').val();
        let num2 = +$('#tbNum2').val();


        $('#messagePanel').html(num1 + num2);

    })



}