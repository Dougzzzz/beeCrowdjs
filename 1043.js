lines = [6.0, 4.0, 2.0]

const a = parseFloat(lines[0])
const b = parseFloat(lines[1])
const c = parseFloat(lines[2])

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`)
} else {
    console.log(`Area = ${(((a + b) * c)/2).toFixed(1)}`)
}
