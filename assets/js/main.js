let stock = ['40', '25', '7']
let products = ['voitures', "moto", "sextoys"]

document.querySelector("#Produit_1").innerText = products[0] + " " + stock[0]
document.querySelector("#Produit_2").innerText = products[1] + " " + stock[1]
document.querySelector("#Produit_3").innerText = products[2] + " " + stock[2]

for (let i = 0; i < document.querySelectorAll('.product').length; i++) {
    document.querySelectorAll('.product')[i].innerText = products[i];
}

function cmd() {
    let result = 0
    let stock1Value = document.querySelector('#produit1').value
    let stock2Value = document.querySelector('#produit2').value
    let stock3Value = document.querySelector('#produit3').value

    if (parseInt(stock1Value) > parseInt(stock[0]) || parseInt(stock2Value) > parseInt(stock[1]) || parseInt(stock3Value) > parseInt(stock[2])) {
        document.querySelector("#no_stock").innerText = 'Commande impossible, stock insufisant'
        for (let i = 0; i < document.querySelectorAll('.produit').length; i++) {
            document.querySelectorAll('.produit')[i].value = '';
        }
    } else {
        result = subtract(stock[0], stock1Value)
        stock[0] = result
        document.querySelector("#Produit_1").innerText = products[0] + " " + stock[0]
        result = subtract(stock[1], stock2Value)
        stock[1] = result
        document.querySelector("#Produit_2").innerText = products[1] + " " + stock[1]
        result = subtract(stock[2], stock3Value)
        stock[2] = result
        document.querySelector("#Produit_3").innerText = products[2] + " " + stock[2]
        document.querySelector("#no_stock").innerText = ''
        for (let i = 0; i < document.querySelectorAll('.produit').length; i++) {
            document.querySelectorAll('.produit')[i].value = '';
        }
    }
}

function subtract(element, nmb) {
    return element - nmb;
}





/****

document.querySelector('#produit1').value=''
document.querySelector('#produit2').value=''
document.querySelector('#produit3').value=''
*** */