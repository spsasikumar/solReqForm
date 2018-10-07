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

function qenabledownload() {
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
    $('#queueform').form({
 //fields : validationRules,
  inline : true,
on     : 'blur',
   fields: {
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
    }
    },

  onSuccess: function(event, fields){
    $("#queuedownload").removeClass("disabled");
    $("#queuedownload").addClass("active"); 
    event.preventDefault();
},
onFailure: function(formErrors, fields){
    $("#queuedownload").addClass("disabled");
    $("#queuedownload").removeClass("active");
}   

});  

}


