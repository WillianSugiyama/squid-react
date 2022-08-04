import React, { useState } from 'react'
import { Container } from "./style"
import { List } from '../../components/List'

import { generateFake } from '../../utils/generateFakePersons';

const listFake = generateFake();

export const GamePage = () => {
  const [round, setRound] = useState(1)

  return (
    <Container>
      <List persons={listFake} />
      <div>
        <h1> Round: {round} </h1>
      </div>
    </Container>
  )
}