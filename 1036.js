lines = [10.3, 203.0, 5.0]

const a = parseFloat(lines[0])
const b = parseFloat(lines[1])
const c = parseFloat(lines[2])

delta = Math.pow(b,2) - (4 * a * c)

if (delta <= 0 || a === 0) {
    console.log("Impossivel calcular")
} else {
    const r1 = (-b + Math.sqrt(delta))/ (2 * a)
    const r2 = (-(b) - Math.sqrt(delta))/ (2 * a)
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}