import axios from 'axios'

const API_URL = '/api/goals/'

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const res = await axios.post(API_URL, goalData, config)

  return res.data
}

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const res = await axios.get(API_URL, config)

  return res.data
}

const deleteGoal = async (_id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const res = await axios.delete(API_URL + _id, config)

  return res.data
}


const goalService = {
  createGoal,
  getGoals,
  deleteGoal
}

export default goalService
