// A function for calculating the max profit based on an array of stock prices
export default function (stockPrices: number[]){
    if (stockPrices.length < 2) return 0

    let buyPrice = stockPrices[0];
    let profit = 0;

    for(let i = 1; i < stockPrices.length; i++){
        if( stockPrices[i] > buyPrice)
            profit = Math.max(profit, stockPrices[i]-buyPrice)
        else
            buyPrice = stockPrices[i]
    }

    return profit
}