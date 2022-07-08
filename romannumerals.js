// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.


function solution(number) {

}

solution(1), 'I', '1 should, "I"'
solution(2), 'II', '2 should, "II"'
solution(3), 'III', '3 should, "III"'
solution(4), 'IV', '4 should, "IV"'
solution(5), 'V', '5 should, "V"'
solution(9), 'IX', '9 should, "IX"'
solution(10), 'X', '10 should, "X"'
solution(11), 'XI'
solution(19), 'XIX'
solution(22), 'XXII'
solution(15), 'XV'

solution(1000) // 'M', '1000 should, "M"'
solution(1001)  'MI', '1001 should, "MI"'
solution(1990), 'MCMXC', '1990 should, "MCMXC"'
solution(2007), 'MMVII', '2007 should, "MMVII"'
solution(2008), 'MMVIII', '2008 should, "MMVIII"'
