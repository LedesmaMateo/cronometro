let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("reset")
let showTime = document.getElementById("showTime");
let lapsBtn = document.getElementById("laps");

lapsBtn.disabled = true;
startBtn.addEventListener("click", () =>{
    if(startBtn.innerText == "Iniciar"){
        start();
        startBtn.innerText = "Detener";
        lapsBtn.disabled = false
    } else{
        stop();
        startBtn.innerText = "Iniciar";    
        lapsBtn.disabled = true;
    }
})

resetBtn.addEventListener("click", ()=>{
    reset();
    console.log(minutes, seconds, time)
})

lapsBtn.addEventListener("click", ()=>{
    let li = document.createElement("li");
    li.innerText = showTime.innerHTML;
    document.getElementById("lapsList").appendChild(li)
})

let time = 0;
let minutes = 0;
let seconds = 0;

// Variable para referenciar el setTimeOut
let timeout;

function start(){
    timeout = setTimeout(() =>{
        time++;
        showTimeInDocument();
        // Llamamos a la funcion para que se vuelva a ejecutar 
        start();
    }, 1000)  // 1000 ms = 1s
}

function stop(){
    // Limpiamos la variable timeout para que detenga de contar
    clearTimeout(timeout);
}

function reset(){
    time = 0;
    minutes = 0;
    seconds = 0;
    showTimeInDocument();
    document.getElementById("lapsList").innerHTML = "";
}

function showTimeInDocument(){
    minutes = parseInt(time / 60);
    seconds = time - (minutes * 60);

    if((seconds < 10) && (minutes < 10)){
        showTime.innerText = `0${minutes}:0${seconds}`
    }else{
        showTime.innerText = `0${minutes}:${seconds}`
    }
}

