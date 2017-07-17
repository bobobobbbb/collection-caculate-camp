//test pass
function randomGen() {
  var res = ''
  for (let i = 0; i < 4; i++) {
    let randomNum = parseInt(10 * Math.random()).toString()
    while (res.indexOf(randomNum) !== -1) {
      randomNum = parseInt(10 * Math.random()).toString()
    }
    res += randomNum
  }
  return res
}

function main(guessNumStr ,randomNumStr) {
  if (arguments[1] == undefined) {
    randomNumStr = randomGen()
  }
  let A = 0
  let B = 0
  //这里我想用一个forEach语句，但是这个地方不能像python那样有一个枚举的对象
  for (let i = 0; i < guessNumStr.length; i++) {
    if (guessNumStr[i] === randomNumStr[i]) {
      A++;B++
    } else if (randomNumStr.indexOf(guessNumStr[i]) != -1) {
      B++
    }
  }
  return `${A}A${B}B`
}
module.exports = {
  main: main,
  randomGen: randomGen
}
var a = randomGen()

var b = main('1234')
console.log('hello')