let diceBtn = document.getElementById("btn-dice")
let diceNum = document.getElementById("dice-num")
let diceStat = document.getElementById("dice-stat")
let player= document.getElementsByClassName("player")
let numBoard1 = document.getElementsByClassName("box-num1")
let numBoard2 = document.getElementsByClassName("box-num2")
let nilaiPlayer = document.getElementById("initValue")
let eventStat = document.getElementById("status-event")
let modal = document.getElementById ("modal")
let ok = document.getElementById ("yes")
let no = document.getElementById ("no")
let end = document.getElementById ("end")



function randomNumber (){
    let angka = Math.round(Math.random()*3)

    return angka
}


diceBtn.addEventListener("click" , function(){

    let angka = randomNumber()
    let valuePlayer = Number(nilaiPlayer.innerText)
    let jumlah = 1

    diceNum.style.color = "white"
    diceStat.style.color = "white"

    if(angka > 0){
        diceNum.innerText = angka
    }

    if(valuePlayer <= 20 && valuePlayer + angka <= 20){
        jumlah = valuePlayer + angka
        nilaiPlayer.innerText = jumlah
    }else if(valuePlayer+angka > 20){
        return alert(`Angka yang kamu dapat terlalu besar, coba lagi!`)
    }



    if(jumlah == 7){
        jumlah+= 10
        nilaiPlayer.innerText = jumlah
        eventStat.style.color = "yellow"
        eventStat.innerText = "You got ladder, let's go up"
    }else if(jumlah == 19){
        jumlah-= 18
        nilaiPlayer.innerText = jumlah
        eventStat.style.color = "yellow"
        eventStat.innerText = "no!! there's snake! let's go down"
    }else{
        eventStat.style.color = "transparent"
    }
    
    for(let i=0; i<numBoard2.length; i++){
        if(numBoard2[i].innerText == jumlah){
            numBoard2[i].classList.add('pion')
        }else{
            numBoard2[i].classList.remove('pion')
        }

    }

    if(jumlah == 20){
        eventStat.style.color = "yellow"
        eventStat.innerText = "Game Over! Terimakasih sudah bermain"
        end.style.color = "yellow"
        no.style.color = "white"
        ok.style.color = "white"
        ok.style.backgroundColor = "#3498DB"
        no.style.backgroundColor = "#E74C3C"
    }
    
})



