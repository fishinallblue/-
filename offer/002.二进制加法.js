/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let jin = 0, res = ""
  const binary = (temp, res) => {
    if (temp === 2) {
      jin = 1
      res = `0${res}`;
    } else if (temp === 3) {
      jin = 1
      res = `1${res}`;
    } else {
      jin = 0
      res = `${temp}${res}`;
    }
    return res;
  }
  const aL = a.length - 1
  const bL = b.length - 1
  for (var i = 0; i <= aL && i <= bL; i++) {
    const temp = jin + parseInt(a.charAt(aL - i)) + parseInt(b.charAt(bL - i));
    res = binary(temp, res);
  }
  while (i < a.length) {
    const temp = jin + parseInt(a.charAt(aL - i));
    res = binary(temp, res);
    i++
  }
  while (i < b.length) {
    const temp = jin + parseInt(b.charAt(bL - i));
    res = binary(temp, res);
    i++
  }
  if (jin) {
    res = `1${res}`
  }
  console.log(res);
  return res
};

addBinary("111", "10")