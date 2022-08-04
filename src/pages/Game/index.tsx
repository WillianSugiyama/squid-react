import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GameContainer, GameEndContainer } from './style';
import { List } from '../../components/List';
import { Button } from '../../components/Button';

import NumberFormat from 'react-number-format';
import { generateFake } from '../../utils/generateFakePersons';
import { calcPercentage } from '../../utils/calcPercentage';
import { Person } from '../../interfaces/person';

const listFake = generateFake();

export const GamePage = () => {
  const history = useNavigate();
  const [round, setRound] = useState(1);
  const [budget, setBudget] = useState(0.0);
  const [endGameCount, setEndGameCount] = useState(0);
  const [persons, setPersons] = useState<Person[]>(listFake);
  const [deadPersons, setDeadPersons] = useState<Person[]>([]);
  const [gameVisibility, setGameVisibility] = useState(true);

  const startGame = () => {
    const audio = new Audio();
    audio.src = '/public_red-light-sound.mp3';
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;

      const calculedPerson: Person[] = persons.map((person: Person) => {
        return {
          name: person.name,
          isActive: calcPercentage(42),
          isQuitter: calcPercentage(30),
        };
      });

      const exitedPersons = [
        ...deadPersons,
        ...calculedPerson.filter((person: Person) => !person.isActive),
      ];
      const personsRemaining = calculedPerson.filter((person: Person) => person.isActive);
      const valueRemaining = exitedPersons.length * 420000;
      const endGameVotes = personsRemaining.filter((person) => person.isQuitter).length;

      personsRemaining.length <= 1 ? setGameVisibility(false) : setGameVisibility(true);
      endGameVotes >= personsRemaining.length / 2
        ? setGameVisibility(false)
        : setGameVisibility(true);

      setPersons(personsRemaining);
      setDeadPersons(exitedPersons);
      setRound(round + 1);
      setBudget(valueRemaining);
      setEndGameCount(endGameVotes);
    }, 8000);
  };

  const endGame = (navigate: any) => {
    navigate('/');
  };

  return (
    <Container>
      <List headerText='Jogadores Remanescentes: ' persons={persons} />
      <GameContainer display={gameVisibility}>
        <h1> Round: {round} </h1>
        <h2>
          {' '}
          Fundo do premio:{' '}
          <NumberFormat value={budget} prefix={'$'} thousandSeparator={true} displayType={'text'} />
        </h2>
        <img src='/red-man.gif' alt='Homem Lula' />
        <h2> Votos para o fim do jogo: {endGameCount}</h2>
        <Button
          trigger={() => {
            startGame();
          }}
        >
          {' '}
          Iniciar Rodada{' '}
        </Button>
      </GameContainer>
      <GameContainer display={!gameVisibility}>
        <GameEndContainer>
          <p> Total de Jogadores Remanescentes: {persons.length} </p>
          <p> Total de Jogadores Eliminados: {deadPersons.length} </p>
          <p> Votos para o fim do jogo: {endGameCount} </p>
          <p>
            {' '}
            Premio por jogador Remanescente:{' '}
            <NumberFormat
              value={budget / persons.length}
              prefix={'$'}
              thousandSeparator={true}
              displayType={'text'}
            />{' '}
          </p>
        </GameEndContainer>
        <img src='/red-man.gif' alt='Homem Lula' />
        <Button
          trigger={() => {
            endGame(history);
          }}
        >
          {' '}
          Finalizar{' '}
        </Button>
      </GameContainer>
      <List headerText='Jogadores Eliminados:' persons={deadPersons} />
    </Container>
  );
};
