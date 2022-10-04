const RED = "#FF4E36"
const ORANGE = "#E8A131"
const YELLOW = "#FFF942"
const GREEN = "#03F038"
const BLUE = "#36F4FF"
const DEFAULT = "#EEEEEE"

export const getAverage = raw_text => {
  const nums = raw_text.split("\n")
  const filteredNums = []
  for (let num of nums) {
    if (num.length > 0 && !isNaN(num) && !num.startsWith("0x")) {
      filteredNums.push(Number(num))
    } else {
      let mult = num.split("x")
      if (mult.length == 2) {
        if (mult[0].length > 0 && !isNaN(mult[0]) && mult[1].length > 0 && !isNaN(mult[1])) {
          for (let i = 0; i < Number(mult[1]); i++) {
            filteredNums.push(Number(mult[0]))
          }
        }
      }
    }
  }
  if (filteredNums.length == 0) {
    return -1
  }
  return filteredNums.reduce((a,b) => (a + b)) / filteredNums.length
}

export const getLetter = i => {
  if (i == "") {
    return ""
  }
  if (i >= 3.26) {
    return "A"
  }
  if (i >= 2.51) {
    return "B"
  }
  if (i >= 1.76) {
    return "C"
  }
  if (i >= 1.01) {
    return "D"
  }
  if (i >= 0) {
    return "F"
  }
  return ""
}

export const getColor = i => {
  if (i == "") {
    return DEFAULT
  }
  if (i >= 3.26) {
    return BLUE
  }
  if (i >= 2.51) {
    return GREEN
  }
  if (i >= 1.76) {
    return YELLOW
  }
  if (i >= 1.01) {
    return ORANGE
  }
  if (i >= 0) {
    return RED
  }
  return DEFAULT
}

