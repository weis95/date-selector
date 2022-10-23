import styled, { css } from "styled-components"
import { ashWhite, darkGray, white } from "styles/colors"
import { regular } from "styles/fonts"
import { radius, x1, x2 } from "styles/sizes"
import { border } from "styles/styles"

interface Props {
  width?: string
}

export const ButtonStyled = styled.input<Props>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  background: transparent;
  border: ${border};
  color: ${white};
  padding: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${regular};
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    background: ${ashWhite};
    color: ${darkGray};
  }
`
