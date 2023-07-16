var text = document.getElementById("message")
var myname = document.getElementById("name")
var email = document.getElementById("email")
var subject = document.getElementById("subject")

var SendBtn = document.getElementById("SendBtn")
const form = document.querySelector("#contactForm")




form.addEventListener("submit",(e) => {
    if(myname.value != ""){
    var message = `<b>Text:</b>${text.value} %0A <b>Name:</b> ${myname.value} %0A <b>Email:</> ${email.value} %0A <b>Subject:</b> ${subject.value}`;
    
    let token = "6380737162:AAHKL3KxyRVHzqw6gPjVGi8Mm44zG7gO0N0";
    let chat_id = -1001949310369;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();        
    }
    alert("Send")
    myname.value = ""
    text.value = " " 
    email.value = " "
    subject.value = " "
})

