function calcularSalario(){
    // obter informações do usuario
    let fixo = Number(document.getElementById("fixo").value);
    let vendas = Number(document.getElementById("vendas").value);
    //number tem que ser com o N em maiusculo
    //calcular a comissão
    let comissao = vendas*4/100
    //calcular salário total
    let total = fixo + comissao
    // + é um operador de concatenação, de juntar algo com outra coisa
    alert("comissão" + comissao)
    alert("salario total" + total)
}

function calcularsubtracao(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let total = n1 - n2
    alert("resultado: " + total)
}

function calcularmult(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let total = n1 * n2 * n3
    //alert("O resultado é: " + total)
    document.getElementById("total").innerHTML = "O resultado da multiplicação é: " + total
}

function calculardiv(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let total = n1 / n2
    alert("O resultado é: " + total)
}

function calcularmedp(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let nm1 = n1 * 2
    let nm2 = n2 * 3

    let total = (nm1 + nm2) / 5
    alert("A média é: " + total)
}

function calculardesc(){
    let v = Number(document.getElementById("v").value)
    let desconto = (v/100) * 10
    let np = v - desconto

    alert("O novo preço é: " + np)
}

function calcularp(){
    let p = Number(document.getElementById("p").value)

    let pa = ((p/100) * 15) + p
    let pb = p - ((p/100) * 20)

    alert("O peso novo é: " + pa +"kg")
    alert("O peso novo é: " + pb +"kg")
}

function calcularpg(){
    let p = Number(document.getElementById("p").value)

    let pg = p * 1000

    alert("O seu peso em gramas é: " + pg +"g")
}

function calcularat(){
    let bma = Number(document.getElementById("bma").value)
    let bme = Number(document.getElementById("bme").value)
    let a = Number(document.getElementById("a").value)

    let area = ((bma + bme) * a) / 2

    alert("A área do trapézio é: " + area)
}

function calcularaq(){
    let l = Number(document.getElementById("l").value)

    let area = l*l
    
    alert("A área do quadrado é: " + area)
}