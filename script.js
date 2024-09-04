const currency = {
    USD: 1,
    PKR: 278.57,
    AED: 3.67,
    EUR: 0.90,
    INR: 83.89,
}

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()


    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let amount = document.getElementById("amount").value

    let fromCurrency = currency[from];
    let toCurrency = currency[to];
    let baseAmount = amount / fromCurrency;
    let converted = baseAmount * toCurrency;

    document.getElementById("result").textContent = `Converted: ${Math.round(converted)}`
}
)
