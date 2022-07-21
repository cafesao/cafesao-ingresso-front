import { useState } from 'react'
import useWindowDimensions from '../../helpers/useWindowDimensions'

export default function Chair(params: {
  seat: string
  chosen: boolean
  special: boolean
  handleSelectedChair: Function
  selectedChair: string[]
}) {
  const MAX_WIDTH = 1024
  const classNameButtonOpen = 'btn btn-circle btn-success'
  const classNameButtonSpecial = 'btn btn-circle btn-info'
  const classNameButtonSelected = 'btn btn-circle btn-secondary'
  const [chair, setChair] = useState('')
  const [chairSelect, setChairSelect] = useState(false)
  const [classButtonOpen, setClassButtonOpen] = useState(classNameButtonOpen)
  const [classButtonSpecial, setClassButtonSpecial] = useState(
    classNameButtonSpecial,
  )
  const { width } = useWindowDimensions() //768
  function handleClickChair() {
    if (chairSelect) {
      setChairSelect(false)
      setChair('')
      params.handleSelectedChair(
        params.selectedChair.filter((value) => value !== params.seat),
      )
      params.special
        ? setClassButtonSpecial(classNameButtonSpecial)
        : setClassButtonOpen(classNameButtonOpen)
    } else {
      setChairSelect(true)
      setChair(params.seat)
      params.handleSelectedChair([...params.selectedChair, params.seat])
      params.special
        ? setClassButtonSpecial(classNameButtonSelected)
        : setClassButtonOpen(classNameButtonSelected)
    }
  }

  function handleMouseChair(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    if (event.type === 'mouseenter') {
      setChair(params.seat)
    } else if (event.type === 'mouseout') {
      if (!chairSelect) {
        setChair('')
      }
    }
  }
  return params.chosen ? (
    <button className="btn btn-circle btn-primary cursor-not-allowed">
      {params.seat}
    </button>
  ) : params.special ? (
    <button
      className={classButtonSpecial}
      onMouseEnter={(event) => handleMouseChair(event)}
      onMouseOut={(event) => handleMouseChair(event)}
      onClick={() => handleClickChair()}
    >
      {width < MAX_WIDTH ? params.seat : chair}
    </button>
  ) : (
    <button
      className={classButtonOpen}
      onMouseEnter={(event) => handleMouseChair(event)}
      onMouseOut={(event) => handleMouseChair(event)}
      onClick={() => handleClickChair()}
    >
      {width < MAX_WIDTH ? params.seat : chair}
    </button>
  )
}
