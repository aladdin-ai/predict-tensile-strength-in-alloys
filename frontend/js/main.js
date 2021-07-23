
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var Carbon = $('.validate-input input[name="C"]');
    var Silicon = $('.validate-input input[name="Si"]');
    var Manganese = $('.validate-input input[name="Mn"]');
    var Phosphorus = $('.validate-input input[name="P"]');
    var Sulfur = $('.validate-input input[name="S"]');
    var Nickel = $('.validate-input input[name="Ni"]');
    var Chromium = $('.validate-input input[name="Cr"]');
    var Molybdenum = $('.validate-input input[name="Mo"]');
    var Cobalt = $('.validate-input input[name="Cu"]');
    var Vanadium = $('.validate-input input[name="V"]');
    var Aluminum = $('.validate-input input[name="Al"]');
    var Nitrogen = $('.validate-input input[name="N"]');
    var Niobium_Tantalum = $('.validate-input input[name="Nb+Ta"]');
    var Temperature = $('.validate-input input[name="Temperature(°C)"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(Carbon).val().trim() == ''){
            showValidate(Carbon);
            check=false;
        }

        if($(Silicon).val().trim() == ''){
            showValidate(Silicon);
            check=false;
        }


        if($(Manganese).val().trim() == ''){
            showValidate(Manganese);
            check=false;
        }


        if($(Phosphorus).val().trim() == ''){
            showValidate(Phosphorus);
            check=false;
        }


        if($(Sulfur).val().trim() == ''){
            showValidate(Sulfur);
            check=false;
        }


        if($(Nickel).val().trim() == ''){
            showValidate(Nickel);
            check=false;
        }


        if($(Chromium).val().trim() == ''){
            showValidate(Chromium);
            check=false;
        }


        if($(Molybdenum).val().trim() == ''){
            showValidate(Molybdenum);
            check=false;
        }


        if($(Cobalt).val().trim() == ''){
            showValidate(Cobalt);
            check=false;
        }


        if($(Vanadium).val().trim() == ''){
            showValidate(Vanadium);
            check=false;
        }


        if($(Aluminum).val().trim() == ''){
            showValidate(Aluminum);
            check=false;
        }


        if($(Nitrogen).val().trim() == ''){
            showValidate(Nitrogen);
            check=false;
        }

        if($(Niobium_Tantalum).val().trim() == ''){
            showValidate(Niobium_Tantalum);
            check=false;
        }

        if($(Temperature).val().trim() == ''){
            showValidate(Temperature);
            check=false;
        }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);