//Armazene em valores em variavies com cada um dos tipos de dados vistos
//String, number e Boolean;

var nome= "Thiago";
console.log(typeof nome);

var idade = 17;
console.log(typeof idade);


var MaiorIdade = true;
console.log(typeof MaiorIdade);


//Crie uma estrutura if que verifica a entrada na bala, se tiver mais de 18 anos pode entrar
//Armazenar a idade em uma variavel com let;

//Insira uma instrução console.log("Pode Entrar"), caso a pessoa tenha mais que 18 anos.



if(idade > 18) {
     console.log("Pode entrar");
} else {

    console.log("Você ainda não tem idade");
}


//Crie uma constante com o seu nome como valor
//Depois uma estrutura if que verifica se o seu nome é o  que esta na constante 
//se estiver, emita uma mensagem de saudação com console.log();


 const meuNome = "Thiago";
 if(meuNome==="Thiago"){

    console.log("Olá Thiago");
 }else {

    console.log("Usuario não encontrado");

 }


 //Teste a função  Math.pow() com a seguintes bases: 2,3,18 e o expoente deve ser 2;

 console.log(Math.pow(2,2));
 console.log(Math.pow(3,2));
 console.log(Math.pow(18,2));


 // Armazene a velocidade de um carro em uma variavel, com o numero que desejar;
//fala unma estrutura if/else que verifica se ele esta acima da velocidade;
//80 é a velocidade maxima permitida;
//se estiver acima ou abaixo exiba mensagens com console.log;

let velocidade = 120;

if(velocidade > 80){
     
    console.log("Você esta acima da velocidade permitida");
} else {

     console.log("Você esta na velocidade correta");
}

//Faça uma estrutura if/else para verificar se um usuario pode dirigir;
//Armazena em variaveis algumas informações sobre o usuario: idade, se tem cnh;
//Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
//Se a idade for maior que 18 e tem cnh, exiba uma mensagem;
//Se não tiver 18 nem cnh, exiba outra mensagem;

let cnh = true;


if(idade >=18 && cnh == true)
{

     console.log("Você esta apto a digirir");

}else if( idade >= 18 && cnh ==false)
{

   console.log("Você não tem cnh, então não esta apto a dirigir");

} else {

     console.log("Você não  tem idade e nem cnh para dirigir");
}



//Escreva um loop while que exiba numeros de 0 a 10 no console;
let contador = 0 ;
while(contador <= 10){

   console.log(contador);

   contador = contador + 1;

}


//Escreva um loop for que exiba numeros de 100 a 50 no console;



for ( let i = 100; i >= 50 ; i--){

    console.log(i);
}



//Escreva um loop for ou while que exiba qual número é par e qual numero é impar,
//o contador deve iniciar em 0 e  ir até 50;

for(let i = 0 ;  i <=50; i++){

  if(i%2 ==0 ){

    console.log(`O numero ${i} é par`);
  } else{

    console.log(`O numero ${i} é impar`);
  }


}