# maxStockProfit

A function for calculating the maximum profit based on an array of stock prices

- The function takes an array of number as input.
- The indices are the time in minutes past trade opening time, which was 10:00 am local time.
- The values are the price in dollars of the stock at that time.
- So if the stock cost $5 at 11:00am, stock_prices_yesterday[60] = 5.
- The function returns 0 if no profit can be made.
- Example: for stockPrices = [10, 7, 5, 8, 11, 9] getMaxProfit(stockPrices)) returns 6 (buy at $5 sell at $11).

The project uses the following technologies:

- Backend: NodeJs
- Type Checking: Typescript

## Getting Started

```
npm install
npm start
```


## Scripts

```
- npm run tslint           - will run the linter checks
- npm test                 - will run all the tests
- npm run coverage         - will generate code coverage reports
- npm run build            - will generate generate .js from the .ts files for production use
- npm run build:watch      - will generate generate .js from the .ts files for production use and watch for changes
- npm start                - will use the function and log the max profit
```

## Project Structure

### Overall Structure

1. The `test` directory contains all the unit tests.
2. The `src` directory contains the all the source code including the app.ts file.
3. The `dist` directory contains all compiled js files.
4. The function is stored under `C:\Programming\maxStockProfit\src\services\getMaxProfit.ts`

## Development


This project uses tsLint to detect suspicious code in JavaScript files.
Visit https://palantir.github.io/tslint/ for details.

### Testing

This project uses jest.
Visit https://jestjs.io/ for details.

To execute tests:

```bash
npm test
```

To calculate coverage:

```bash
npm run coverage
```

The coverage reports will be in the `coverage` folder

## FAQ

## Credits

Written by Shahriar Hasan Khan
Contact: shahriar27@hotmail.com
