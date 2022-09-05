const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-btn");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    let ip = initialPrice.value;
    let qty = stocksQuantity.value;
    let curr = currentPrice.value;

    calculateProfitLoss(ip, qty, curr);
}
function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / initial) * 100;

        showOutput("Hey the loss is -" + String(loss) + " and the percentage is " + String(lossPercentage) + "%");

    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / initial) * 100;

        showOutput("Hey the profit is " + String(profit) + " and the percentage is " + String(profitPercentage) + "%")

    } else {
        showOutput("hay! Nothing in your plate")

    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}


