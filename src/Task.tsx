import { Delete } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import IconButton from '@mui/material/IconButton/IconButton'
import React, { ChangeEvent, memo, useCallback } from 'react'
import { TaskType } from './TodolistWithRedux'
import { useDispatch } from 'react-redux'
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from './state/tasks-reducer'
import { EditableSpan } from './EditableSpan'

type TaskPropsType = {
  task: TaskType
  todolistId: string
}

export const Task = memo(({ task, todolistId }: TaskPropsType) => {
  const dispatch = useDispatch()
  const onClickHandler = useCallback(
    () => dispatch(removeTaskAC(task.id, todolistId)),
    [dispatch, task.id, todolistId]
  )

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked
      dispatch(changeTaskStatusAC(task.id, newIsDoneValue, todolistId))
    },
    [dispatch, task.id, todolistId]
  )
  const onTitleChangeHandler = useCallback(
    (newValue: string) => {
      dispatch(changeTaskTitleAC(task.id, newValue, todolistId))
    },
    [dispatch, task.id, todolistId]
  )
  return (
    <div className={task.isDone ? 'is-done' : ''}>
      <Checkbox
        checked={task.isDone}
        color="primary"
        onChange={onChangeHandler}
      />

      <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
      <IconButton onClick={onClickHandler}>
        <Delete />
      </IconButton>
    </div>
  )
})
