var botao = document.getElementById('botao')
botao.addEventListener('click' , calcular)

var nome = document.getElementById('nome')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var res = document.getElementById('res')

function calcular(){
    var n = String(nome.value)
    var a = Number(altura.value)
    var p = Number(peso.value)
    var imc = Number(p / a**2).toFixed(2)
    var imcs = String(imc).replace('.' , ',')

    if(nome.value == '' || altura.value == '' || peso.value == ''){
        window.alert('Preencha todos campos!!!')
    }
    else{ 
        if(imc < 0){
            window.alert('Digite um número positivo para peso!')
        }
        
        else if(imc < 17){
            var classificacao = 'muito abaixo do peso.'
        }

        else if (imc < 18.5){
            var classificacao = 'abaixo  do peso.'
        }

        else if (imc < 25){
            var classificacao = 'com peso normal.'
        }

        else if (imc < 30){
            var classificacao = 'acima do peso.'
        }

        else if (imc < 35){
            var classificacao = 'com obesidade grau I.'
        }

        else if (imc <=40){
            var classificacao = 'com obesidade grau II.'
        }
        
        else{
            var classificacao = 'com obesidade grau III'
        }
        res.innerHTML = `${n} seu IMC é ${imcs} e você está ${classificacao}`
    }
}