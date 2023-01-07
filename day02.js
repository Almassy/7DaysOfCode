/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?


No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */

    function show (phrase){
        document.write(phrase)
    }
    const name = prompt ("Olá, qual seu nome?");
    const age = prompt (name + ", qual sua idade?");
    const language = prompt (name + ", qual linguagem você está estudando?");

show ("Olá " + name + " você tem " + age + " anos e já está aprendendo " + language);

/*Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?*/

function like (){
    let ask = prompt ("Você está gostando de estudar " + language + "? <p> 1 = SIM</p><p>2 = Não</p> ");

    if (ask == 1){
        show("<br> Muito bom! Continue estudando e você terá muito sucesso!");
    }
    else if (ask == 2) { show ("<br> Ahh que pena... Já tentou aprender outras linguagens?");}
    else if (ask !=1 !=2); {show ("<br> Preciso que aperte F5 e responda corretamente a última pergunta")}
}

like();