var katzDeliLine= [];


function takeANumber(katzDeli, name) {
  for (var a = 0;a <= katzDeli.length  ; a++) {
    katzDeliLine.push(katzDeliLine[a])
  }
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`;
}