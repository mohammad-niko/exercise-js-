/**
 * /*
 *   CURRENCY FORMATTING
 *   ===================
 *   The business is breaking out into a new market and need to convert prices to USD
 *   Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 *
 * @format
 */

function convertToUSD(convert) {
  const conertToUUSD = convert * 1.4;
  return `$${conertToUUSD}`;
}
console.log(convertToUSD(500));
/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions, which means you only convert 99% of the £ to BRL.
*/

function convertToBRL(convert) {
  const ninetyNinePercent = (convert / 100) * 99;

  const conertToBRL = ninetyNinePercent * 5.7;

  return `BRL ${conertToBRL}`;
}
console.log( convertToBRL(500));
/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node currencyConversion` into your terminal
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("convertToUSD function works", convertToUSD(32), 44.8);
test("convertToBRL function works", convertToBRL(30), 169.29);
