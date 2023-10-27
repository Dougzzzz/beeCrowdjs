lines = ["JOAO",
    500.00,
    1230.30]

const name = lines[0]
const salary = parseFloat(lines[1])
const sales = parseFloat(lines[2])
const commissionSales = 0.15
let totalSalary = salary + (sales * commissionSales)
totalSalary = totalSalary.toFixed(2)
console.log(`TOTAL = R$ ${totalSalary}`)
