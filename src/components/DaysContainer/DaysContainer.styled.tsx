import styled, { css } from "styled-components"
import { ashWhite, darkGray, white } from "styles/colors"
import { regular } from "styles/fonts"
import { radius, x1, x2 } from "styles/sizes"
import { border } from "styles/styles"

interface DaysGrid {
  day: number
}

interface DaysButton {
  active: boolean
}

export const DaysGrid = styled.div<DaysGrid>`
  height: 350px;
  display: grid;
  background: transparent;
  grid-template-columns: repeat(7, 1fr);
  font-size: ${regular};
  > * {
    &:nth-child(8) {
      grid-column-start: ${(props) => props.day};
    }
  }
`
export const DayButton = styled.button<DaysButton>`
  background: transparent;
  border: ${(props) => (props.active ? border : "transparent")};
  color: ${white};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  padding: ${x1} ${x2};
  margin: ${x1} ${x2};
  border-radius: ${radius};
  font-size: ${regular};
  height: 38px;
  width: 38px;
  &:focus {
    outline: 0;
  }
  ${(props) =>
    props.active &&
    css`
      &:hover {
        cursor: pointer;
        background: ${ashWhite};
        color: ${darkGray};
      }
    `};
`
