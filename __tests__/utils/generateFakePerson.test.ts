import { generateFake } from '../../src/utils/generateFakePersons'

describe("Generate Fake Person Test", () => {
  it('Verify if persons generateds are equal 69 persons', async () => {
    const generated = generateFake()

    expect(generated.length).toBe(69)
  })

  it('Verify if persons dont have isActive = False', async () => {
    const generated = generateFake()

    const generatedFiltered = generated.filter((generatedPerson) => generatedPerson.isActive)

    expect(generatedFiltered.length).toBe(69)
  })

  it('Verify if persons dont have isQuitter = True', async () => {
    const generated = generateFake()

    const generatedFiltered = generated.filter((generatedPerson) => !generatedPerson.isQuitter)

    expect(generatedFiltered.length).toBe(69)
  })
})