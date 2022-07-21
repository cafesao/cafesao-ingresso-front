import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IDataFilms } from '../../interface/data'

export default function SlideFilms({ data }: any) {
  const [max, setMax] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setMax(data.length)
  }, [data])
  return (
    <div className="flex flex-row justify-center mt-12">
      <div className="carousel max-w-4xl cursor-pointer">
        {data.map((film: IDataFilms) => (
          <div
            key={`slide${film.id}`}
            id={`slide${film.id}`}
            className="carousel-item relative w-full"
          >
            <img
              src={film.image}
              className="w-full"
              onClick={() => navigate(`/film`, { state: { id: film.id } })}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${film.id - 1}`}
                className="btn btn-circle btn-xs lg:btn-lg"
              >
                {'<'}
              </a>
              <a
                href={`#slide${film.id === max ? data[0].id : film.id + 1}`}
                className="btn btn-circle btn-xs lg:btn-lg"
              >
                {'>'}
              </a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 text-center">
              <h5
                className="btn btn-xs glass text-xs text-white lg:btn-md lg:text-2xl"
                onClick={() =>
                  navigate('/film', {
                    state: {
                      id: film.id,
                    },
                  })
                }
              >
                {film.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
