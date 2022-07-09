// This function takes a positive integer as parameter and returns its roman numeral equivalent.

function solution(number){
    let roman = ""
    const map = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
      L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
  
    for (let key in map) {
      let reps = Math.floor(Number(number) / map[key])
      roman += key.repeat(reps)
      number %= map[key]
    }
    
    return roman
}

solution(1)  // 'I'
solution(2)  // 'II'
solution(3)  // 'III'
solution(4)  // 'IV'
solution(5)  // 'V'
solution(9)  // 'IX'
solution(10)  // 'X'
solution(11)  // 'XI'
solution(19)  // 'XIX'
solution(22)  // 'XXII'
solution(15)  // 'XV'

solution(1000)  // 'M'
solution(1001)  // 'MI'
solution(1990)  // 'MCMXC'
solution(2007)  // 'MMVII'
solution(2008)  // 'MMVIII'