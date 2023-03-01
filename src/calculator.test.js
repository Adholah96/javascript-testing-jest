const Calculator = require('./calculator')

const caseStudy1 = new Calculator(8, 2)
const caseStudy2 = new Calculator(15, 5)

describe('calculator functions', () => {
  test('add', () => {
    expect(caseStudy1.add()).toBe(10)
    expect(caseStudy2.add()).toBe(20)
  })
  test('sub', () => {
    expect(caseStudy1.subtract()).toBe(6)
    expect(caseStudy2.subtract()).toBe(10)
  })
  test('product', () => {
    expect(caseStudy1.product()).toBe(16)
    expect(caseStudy2.product()).toBe(75)
  })
  test('divide', () => {
    expect(caseStudy1.div()).toBe(4)
    expect(caseStudy2.div()).toBe(3)
  })
})
