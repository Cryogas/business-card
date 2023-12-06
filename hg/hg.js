const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*<>:"
let profileName = document.getElementById("profileName")
console.log(profileName.innerText.length)
let normalText = profileName.innerText




document.getElementById("profileName").onmouseover = () => {

    let iterations = 0;
    
    const interval = setInterval(() => {
        profileName.innerText = profileName.innerText.split("")
        .map((letter, index) => {
            if (index < iterations) {
                return profileName.dataset.value[index];
            }
    
            return letters[Math.floor(Math.random() * 63)]
        })
        .join("");
    
        console.log(profileName.innerText)
    
        if (iterations >= profileName.dataset.value.length) {
            clearInterval(interval);
            }
        iterations += 1/10;
        
    
    },30);
}



    // let matrixText = ""
    // for (let i = 0; i < 12; i++) {
    //     matrixText += letters[Math.floor(Math.random() * 63)];
    // }
    // return matrixText;


normal = () => {
    console.log("goodbye")
    profileName.innerText = normalText
    iterations = 30
}
