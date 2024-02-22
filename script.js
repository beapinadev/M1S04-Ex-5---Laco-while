let avaliacaoRuim = 0
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a sua avaliação para a série Stranger Things? (1)excelente, (2)bom ou (3)ruim")
    if(resposta == "3"){
        avaliacaoRuim++;
    }
    contador ++
}

alert("Total de usuários que avaliaram a série como ruim: " + avaliacaoRuim)