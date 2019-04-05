var num = 0;
var num1 = 0;
var op = null;

function escreverNaTela(char){
    texto = document.getElementById("text");
    if (texto.textContent.length <= 9){
        /// verifica se o caractere é uma vírgula e se já nao existe vírgula na string
        if (char == "," && texto.textContent.charAt(text.textContent.length-1) != "," && texto.textContent.includes(",") == false){
            texto.textContent += ",";
            num += ".";
        /// executa se o caractere não for uma vírgula
        } else if (char != ","){
            texto.textContent += (char);
            num += String(char);
        }
        console.log("Conteúdo do texto: "+texto.textContent+"| Num1: "+num1+" | Num:"+num);
    }
}
function apagar(){
    texto = document.getElementById("text");
    /// apaga o ultimo elemento do texto
    texto.textContent = texto.textContent.slice(0,-1)
    console.log("Conteúdo do texto: "+texto.textContent+" | Num: "+num+" | Num1: "+num1);
    /// verifica se a string é "-" ou se tem tamanho 1
    if (String(num).length == 1 || String(num).indexOf("-") == 0){
        num = 0;
    }
    else{
        num = parseFloat(String(num).slice(0,-1))
    }
}
function operacao(oper){
    /// apaga o ultimo elemento do texto da tela
    document.getElementById("text").textContent = "";
    op = oper;
    if (num != 0){
        num1 = num;
        num = 0;
    }    
    console.log("Conteúdo do texto: "+texto.textContent+" | Num: "+num+" | Num1: "+num1)
}
function result(){
    /// verifica quais das operações foi selecionada
    
    if (op == "+"){
        document.getElementById("text").textContent = String(parseFloat(num1)+parseFloat(num)).replace(".",",");
        num = parseFloat(num1)+parseFloat(num);
        num1 = 0;
        op = null;
        console.log(num1);
    } else if (op == "-"){
        document.getElementById("text").textContent = String(parseFloat(num1)-parseFloat(num)).replace(".",",");
        num = parseFloat(num1)-parseFloat(num);
        num1 = 0;
        op = null;
        console.log(num1);
    } else if (op == "*"){
        document.getElementById("text").textContent = String(parseFloat(num1)*parseFloat(num)).replace(".",",");
        num = parseFloat(num1)*parseFloat(num);
        num1 = 0;
        op = null;
        console.log(num1);
    } else if (op == "/"){
        if (num != 0){
            document.getElementById("text").textContent = String(parseFloat(num1)/parseFloat(num)).replace(".",",");
            num = parseFloat(num1)/parseFloat(num);
            num1 = 0;
            op = null;
            console.log(num1);
        }
    } 
}