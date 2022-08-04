import { Container } from './style'
import { Button } from '../../components/Button'
import { useNavigate } from "react-router-dom";

const handleButton = (navigate: any) => {
  const audio = new Audio()
  audio.src = '/public_main-theme.mp3'
  audio.play()

  setTimeout(() => {
    audio.pause()
    audio.currentTime = 0;
    navigate('/game')
  }, 3000)
}


export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src='/squid-game-image.jpg' alt='JOGO DA LULA'/>
      <h1> Jogo da Lula </h1>
      <Button trigger={() => handleButton(navigate)}>
        Começar
      </Button>
    </Container>
  );
};