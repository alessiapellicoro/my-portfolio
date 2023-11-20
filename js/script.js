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

    var formValid = true;

    var params = {
        form_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        object: document.getElementById("object").value,
        message : document.getElementById("message").value
    }

    // Validation Name
    if(params.form_name === ''){
        formValid = false;
        document.getElementById("fullName").classList.add("error")
         
    }

    // Validation Mail
    if(params.email_id === '' || !params.email_id.includes('@') || !params.email_id.includes('.')){
        formValid = false
        document.getElementById("email_id").classList.add("error")
         
    }

    // Validation Object
    if(params.object === ''){
        formValid = false
        document.getElementById("object").classList.add("error")
         
    }

    // Validation Message
    if(params.message === ''){
        formValid = false
        document.getElementById("message").classList.add("error")
         
    }

    if(formValid){
        // On submit imput return valid 
        document.getElementById("fullName").classList.remove("error")
        document.getElementById("email_id").classList.remove("error")
        document.getElementById("object").classList.remove("error")
        document.getElementById("message").classList.remove("error")

        // Email send
        emailjs.send("service_kxs2r8l" , "template_6i7uo28", params).then(function (res){
            document.getElementById("popup").classList.add("show")
        })
    } else {
        return
    }
}

// Close Pop Up
function closePopup (){
    document.getElementById("popup").classList.remove("show")

    document.getElementById("fullName").value = ""
    document.getElementById("email_id").value = ""
    document.getElementById("object").value = ""
    document.getElementById("message").value = ""
}

/**
 * gsap
 */
var tl = new gsap.timeline({defaults: {duration: 1}})
tl.from(".cardboard-image", { y: 200, autoAlpha: 0 });
tl.from(".cardboard-title", { y: 200, autoAlpha: 0 }, '<0.2');
tl.from(".cardboard-about", { y: 200, autoAlpha: 0 }, '<0.2');
tl.from(".cardboard-contacts", { x: -200, autoAlpha: 0 }, '<0.2');
tl.from(".skills-study", { x: 200, autoAlpha: 0 }, '<0.2');
tl.from(".cardboard-project", { y: 200, autoAlpha: 0 }, '<0.2');
tl.from(".sticker-ciao", { autoAlpha: 0, duration: 0.4 }, '<1');
tl.from(".sticker-about-mobile-tablet", { autoAlpha: 0, duration: 0.4 }, '<0.');
tl.from(".sticker-about-desktop", { autoAlpha: 0, duration: 0.4 }, '<0.');
tl.from(".sticker-contacts", { autoAlpha: 0, duration: 0.4 }, '<0.');
tl.from(".sticker-skills", { autoAlpha: 0, duration: 0.4 }, '<0.');
tl.from(".sticker-study", { autoAlpha: 0, duration: 0.4 }, '<0.');
tl.from(".sticker-contact-me", { autoAlpha: 0, duration: 0.4 }, '<0.');

/**
 * carousel
 * 
 */
// transform all slides into a new array
var slides = Array.from(document.querySelectorAll('.cover-image-link'));

var slider = document.querySelector('#slider')
var index = 0;

var tl = gsap.timeline();

// Next Animation
function nextAnimation(){  
    if (index === slides.length - 1) {
        // -1 because it will do gsap.to -100 also at the last slide
        return
    } else {
        index++
        var indexPercent = index * -100
        console.log(indexPercent);
         tl.to(slider, {
            xPercent: indexPercent
         })
    }
}

// Prev Animation
function prevAnimation(){
   if(index === 0 || index === -0){
    return
   } else {
       index--
       var indexPercent = 0
       var indexPercent = index * -100
       console.log(indexPercent)
       tl.to(slider, {
           xPercent: indexPercent
        })
   }
}