/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-duplicate-case */
import { v1 } from 'uuid'
import { TasksStateType } from '../App'
import {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from './todolists-reducer'

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>

type ActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | ChangeTaskTitleActionType
  | AddTodolistActionType
  | RemoveTodolistActionType

const initialState: TasksStateType = {}

export const tasksReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      const { payload } = action
      const { taskId, todolistId } = payload
      return {
        ...state,
        [todolistId]: state[todolistId].filter((el) => el.id !== taskId),
      }
    }
    case 'ADD-TASK':
      const { payload } = action
      const { title, todolistId } = payload
      return {
        ...state,
        [todolistId]: [
          { id: v1(), title, isDone: false },
          ...state[todolistId],
        ],
      }
    case 'CHANGE-TASK-STATUS': {
      const { payload } = action
      const { taskId, isDone, todolistId } = payload
      return {
        ...state,
        [todolistId]: state[todolistId].map((el) =>
          el.id === taskId ? { ...el, isDone } : el
        ),
      }
    }
    case 'CHANGE-TASK-TITLE': {
      const { payload } = action
      const { taskId, title, todolistId } = payload
      return {
        ...state,
        [todolistId]: state[todolistId].map((el) =>
          el.id === taskId ? { ...el, title } : el
        ),
      }
    }

    case 'ADD-TODOLIST': {
      return {
        ...state,
        [action.todolistId]: [],
      }
    }

    case 'REMOVE-TODOLIST': {
      // const copyState = { ...state }
      // delete copyState[action.id]
      // return copyState
      const {
        [action.id]: [],
        ...rest
      } = state
      return rest
    }

    default:
      return state
  }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
  return { type: 'REMOVE-TASK', payload: { taskId, todolistId } } as const
}
export const addTaskAC = (title: string, todolistId: string) => {
  return { type: 'ADD-TASK', payload: { title, todolistId } } as const
}
export const changeTaskStatusAC = (
  taskId: string,
  isDone: boolean,
  todolistId: string
) => {
  return {
    type: 'CHANGE-TASK-STATUS',
    payload: { taskId, isDone, todolistId },
  } as const
}

export const changeTaskTitleAC = (
  taskId: string,
  title: string,
  todolistId: string
) => {
  return {
    type: 'CHANGE-TASK-TITLE',
    payload: { taskId, title, todolistId },
  } as const
}
