import { useEffect } from 'react'
import { Container, Map } from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'


export default function App() {
  const character = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  function handleKeyDown(e: KeyboardEvent) {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        character.moveLeft();
      break;

      case 'KeyD':
      case 'ArrowRight':
        character.moveRight();
      break;

      case 'KeyW':
      case 'ArrowUp':
        character.moveUp();
      break;

      case 'KeyS':
      case 'ArrowDown':
        character.moveDown();
      break;
    }
  }

  return (
    <Container>
      <Map>
        {console.log(character.x, character.y)}
        <Character x={character.x} y={character.y} side={character.side} name={character.name}/>
      </Map>
        <input type="text" placeholder="nome do seu personagem" onChange={(e) => {character.setCharName(e.target.value)}}></input>
     </Container>
  )
}