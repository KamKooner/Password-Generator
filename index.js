function generate(){
    let pass = ""
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById('p3')
    let p4 = document.getElementById('p4')
    let passarr = []
    let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","?","@","#","$","%","^","&","*","(",")","-","+","1","2","3","4","5","6","7","8","9","0"]
    for (let i=0; i<4; i++){
        for (let j=0; j<12; j++){
            pass += characters[Math.floor(Math.random() * characters.length)]
        }    
        passarr.push(pass)
        pass = ""
    
    }
    p1.textContent = passarr[0]
    p2.textContent = passarr[1]
    p3.textContent = passarr[2]
    p4.textContent = passarr[3]
}