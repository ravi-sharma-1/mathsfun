export const sum = (...args) => [...args].reduce((a, elem) => a + elem, 0);
export const mul = (...args) => [...args].reduce((prod, n) => prod * n);
const gcd = (a, b) => {
  let num = 2,
    res = 1;
  while (num <= Math.min(a, b)) {
    if (a % num === 0 && b % num === 0) {
      res = num;
    }
    num++;
  }
  return res;
};

const sumFrac = (a, b) => {
  const aDenom = a[1],
    aNumer = a[0];
  const bDenom = b[1],
    bNumer = b[0];
  let resDenom = aDenom * bDenom;
  let resNumer = aDenom * bNumer + bDenom * aNumer;
  const greatestDivisor = gcd(resDenom, resNumer);
  return [resNumer / greatestDivisor, resDenom / greatestDivisor];
};

export const sumArrayOfFractions = (arr) => {
  return arr.reduce((acc, val) => sumFrac(acc, val));
};
