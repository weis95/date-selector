import styled from "styled-components"
import { white } from "styles/colors"
import { regular } from "styles/fonts"
import { radius, x1, x2 } from "styles/sizes"
import { border } from "styles/styles"

export const InputFieldStyled = styled.input`
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
  }
`
