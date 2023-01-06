/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?


No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */

/*var age = "idade"

var language = "linguagem"

var name = "nome" */

    function name (x){
        prompt (x);
    }

    function age (y) {
        prompt (y);
        
    }

    function language (z){
        prompt (z);
    }


document.write ("Olá " + name () + " você tem " + age () + " anos e já está aprendendo " + language());