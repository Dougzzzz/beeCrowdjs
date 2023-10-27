lines = [12.7, 10.4, 15.2]

const a = parseFloat(lines[0])
const b = parseFloat(lines[1])
const c = parseFloat(lines[2])
const pi = 3.14159
const triangle = ((a * c)/2).toFixed(3)
const circle = (pi * Math.pow(c,2)).toFixed(3)
const trapeze = (((a + b) * c)/2).toFixed(3)
const square = (Math.pow(b,2)).toFixed(3)
const retangle = (a * b).toFixed(3)

console.log(`TRIANGULO: ${triangle}`)
console.log(`CIRCULO: ${circle}`)
console.log(`TRAPEZIO: ${trapeze}`)
console.log(`QUADRADO: ${square}`)
console.log(`RETANGULO: ${retangle}`)
