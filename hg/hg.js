let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*<>:"
let profileName = document.getElementById("profileName")
console.log(profileName.innerText.length)
let normalText = profileName.innerText


matrix = () => {
    console.log("Hello")
    let matrixText = ""
    for (let i = 0; i < 12; i++) {
        matrixText += letters[Math.floor(Math.random() * 63)];
    }
    return matrixText;
}


normal = () => {
    console.log("goodbye")
    profileName.innerText = normalText
    setInterval = 0
}

setInterval(function matrices(){
    
    profileName.innerText = matrix() 
},1000);