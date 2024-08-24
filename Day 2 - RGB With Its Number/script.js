

const show = document.getElementById("color_show"); 



function rgb () {
        const red = Math.floor(Math.random() * 255); 
        const green = Math.floor(Math.random() * 255); 
        const blue = Math.floor(Math.random() * 255); 
        return `rgb(${red},${green},${blue})`; 
}

function clickMe () {
        const background = document.getElementById("root"); 
        const myBtn = document.getElementById("myButton"); 
        
        myBtn.addEventListener("click", function() {
                const bgColor = rgb(); 
                background.style.backgroundColor = bgColor;
                show.textContent = bgColor;
                background.style.transitionDuration = "400ms"; 
                myBtn.style.transitionDuration = "400ms"; 
                myBtn.style.backgroundColor = bgColor; 
        })
}


clickMe(); 

