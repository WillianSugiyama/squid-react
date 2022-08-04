import { ListStyled } from './style';

interface Person {
  name: string;
}

interface Props {
  persons: Person[]
}

export const List = ({ persons }: Props) => {
  return (
    <ListStyled>
      {
        persons.map((person: Person) => {
          return (
            <li key={person.name}>
              {person.name}
            </li>
          )
        })
      }
    </ListStyled>
  )
}