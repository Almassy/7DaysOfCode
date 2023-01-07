/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?


No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */

/*var age = "idade"

var language = "linguagem"

var name = "nome" */

    var name = prompt ("Olá, qual seu nome?");
    var age = prompt (name + ", qual sua idade?");
    var language = prompt (name + ", qual linguagem você está estudando?");

document.write ("Olá " + name + " você tem " + age + " anos e já está aprendendo " + language);