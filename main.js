let boss = document.getElementById("boss")

let stick = document.createElement("div")

let hourhand = document.createElement("div")

let minhand = document.createElement("div")

boss.appendChild(stick)
boss.appendChild(minhand)
boss.appendChild(hourhand)



hourhand.className = "hourhand"
hourhand.style.transition = "0.5s"

minhand.className = "minhand"
minhand.style.transition = "0.5s"

stick.className = "stick"
stick.style.transition = "0.5s"




let gradus = 6

let second = setInterval(() =>{
    let date = new Date()
    date.getSeconds()
    gradus += 6
    stick.style.transformOrigin = "1px 1px"
    stick.style.transform = `rotate(${gradus}deg)`
},1000 )



let gradus2 = 6

let soat = setInterval(() =>{
    let date2 = new Date()
    date2.getMinutes()
    gradus2 += 6
    minhand.style.transformOrigin = "1px 1px"
    minhand.style.transform = `rotate(${gradus2}deg)`
},1000*60 )


let gradus3 = 15

let minut = setInterval(() =>{
    let date3 = new Date()
    date3.getHours()
    gradus3 += 15
    hourhand.style.transformOrigin = "1px 1px"
    hourhand.style.transform = `rotate(${gradus3}deg)`
},1000*60*60 )
