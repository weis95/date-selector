import Button from "components/Buttons/Button"
import ReservationPopup from "components/ReservarionPopup/ReservationPopup"
import { Box } from "components/Shared/Box.styled"
import { monthNames, today, weekAcronyms } from "helpers/datehelpers"
import React, { useEffect, useState } from "react"
interface DayObject {
  day: number
  month: number
  year: number
}

interface DayFields {
  days: DayObject[]
  select: (day: number) => void
}

import { DayButton, DaysGrid } from "./DaysContainer.styled"

const DayFields = ({ days, select }: DayFields) => {
  const date = today
  date.setHours(0, 0, 0, 0)

  return (
    <>
      {days.map((item, i) => (
        <DayButton
          active={
            new Date(item.year, item.month - 1, item.day).valueOf() >=
            date.valueOf()
          }
          onClick={() => select(item.day)}
          key={i}
        >
          <>{item.day}</>
        </DayButton>
      ))}
    </>
  )
}

const DaysContainer = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [next, setNext] = useState<string>("")
  const [previous, setPrevious] = useState<string>("")
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const startMonth = today.getMonth() + 1
  const startYear = today.getFullYear()

  useEffect(() => {
    setMonth(startMonth)
    setYear(startYear)
    setNext(monthNames[startMonth])
    setPrevious(monthNames[startMonth - 1])
  }, [])

  const addMonth = () => {
    if (month !== 12) {
      setMonth(month + 1)
      if (month !== 11) {
        setNext(monthNames[month + 1])
        setPrevious(monthNames[month - 1])
      } else {
        setPrevious(monthNames[month - 1])
        setNext(monthNames[0])
      }
    } else {
      setMonth(1)
      setYear(year + 1)
      setNext(monthNames[1])
      setPrevious(monthNames[month - 1])
    }
  }

  const deducatMonth = () => {
    if (month !== 1) {
      setMonth(month - 1)
      setNext(monthNames[month - 1])
      if (month - 3 < 0) {
        setPrevious(monthNames[11])
      } else {
        setPrevious(monthNames[month - 3])
      }
    } else {
      setMonth(12)
      setYear(year - 1)
      setNext(monthNames[1])
      setPrevious(monthNames[10])
    }
  }

  const resetDate = () => {
    setMonth(startMonth)
    setYear(startYear)
    setNext(monthNames[startMonth])
    setPrevious(monthNames[startMonth - 1])
  }

  const WeekHeader = () => {
    return (
      <>
        {weekAcronyms.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </>
    )
  }

  const showActions =
    new Date(startYear, startMonth).valueOf() !==
    new Date(year, month).valueOf()

  const daysInMonth = new Date(year, month, 0).getDate()

  //One more day since we start sundays
  const firstDayInMonth = new Date(year, month - 1, 1).getDay() + 1

  const result: DayObject[] = []

  for (let day = 1; day <= daysInMonth; day++) {
    result.push({ day, month, year })
  }

  const dayClicked = (day: number) => {
    setShowPopup(true)
    setSelectedDay(day)
  }

  return (
    <div>
      <p>{monthNames[month - 1] + ", " + year}</p>
      <DaysGrid day={firstDayInMonth}>
        <WeekHeader />
        <DayFields select={dayClicked} days={result} />
      </DaysGrid>
      {showPopup && (
        <ReservationPopup day={selectedDay} month={month} year={year} />
      )}
      {!showPopup ? (
        <Box
          justify={showActions ? "space-between" : "end"}
          direction="row"
          padding="20px 0 0 0 "
        >
          {showActions && (
            <Button
              width="120px"
              text={previous}
              onClick={() => deducatMonth()}
            />
          )}
          {showActions && (
            <Button width="100px" text="Current" onClick={() => resetDate()} />
          )}
          <Button width="120px" text={next} onClick={() => addMonth()} />
        </Box>
      ) : (
        <Box justify="space-between" direction="row" padding="20px 0 0 0 ">
          <Button
            width="120px"
            text="Cancel"
            onClick={() => setShowPopup(false)}
          />
          <Button
            width="120px"
            text="Reserve"
            onClick={() => setShowPopup(false)}
          />
        </Box>
      )}
    </div>
  )
}

export default DaysContainer
