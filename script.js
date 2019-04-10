var num = 0;
var num1 = 0;
var op = null;

window.onload = function() {
    document.addEventListener('keyup', function(caractere){
        
        if (caractere.keyCode == 97 || caractere.keyCode == 49){            
            escreverNaTela("1");
        } else if (caractere.keyCode == 98 || caractere.keyCode == 50){            
            escreverNaTela("2");
        } else if (caractere.keyCode == 99 || caractere.keyCode == 51){            
            escreverNaTela("3");
        } else if (caractere.keyCode == 100 || caractere.keyCode == 52){            
            escreverNaTela("4");
        } else if (caractere.keyCode == 101 || caractere.keyCode == 53){            
            escreverNaTela("5");
        } else if (caractere.keyCode == 102 || caractere.keyCode == 54){            
            escreverNaTela("6");
        } else if (caractere.keyCode == 103 || caractere.keyCode == 55){            
            escreverNaTela("7");
        } else if (caractere.keyCode == 104 || caractere.keyCode == 56){            
            escreverNaTela("8");
        } else if (caractere.keyCode == 105 || caractere.keyCode == 57){            
            escreverNaTela("9");
        } else if (caractere.keyCode == 96 || caractere.keyCode == 48){            
            escreverNaTela("0");
        } else if (caractere.keyCode == 188 || caractere.keyCode == 44 || caractere.keyCode == 110 || caractere.keyCode == 46 || caractere.keyCode == 194){            
            escreverNaTela(",");
        } else if (caractere.keyCode == 187 || caractere.keyCode == 61 || caractere.keyCode == 13){            
            result();
        } else if (caractere.keyCode == 106 || caractere.keyCode == 42){            
            operacao('*');
        } else if (caractere.keyCode == 107 || caractere.keyCode == 43){            
            operacao('+');
        } else if (caractere.keyCode == 109 || caractere.keyCode == 45){            
            operacao('-');
        } else if (caractere.keyCode == 111 || caractere.keyCode == 47){            
            operacao('/');
        } else if (caractere.keyCode == 8){            
            apagar();
        }
    })
}
function escreverNaTela(char){
    
    texto = document.getElementById("text");
    if (texto.textContent.length <= 10){
        /// verifica se o caractere é uma vírgula e se já nao existe vírgula na string
        if (char == "," && texto.textContent.charAt(text.textContent.length-1) != "," && texto.textContent.includes(",") == false){
            texto.textContent += ",";
            num += ".";
        /// executa se o caractere não for uma vírgula
        } else if (char != ","){
            /// ignorar o separador de unidades no tamanho da string
            var txt = String(texto.textContent);
            while (txt.includes(".") == true){
                txt = txt.replace(".","");
            }
            /// adicionar o separador de unidades
            insert = function insert(str1, str2, pos){
                if(typeof(pos) == "undefined") {
                    pos = 0;
                }
                if(typeof(str2) == "undefined") {
                    str2 = '';
                }
                return str1.slice(0, pos) + str2 + str1.slice(pos);
            }
            

            if (txt.length >= 3){
                console.log("Resto da divisao do tamanho por 3: "+txt.length % 3)
                if (txt.length % 3 == 0){
                    for (x = 1; x < txt.length+1; x++){
                        console.log("X: "+x);
                        if (x%3==0){
                            txt = insert(txt, ".",-x+1);
                            texto.textContent = txt;   
                        }
                    }
                    txt = insert(txt, ".",-x+1);
                    texto.textContent = txt;  
                }       
            }
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