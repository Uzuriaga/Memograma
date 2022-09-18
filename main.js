//Inicializar 
let openedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let success = 0;
let timer = false;
let time = 30;
let countdown = null;


//Apuntando a documento HTML
let showMoves = document.getElementById('movimientos');
let showSuccess = document.getElementById('aciertos');
let showTimer = document.getElementById('tiempo');


//Desordenar numeros
let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num = num.sort(()=>{return Math.random()-0.5});
console.log(num);


//Contar tiempo
function countTime(){
    countdown = setInterval(()=>{
        time--;
        showTimer.innerHTML=  `Tiempo: ${time} segundos`;
        if(time == 0){
            clearInterval(countdown);
            blockCards();
        }
    },1000)
}

//Bloquear tarjetas cuando el juego acabe
function blockCards(){
    let cardBlock = document-getElementById(i);
    cardBlock.innerHTML = num[i];
    cardBlock.disabled = true;

}


//Funcion principal
function abrir(id){

    if(timer == false){
        countTime();
        timer = true;
    }

 openedCards++;
 console.log(openedCards);

 if(openedCards == 1){
    //Mostrar el primer numero
    card1 = document.getElementById(id);
    firstResult = num[id];
    card1.innerHTML = `<img src="./images/${firstResult}.jpg" alt="">`;

    //Deshabilitar el boton presionado
    card1.disabled = true;
 }else if(openedCards ==2){
    //Mostrar el segundo numero
    card2 = document.getElementById(id);
    secondResult = num[id];
    card2.innerHTML = `<img src="./images/${secondResult}.jpg" alt="">`;

    //Desabilitar segundo botton
    card2.disabled = true;

    //Incrementar los movimientos
    moves++;
    showMoves.innerHTML = `Movimientos: ${moves}`;

    if (firstResult == secondResult){
        //Encerrar contador tarjetas destapadas
        openedCards = 0;

        //Incrementar aciertos
        success++;
        showSuccess.innerHTML = `Aciertos: ${success}`;

        if (success == 8){
            showSuccess.innerHTML =`Aciertos: ${success}`;
            showMoves.innerHTML = `Movimientos: ${moves}`;
        }

    } else {
        //Mostrar momentaneamnete los valores y volver a ocultar
        setTimeout(()=>{
            card1.innerHTML = '';
            card2.innerHTML = '';
            card1.disabled = false;
            card2.disabled = false;
            openedCards = 0;
        },800);
    }

 }

}



