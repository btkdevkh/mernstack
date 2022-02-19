import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import { getGoals, reset } from '../features/goals/goalSlice'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import GoalItem from '../components/GoalItem'

export default function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if(isError) console.log(isError)

    if(!user) navigate('/login')

    dispatch(getGoals())

    return () => dispatch(reset())

  }, [user, isError, message, dispatch, navigate])

  if(isLoading) return <Spinner />

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className='content'>
        { goals.length > 0 ? (
          <div className='goals'>
            { goals.map(goal => (
              <GoalItem key={goal._id} goal={goal} />
            )) }
          </div>
        ) : (<h3>There're no goals set</h3>) }
      </section>
    </>
  )
}
