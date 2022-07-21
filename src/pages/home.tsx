import SlideFilms from '../components/SlideFilms/SlideFilms'
import Menu from '../components/Menu/Menu'
import useSWR from 'swr'

import api from '../services/api'
import { IDataFilms } from '../interface/data'

export default function index() {
  const { data, error } = useSWR<IDataFilms, Error>(['/films', 'get'], api, {
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    dedupingInterval: 0,
  })

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {data === undefined ? <p>Loading...</p> : <SlideFilms data={data} />}
    </div>
  )
}
