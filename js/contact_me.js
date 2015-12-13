    $(function() {
            // Setup form validation on the #register-form element
            $("#myform").validate({
    
            //Specify the validation rules
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                subject: "required",
                message: "required",
            },
        
            //Specify the validation error messages
            messages: {
                name: "Please enter your first name",
                email: "Please enter a valid email address",
                subject: "Please enter a subject",
                message: "Please enter a message",
            },
        
        submitHandler: function(form) {
            form.submit();
        }
     });

});

$(function() {
            // Setup form validation on the #register-form element
            $(".input-group").validate({
    
            //Specify the validation rules
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
        
            //Specify the validation error messages
            messages: {
                email: "Please enter a valid email address",
            },
        
        submitHandler: function(form) {
            form.submit();
        }
     });

});


$(function() {

    $('#sub').on('click',function(e) {
        var email = $('#subscript').val();
        var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        var valid = emailRegex.test(email);
        if(!valid){
            alert("Invalid email address entered");
        }
        else{
            
            $.ajax({
                data: {subemail: email},
                type: "post",
                url: "mail/subscriptions.php",
                success: function(result){
                result = JSON.parse(result);
                if(result === true){
                     $(".thanks").show(0, function (){
                        $(this).fadeOut(3500);
                     });
                } else {
                    alert("An error occured please try again later or email info@zakhanya.co.za");                    
                }
                },
                error: function(result){
                    alert("An error occured please try again later or email info@zakhanya.co.za");
        }
    }); 
   }   

  });

});


            
           
 
