import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'

import { IDataFilmsChoice } from '../interface/data'
import { IStateChair } from '../interface/state'
import Menu from '../components/Menu/Menu'
import api from '../services/api'

export default function review() {
  const navigate = useNavigate()
  const location = useLocation()
  const { id, day, hour, selectedChair } = location.state as IStateChair

  const { data, error } = useSWR<IDataFilmsChoice, Error>(
    [`/films?id=${id}`, 'get'],
    api,
    {
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
      dedupingInterval: 0,
    },
  )
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {data === undefined ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="flex flex-col gap-4 mt-12 lg:mx-64 ">
            <div className="flex flex-col lg:flex-row gap-4">
              <img
                className="max-w-2xl max-h-52 rounded-lg shadow-2xl grow-0 lg:max-w-md"
                src={data.image}
              ></img>
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-center font-bold">{data.name}</h1>
                <p className="text-2xl text-center font-bold">Day</p>
                <p className="text-center">{day}</p>
                <p className="text-2xl text-center font-bold">Hour</p>
                <p className="text-center">{hour}</p>
                <h2 className="text-2xl text-center font-bold">
                  Chair Selected
                </h2>
                <div className="justify-center text-center items-center">
                  {selectedChair.map((value, index) => (
                    <button
                      key={index}
                      className="btn btn-circle cursor-default"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 justify-center text-center items-center">
            <button
              className="btn btn-md btn-warning mt-12"
              onClick={() => {
                navigate(-1)
              }}
            >
              Hmm...quero voltar.
            </button>
            <button
              className="btn btn-md btn-success mt-12"
              onClick={() => {
                navigate('/payment')
              }}
            >
              Tudo certo!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
