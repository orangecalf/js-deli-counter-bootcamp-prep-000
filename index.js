var katzDeliLine = [];



function takeANumber(katzDeli, name) {
  katzDeliLine.push(katzDeli)
  katzDeliLine.push(name)
  var n = katzDeliLine.length - 1
  return `Welcome, ${name}. You are number ${n} in line.`;
}