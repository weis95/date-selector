import { Box } from "components/Shared/Box.styled"
import { Label } from "components/Shared/Label.styled"
import React from "react"

import { InputFileFieldStyled } from "./InputFileField.styled"

interface Props {
  type: string
  label?: string
}
const InputFileField = ({ type, label }: Props) => {
  return (
    <Box direction="column">
      {label && <Label style={{ textAlign: "left" }}>{`${label}:`}</Label>}
      <InputFileFieldStyled type={type} multiple />
    </Box>
  )
}

export default InputFileField
