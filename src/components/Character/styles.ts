import styled from "styled-components";

export const Char = styled.div`

`
export const Container =  styled.div<{ size: number, left: number, top: number, sidePos: number}>`
    position: absolute;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
`

export const Name = styled.div`

`