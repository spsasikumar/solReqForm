$(document).ready(function() {
    $("#cb1").change(function () {
        if ($(this).prop("checked")) {
            // alert("true")
            $("#appinfo").addClass("disabled");
            $("#appinfo").removeClass("active");
            $("#appinfo").removeAttr("data-tab");
            $("#appinfodata").removeClass("active");
            $("#appinfodata").removeAttr("data-tab");
    
    
        }
        else {
            $("#appinfo").removeClass("disabled");
            $("#appinfo").attr("data-tab","third");
            $("#appinfodata").attr("data-tab","third");
    
        }
    });
    $("#vpnedit").change(function () {
        if ($(this).prop("checked")) {
            $("#vpnguar").addClass("disabled");
            $("#vpnend").addClass("disabled");
            $("#vpnquota").addClass("disabled");
            $("#repcard").addClass("disabled");
            $("#reptopic").addClass("disabled");
            $("#repack").addClass("disabled");

            $("#vpnguar").removeClass("active");
            $("#vpnend").removeClass("active");
            $("#vpnquota").removeClass("active");
            $("#repcard").removeClass("active");
            $("#reptopic").removeClass("active");
            $("#repack").removeClass("active");
        }
        else {
            $("#vpnguar").removeClass("disabled");
            $("#vpnguar").addClass("active"); 

            $("#vpnend").removeClass("disabled");
            $("#vpnend").addClass("active");
            
            $("#vpnquota").removeClass("disabled");
            $("#vpnquota").addClass("active");
            
            $("#repcard").removeClass("disabled");
            $("#repcard").addClass("active");  
            
            $("#reptopic").removeClass("disabled");
            $("#reptopic").addClass("active");
            
            $("#repack").removeClass("disabled");
            $("#repack").addClass("active");
        }
    });
    });

      
 $(document).ready(function(){
    $('.tabular.menu .item').tab();
});

function qenabledownload(fields) {
    $("#queuedownload").removeClass("disabled");
    $("#queuedownload").addClass("active"); 
  }

  function displayfailure()
  {
    $("#queuedownload").removeClass("enabled");
    $("#queuedownload").addClass("inactive");
  }

function valid_queue_tab()
{
    (function ($) {
        $.fn.serializeFormJSON = function () {
    
            var o = {};
            var a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
    })(jQuery);
    
    $('#queueform').submit(function (e) {
        e.preventDefault();
        var data = $(this).serializeFormJSON();
        console.log(data);
    
        /* Object
            email: "value"
            name: "value"
            password: "value"
         */
    });
}

   /* $(document).ready(function() {
  
    $('#queueform').validate( {
    qvpnname: {
      identifier  : 'qvpnname',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a VPN Name'
        }
      ]
    },
    queuename: {
      identifier  : 'queuename',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter queue name'
        }
      ]
    },    
  /*  onSuccess: function(event, fields){
        $('#info').html("on success");
        console.log("on success");
        console.log(fields);
        event.preventDefault();
    },
    onFailure: function(formErrors, fields){
        $('#info').html("on failure");
        console.log("on failure");
        console.log(fields);
    }    
}); 

$('#queueform input').bind('keyup blur click', function () { // fires on every keyup & blur
    if ($('#queueform').validate().checkForm()) {                   // checks form for validity
        $('#queuedownload').removeClass('button_disabled').prop('disabled', false); // enables button
    } else {
        $('#queuedownload').addClass('button_disabled').prop('disabled', true);   // disables button
    }
});



/*
  $('#queueform input').on('keyup blur', function () { // fires on every keyup & blur
    if ($('#queueform').valid()) {                      // checks form for validity
        $('#queuedownload').prop('disabled', false);        // enables button
    } else {
        $('#queuedownload').prop('disabled', 'disabled');   // disables button
    }
});

}); */



