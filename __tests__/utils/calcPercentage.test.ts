import { calcPercentage } from '../../src/utils/calcPercentage'

describe("Calc Percentage Test", () => {
  it('Verify if calcPercentage returns right', async () => {
    expect(calcPercentage(100)).toBe(true)
  })
})