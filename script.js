function toggleStream() {  
    const stream = document.getElementById("stream");  
    stream.style.display = stream.style.display === "none" ? "block" : "none";  
}  

function toggleShorts() {  
    const shorts = document.getElementById("shorts");  
    shorts.style.display = shorts.style.display === "none" ? "block" : "none";  
}  

// Fade in effect  
const fadeInStyle = document.createElement('style');  
fadeInStyle.innerHTML = `  
.fade-in {  
    animation: fadeIn 1s;  
}  
@keyframes fadeIn {  
    from { opacity: 0; }  
    to { opacity: 1; }`;  
document.head.appendChild(fadeInStyle);  

// Fade in effect for all elements on scroll  
window.addEventListener('scroll', function() {  
    const elements = document.querySelectorAll('.container > *');  
    elements.forEach(element => {  
        if (window.scrollY > 100) { // Adjust the scroll distance as needed  
            element.classList.add('fade-in');  
        } else {  
            element.classList.remove('fade-in');  
        }  
    });  
});  