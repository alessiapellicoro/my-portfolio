/**
 * Email.js 
 * 
 */
// init
(function(){
    emailjs.init(ApiKeyMailJS);
})();
// email js send mail
function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        object: document.getElementById("object").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_kxs2r8l" , "template_6i7uo28", params).then(function (res){
        alert("Success!" + res.status);
    })
}
