module.exports = function reverse (n) {
  revNumber = String(Math.abs(n)).split('').reverse().join('');
  return Number(revNumber);
}
