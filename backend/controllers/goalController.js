const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req, res) => {
  console.log(req.body);
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text
  })

  res.status(200).json(goal)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req, res) => {
  const goalToUpdate = await Goal.findById(req.params.id)

  if(!goalToUpdate) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async(req, res) => {
  const goalToDelete = await Goal.findById(req.params.id)

  if(!goalToDelete) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goalToDelete.remove()

  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
