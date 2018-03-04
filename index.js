var katzDeliLine= [];


function takeANumber(katzDeli, name) {
  for (var i = 0, a = katzDeli.length ;i < a  ; a++) {
    katzDeliLine.push(katzDeliLine[i])
  }
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`;
}