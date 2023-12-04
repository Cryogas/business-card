const letters = "ABCDEFGHIJKKLMNOPQRSTUVWXYZ"

let nama = document.querySelector("details")

nama.addEventListener(onmouseover, () =>{
    nama.innerText = nama.innerText.split("")
    console.log(nama.innerText)
    nama.innerText = letters[Math.floor(Math.random()*26)]
});

