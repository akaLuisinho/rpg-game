import { Container, Name, Char } from "./styles";
import { CharacterSides } from "../../types/CharacterSides"

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string
}

export function Character({ x, y, side, name }: Props) {
    const characterSize = 30

    const sides = { 
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return(
        <Container
            size={characterSize}
            left={x * characterSize}
            top={y * characterSize}
            sidePos={sides[side] ?? 0}>
            <Char
                
            />
            <Name>
                {name}
            </Name>
        </Container>
    )
}