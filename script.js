document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('data-target')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const clientEmail=document.getElementById("mail");

function SendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "divyansh2752003@gmail.com",
        Password : "38F95542EFF2B05F9BF14E6D040D97F023CB",
        To : "divyansh2752003@gmail.com",
        From : document.getElementById("mail").value,
        Subject : "Website Quote Request",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("button1",(e)=>{
    e.preventDefault();
    SendEmail();
    form.reset();
    return false;
})