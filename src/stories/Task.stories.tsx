import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Task } from '../Task'
import React, { useState } from 'react'
import { store } from '../state/store'
import { Provider } from 'react-redux'

const meta: Meta<typeof Task> = {
  title: 'TODOLISTS/Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    //@ts-ignore
    changeTaskStatus: {
      description: 'Change task status',
      action: 'clicked',
    },
    changeTaskTitle: {
      description: 'Change task title',
      action: 'clicked',
    },
    removeTask: {
      description: 'Remove task',
      action: 'clicked',
    },
  },
  args: {
    todolistId: '1234567',
  },
}

export default meta
type Story = StoryObj<typeof Task>

export const TaskIsDoneStory: Story = {
  args: {
    task: { id: '1234566789', isDone: true, title: 'new' },
  },
}

export const TaskNotDoneStory: Story = {
  args: {
    task: { id: '12345sdc66789', isDone: false, title: 'qwe' },
  },
}

const TaskToggle = () => {
  const [task, setTask] = useState({ id: '12345sdc66789', isDone: false, title: 'qwe' })
  const changeTaskStatus = () => {
    setTask({ ...task, isDone: !task.isDone })
  }
  const changeTaskTitle = (taskId: string, title: string) => {
    setTask({ ...task, title })
  }
  return (
    <Task
      task={task}
      todolistId={'122342342234'}
      //@ts-ignore
      changeTaskStatus={changeTaskStatus}
      changeTaskTitle={changeTaskTitle}
      removeTask={action('Task removed')}
    />
  )
}

export const TaskToggleStory: Story = {
  render: () => (
    <Provider store={store}>
      <TaskToggle />
    </Provider>
  ),
}
