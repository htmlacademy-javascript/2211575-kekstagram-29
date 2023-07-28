const stringLength = function (string, maxLenght) {
  const length = (string.length);
  if (length <= maxLenght) {
    return true;
  }

  return false;
};

stringLength('привет', 6);

const palindrome = function (string) {
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
};

palindrome('шалаш');

const onlyNumber = function (number) {
  const Number = (parseInt(number,10));
  return Number;
};

onlyNumber('57 корова');



const veryScary = function (string,minLength,symbol) {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  return symbol.slice(0, actualPad % symbol.length) + symbol.repeat(actualPad / symbol.length) + string;
};

veryScary('q', 4 , 'we');
