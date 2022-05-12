// function to change picture when click Next or Back buttons.
function Next(){
    document.getElementById("certificate").src="/Image/cer2.jpg"
    document.getElementById("topic").innerHTML = "Certificate No.2"
}
function Back(){
    document.getElementById("certificate").src="/Image/cer1.jpg"
    document.getElementById("topic").innerHTML = "Certificate No.1"
}