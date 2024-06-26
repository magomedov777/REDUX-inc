/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { TaskType, Todolist } from './Todolist'
import { v1 } from 'uuid'
import { AddItemForm } from './AddItemForm'
import AppBar from '@mui/material/AppBar/AppBar'
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu } from '@mui/icons-material'

import { addTodolistAC } from './state/todolists-reducer'
import { AppRootStateType } from './state/store'
import { TodolistWithRedux } from './TodolistWithRedux'

export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const AppWithRedux = () => {
  let todolists = useSelector<AppRootStateType, Array<TodolistType>>(
    (state) => state.todolists
  )

  const dispatch = useDispatch()

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistAC(title))
    },
    [dispatch]
  )

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: '20px' }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {todolists.map((tl) => {
            return (
              <Grid key={tl.id} item>
                <Paper style={{ padding: '10px' }}>
                  <TodolistWithRedux
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                  />
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
