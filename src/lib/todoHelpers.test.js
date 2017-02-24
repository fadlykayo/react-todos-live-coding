import { addTodo } from './todoHelpers.js'

test('addTodo should add new todo to the list', () => {
  const startTodo = [
    {id: 1, text: 'one', isCompleted: true},
    {id: 2, text: 'two', isCompleted: false}
  ]

  const newTodo = {id: 3, text: 'three', isCompleted: false}

  const expected = [
    {id: 1, text: 'one', isCompleted: true},
    {id: 2, text: 'two', isCompleted: false},
    {id: 3, text: 'three', isCompleted: false}
  ]

  const result = addTodo(startTodo, newTodo)

  expect(result).toEqual(expected)
})
