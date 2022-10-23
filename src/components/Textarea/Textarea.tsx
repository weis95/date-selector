import { Box } from "components/Shared/Box.styled"
import { Label } from "components/Shared/Label.styled"
import React from "react"

import { TextareaStyled } from "./Textarea.styled"

interface Props {
  label?: string
  rows?: number
}
const Textarea = ({ rows, label }: Props) => {
  return (
    <Box direction="column">
      {label && <Label style={{ textAlign: "left" }}>{`${label}:`}</Label>}
      <TextareaStyled rows={rows} />
    </Box>
  )
}

export default Textarea
