function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    const pn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.match(pn)){
        return true;
    }else{
        return false;
    }
}

$('#contactForm').submit(function(e) {
    var name = $("input#inputName").val();
    var email = $("input#inputEmail").val();
    var phone = $("input#inputPhone").val();
    var message = $("textarea#inputMessage").val();

    if(name === ""){
        alertify.error('Please enter a valid name.');
    }else if(!validateEmail(email)){
        alertify.error('Please enter a valid email.');
    }else if(message === ""){
        alertify.error('Your message is blank.');
    }else if(phone != "" && validatePhone(phone) == false) {
        alertify.error('Please enter a valid phone number.');
    }else{
        $.ajax({
            // My email
            url: "https://formspree.io/myynnloq",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        // This resets all forms on the page.
        $(this).get(0).reset();
        alertify.success('Message Sent');
    }

    e.preventDefault();
})