import { Box } from "components/Shared/Box.styled"
import { Label } from "components/Shared/Label.styled"
import React from "react"

import { InputFieldStyled } from "./InputField.styled"

interface Props {
  type: string
  label?: string
}
const InputField = ({ type, label }: Props) => {
  return (
    <Box direction="column">
      {label && <Label style={{ textAlign: "left" }}>{`${label}:`}</Label>}
      <InputFieldStyled type={type} />
    </Box>
  )
}

export default InputField
