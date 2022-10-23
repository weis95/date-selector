import React from "react"

import { ButtonStyled } from "./Button.styled"

interface Props {
  text: string
  onClick: () => void
  width?: string
}

const Button = ({ text, onClick, width }: Props) => (
  <ButtonStyled width={width} type="button" onClick={onClick} value={text} />
)

export default Button
