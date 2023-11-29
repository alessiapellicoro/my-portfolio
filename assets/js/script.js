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
         
    } else {
        document.getElementById("fullName").classList.remove("error")
    }

    // Validation Mail
    if(params.email_id === '' || !params.email_id.includes('@') || !params.email_id.includes('.')){
        formValid = false
        document.getElementById("email_id").classList.add("error")
         
    } else {
        document.getElementById("email_id").classList.remove("error")
    }

    // Validation Object
    if(params.object === ''){
        formValid = false
        document.getElementById("object").classList.add("error")
         
    } else {
        document.getElementById("object").classList.remove("error")
    }

    // Validation Message
    if(params.message === ''){
        formValid = false
        document.getElementById("message").classList.add("error")
    } else {
        document.getElementById("message").classList.remove("error")
    }

    if(formValid){
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
 * Slider heading 1
 */
var sliderText = document.querySelector('.slider-text-1');
var tlSlider = gsap.timeline({repeat: -1});
tlSlider.to(sliderText, {
    yPercent: -25, duration: 1, delay: 1.5, ease: 'power4.out'
})
tlSlider.to(sliderText, {
    yPercent: -50, duration: 1, delay: 1.5, ease: 'power4.out'
})
gsap.set(sliderText, {yPercent: 0})


/**
 * carousel
 * 
 */
// transform all slides into a new array
var slides = Array.from(document.querySelectorAll('.cover-image-link'));

var slider = document.querySelector('#slider')
var index = 0;

var tlCarousel = gsap.timeline();

// Next Animation
function nextAnimation(){  
    if (index === slides.length - 1) {
        // -1 because it will do gsap.to -100 also at the last slide
        return
    } else {
        index++
        var indexPercent = index * -100
        console.log(indexPercent);
        tlCarousel.to(slider, {
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
        tlCarousel.to(slider, {
            xPercent: indexPercent
        })
   }
}