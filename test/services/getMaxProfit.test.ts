import getMaxProfit from "../../src/services/getMaxProfit";

describe('Tests for the getMaxProfit function', () => {

    test('Should calculate the maxProfit for a given stockPrice array', () => {
  
        //Arrange
        const testSet = {
            stockPrices: [
                [7, 2, 3, 10, 1, 8, 11, 9],
                [10, 7, 5, 8, 11, 9],
                [],
                [1],
                [1, 1, 1, 1],
                [10, 10, 10, 1],
                [1, 2, 1, 2]
            ],
            maxProfits: [10, 6, 0, 0, 0, 0, 1]
        }


        for(let i in testSet.stockPrices){

            //Act
            const maxProfit = getMaxProfit(testSet.stockPrices[i]);

            //Assert
            expect(maxProfit).toEqual(testSet.maxProfits[i]);
        }

    });
  
})