import { useNavigate, useLocation } from 'react-router-dom'
import { IDataFilmsChoiceDaysHours } from '../../interface/data'
import { IState } from '../../interface/state'

export default function DaysAndHours(props: {
  daysHours: IDataFilmsChoiceDaysHours
  checked: boolean
}) {
  const location = useLocation()
  const { id } = location.state as IState
  const navigate = useNavigate()
  return (
    <div className="collapse">
      <input type="checkbox" defaultChecked={props.checked} />
      <div className="collapse-title text-xl font-medium mx-4 text-orange-400">
        <h2>{props.daysHours.day}</h2>
      </div>
      <div className="collapse-content ">
        <div className="btn-group btn-group-vertical items-center">
          {props.daysHours.hours?.map((hour, index) => (
            <button
              key={index}
              className="btn btn-lg btn-wide"
              onClick={() => {
                navigate('/choice-chair', {
                  state: {
                    id,
                    day: props.daysHours.day,
                    hour,
                  },
                })
              }}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
