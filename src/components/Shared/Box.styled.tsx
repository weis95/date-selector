import styled, { css } from "styled-components"

interface Props {
  direction: string
  justify?: string
  padding?: string
}

export const Box = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
`
