




function rgb_generator() {
    Red = Math.floor(Math.random() * 255); 
    Green = Math.floor(Math.random() * 255); 
    Blue = Math.floor(Math.random() * 255);
    return `rgb(${Red},${Green},${Blue})`; 
}


function main() {
    const bg = document.getElementById("container");
    const myButton = document.getElementById("btn"); 
    
    myButton.addEventListener("click", function() {
        const myColor = rgb_generator(); 
        bg.style.backgroundColor = myColor; 
        myButton.style.backgroundColor = myColor; 
        myButton.style.transitionDuration = "1000ms"; 
        bg.style.transitionDuration = "1000ms";
    })
}











