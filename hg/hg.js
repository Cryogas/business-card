const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@$^&"


createHoverEffect= (elementID) => {
    let isMouseOver = false;
    let interval;
    const targetElement = document.getElementById(elementID)

    
    targetElement.addEventListener("mouseenter", () => {
        isMouseOver = true;
        let iterations = 0;

        clearInterval(interval)
        
        interval = setInterval(() => {
            targetElement.innerText = targetElement.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return targetElement.dataset.value[index];
                }
        
                return letters[Math.floor(Math.random() * 31)]
            })
            .join("");
        
        
            if (iterations >= targetElement.dataset.value.length) {
                clearInterval(interval);
                }
            iterations += 1/5;
            
        
        },30);
    });

    // if (!isMouseOver) {
    //     interval = setInterval(() => {
    //         targetElement.innerText = targetElement.innerText.split("").map(()=> {
    //             return letters[Math.floor(Math.random() * letters.length)];
    //         }).join("");
    //     },1000);
    // }

    targetElement.addEventListener("mouseleave", () => { 
        isMouseOver = false;
        clearInterval(interval); 
        console.log(isMouseOver);
        if (!isMouseOver) {
            interval = setInterval(() => {
                targetElement.innerText = targetElement.innerText.split("").map(()=> {
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");
            },500);
        }

    });

};


createHoverEffect("profileName")
createHoverEffect("job")
createHoverEffect("country")


