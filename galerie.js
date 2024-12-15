function setImage() {
    
     images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {  
        images[i].setAttribute("tabindex", "0"); 
        
    
        images[i].addEventListener("focus", () => {
            images[i].style.filter = "blur(2px)";  // Applique un effet de flou lorsque l'image est en focus
        });

        images[i].addEventListener("blur", () => {
            images[i].style.filter = "none";  // Retire l'effet de flou lorsque le focus est perdu
        });
    }
}

function DoIt(element) {
    document.getElementById('image').innerHTML = element.alt;  
    document.getElementById('image').style.backgroundImage = `url('${element.src}')`;  
}

function Go_zero() {
    document.getElementById('image').innerHTML = 'Hover over a photo.';  
    document.getElementById('image').style.backgroundImage = "url('')";  
}
