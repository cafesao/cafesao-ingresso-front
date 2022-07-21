import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'

import { IChair } from '../interface/data'
import Menu from '../components/Menu/Menu'
import api from '../services/api'
import Chair from '../components/Chair/Chair'
import Box from '../components/Box/Box'
import { useEffect } from 'react'
import { IState } from '../interface/state'

export default function choiceChair() {
  const navigate = useNavigate()
  const location = useLocation()
  const [disableButton, setDisableButton] = useState(true)
  const [selectedChair, setSelectedChair] = useState([])
  const { id, day, hour } = location.state as IState
  const { data, error } = useSWR<IChair[], Error>(
    [`/chairs?id=${id}&day=${day}&hour=${hour}`, 'get'],
    api,
    {
      revalidateOnFocus: true,
      refreshWhenHidden: true,
      refreshInterval: 120000, //2 minutes
      dedupingInterval: 0,
    },
  )

  useEffect(() => {
    if (selectedChair.length > 0) setDisableButton(false)
    else setDisableButton(true)
  }, [selectedChair])

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {data === undefined ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-8 gap-4 justify-items-center scale-75 lg:scale-100 lg:mx-auto lg:mt-14">
            {data?.map((chair, index) => (
              <Chair
                seat={chair.seat}
                chosen={chair.chosen}
                special={chair.special}
                handleSelectedChair={setSelectedChair}
                selectedChair={selectedChair}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center space-x-2 mt-12 lg:flex-row lg:space-x-10 lg:mt-24">
            <div className="flex flex-row justify-center items-center space-x-2">
              <Box color="hsl(var(--su))" />
              <p>Disponivel</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <Box color="hsl(var(--p))" />
              <p className="">Ocupado</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <Box color="hsl(var(--in))" />
              <p className="">Cadeirante</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <Box color="hsl(var(--s))" />
              <p className="">Selecionado</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-4 mt-12">
            <button
              className="btn btn-lg btn-success max-w-xs"
              disabled={disableButton}
              onClick={() =>
                navigate('/review', {
                  state: {
                    id,
                    day,
                    hour,
                    selectedChair,
                  },
                })
              }
            >
              Proxima etapa
            </button>
          </div>
        </>
      )}
    </div>
  )
}
