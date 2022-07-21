import { useNavigate } from 'react-router-dom'

export default function MenuDrawer() {
  const navigate = useNavigate()
  return (
    <ul className="menu menu-vertical justify-center lg:menu-horizontal bg-base-100 rounded-box">
      <li>
        <a onClick={() => navigate('/')}>Filmes</a>
      </li>
      <li>
        <a onClick={() => navigate('/auth/login')}>Login</a>
      </li>
      <li>
        <a onClick={() => navigate('/auth/register')}>Registro</a>
      </li>
    </ul>
  )
}
