// Start using JQuery
$(document).ready(function(){

    //$('#header-for-all-website-id').load(serverURL + 'data/header.html');
   // $('#footer-for-all-website-id').load(serverURL + 'data/footer.html');
   // alert ('Start submit');
    $('#btnSend').click(
        function ()
        {
            document.getElementById(`status`).innerHTML = "";
            var x = document.getElementById(`name`).value;
            if (x == "") {
               // document.getElementById(`status`).innerHTML = "Ім'я повинно містити данні ";
                document.getElementById(`name`).value  = "Ім'я повинно містити данні ";
                document.getElementById(`name`).focus();
                return false;
            }
             x = document.getElementById(`email`).value;
            if (x == "") {
                //document.getElementById(`status`).innerHTML = "Email повинен мати значення";
                document.getElementById(`email`).value = "Email повинен мати значення";
                document.getElementById(`email`).focus();
                return false;
            } else {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                if (!re.test(x)) {
                   // document.getElementById(`status`).innerHTML = "Email формат некоректний";
                    document.getElementById(`email`).value += "  E-mail формат некоректний";
                    document.getElementById(`email`).focus();
                    return false;
                }
            }

             x = document.getElementById(`numbers`).value;
            if (x == "") {
                //document.getElementById(`status`).innerHTML = "Номер телефону повинен мати значення";
                document.getElementById(`numbers`).focus();
                return false;
            }else {
               // var re = /^\d[\d\(\)\ -]{4,14}\d$/;
               //var re =/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                var re =/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
                if (!re.test(x)) {
                    //document.getElementById(`status`).innerHTML = "Формат телефона некоректний";
                    document.getElementById(`numbers`).value += "  Формат телефона +380(67)777-7-777 або 8(999)99-999-99";
                    document.getElementById(`numbers`).focus();
                    return false;
                }
            }
             x = document.getElementById(`message`).value;
            if (x == "") {
                //document.getElementById(`status`).innerHTML = "Повідомлення не може бути порожнім";
                document.getElementById(`message`).value  = "Повідомлення не може бути порожнім";
                document.getElementById(`message`).focus();
                return false;
            }


            document.getElementById(`status`).innerHTML = "Надсилання...";
              //block btn submit  submitBtn.attr('disabled','disabled');
              //console.log('Start Sending Message');

            formData =
                {
                    'name': $('input[name=name]').val(),
                    'email': $('input[name=email]').val(),
                    'numbers': $('input[name=numbers]').val(),
                    'message': $('textarea[name=message]').val()
                };

               //console.log(formData);
               //alert ('Before Ajax');
            $.ajax(
                {
                    url: "../mymail.php",
                    type: "POST",
                    data: formData,
                    beforeSend: function ()
                    {  $('#status').text('Надсилаю ...');
                    },
                    success: function (res)
                    {
                        alert ('In sucess Ajax');
                        if (res == 1)
                        {
                            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
                            alert ('Лист надісланий');
                        }
                        else
                        {
                            alert ('Помилка надсилання');
                            $('#status').text('Error Sending');
                        }
                    },
                    error: function ()
                    {   alert ('Error setting for gmail');
                        $('#status').text('Error function');
                    }
                });
             return false;
        }
        );
});