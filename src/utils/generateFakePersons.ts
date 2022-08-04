import {faker} from '@faker-js/faker'
import { Person } from '../interfaces/person'

export const generateFake = () => {
  let person: Person[] = []

  for(let i = 0; i < 69; i++) {
    const personGenerated: Person = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      isActive: true,
      isQuitter: false,
    }

    person.push(personGenerated)
  }

  return person
}