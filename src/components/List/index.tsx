import React from 'react';
import { ListStyled, ListContainer } from './style';

interface Person {
  name: string;
}

interface Props {
  persons: Person[];
  headerText: string;
}

export const List = ({ persons, headerText }: Props) => {
  return (
    <ListContainer>
      <h1> {headerText} </h1>
      <ListStyled>
        {persons.map((person: Person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ListStyled>
    </ListContainer>
  );
};
