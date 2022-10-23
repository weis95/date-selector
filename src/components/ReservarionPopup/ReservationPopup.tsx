import InputField from "components/InputField/InputField"
import InputFileField from "components/InputFileField/InputFileField"
import Textarea from "components/Textarea/Textarea"
import { monthNames } from "helpers/datehelpers"
import React from "react"

import { ReservationPopupStyled } from "./ReservationPopup.styled"
interface Props {
  day: number
  month: number
  year: number
}

const ReservationPopup = ({ day, month, year }: Props) => (
  <ReservationPopupStyled>
    {day + ". " + monthNames[month - 1] + ", " + year}
    <InputField type="email" label="Email" />
    <InputField type="phone" label="Phone" />
    <Textarea label="Comment" rows={6} />
    <InputFileField type="file" label="Attachments" />
  </ReservationPopupStyled>
)

export default ReservationPopup
