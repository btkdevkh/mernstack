import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

export default function Header() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <header className='header'>
      <div className="logo">
        <Link to={`${user ? '/' : '/login'}`}>Goal</Link>
      </div>

      <ul>
        { user ? (
          <>
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={'/login'}>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to={'/register'}>
                <FaUser /> Register
              </Link>
            </li>
          </>
        ) }
      </ul>
    </header>
  )
}
