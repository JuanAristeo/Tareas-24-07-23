let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplica = document.getElementById("btnMultiplica");
let btnDivide = document.getElementById("btnDivide");
let btnClear = document.getElementById("btnClear")
let btnResultado = document.getElementById("txtResultado");

let numero1=0;
let operacion=null;

btn0.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "0";

});
btn1.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "1";

});
btn2.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "2";

});
btn3.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "3";

});
btn4.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "4";

});
btn5.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "5";

});
btn6.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "6";

});
btn7.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "7";

});
btn8.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "8";

});
btn9.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += "9";

});
btnPunto.addEventListener("click", function(event){
    event.preventDefault();

    btnResultado.value += ".";

});
btnClear.addEventListener("click",function(event){
    event.preventDefault();
    btnResultado.value="";
    numero1=0;
    operacion=null;

});
btnSuma.addEventListener("click", function(event){
    event.preventDefault();
    numero1= parseFloat(btnResultado.value);
    operacion= "suma";

    btnResultado.value= "";
});
btnResta.addEventListener("click", function(event){
    event.preventDefault();
    numero1= parseFloat(btnResultado.value);
    operacion= "resta";

    btnResultado.value= "";
});
btnMultiplica.addEventListener("click", function(event){
    event.preventDefault();
    numero1= parseFloat(btnResultado.value);
    operacion= "multiplica";

    btnResultado.value= "";
});
btnDivide.addEventListener("click", function(event){
    event.preventDefault();
    numero1= parseFloat(btnResultado.value);
    operacion= "divide";

    btnResultado.value= "";
});

function sumar(numero1, numerito2){
    return numero1 + numerito2;
}
function restar(numero1, numerito2){
    return numero1 - numerito2;
}
function multiplicar(numero1, numerito2){
    return numero1 * numerito2;
}
function dividir(numero1, numerito2){
    return numero1 / numerito2;
}

function calcularResultado(){
    const numerito2 = parseFloat(btnResultado.value);
    let resultado

    switch(operacion){
        //llamo a la funcion que realizara.
        case "suma":
             resultado= sumar(numero1, numerito2);
             break;
        case "resta":
             resultado= restar(numero1, numerito2);
             break;
        case "multiplica":
             resultado= multiplicar(numero1, numerito2);
             break;
        case "divide":
             resultado= dividir(numero1, numerito2);
             break;
    
             
    }
              //Se mostrara el resultado en btnResultado
              btnResultado.value= resultado;
              operacion=null;
              numero1=0;
}

btnIgual.addEventListener("click", function(event){
    event.preventDefault();

    calcularResultado();
});


