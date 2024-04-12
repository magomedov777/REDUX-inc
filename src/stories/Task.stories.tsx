import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Task } from '../Task'
import { ReduxStoreProviderDecorator } from '../state/StoreProviderDecorator'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../state/store'
import { TaskType } from '../TodolistWithRedux'
import { v1 } from 'uuid'

const meta: Meta<typeof Task> = {
  title: 'TODOLISTS/Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [ReduxStoreProviderDecorator],
}

export default meta
type Story = StoryObj<typeof Task>

const NewTask = () => {
  let task = useSelector<AppRootStateType, TaskType>((state) => state.tasks['todolistId1'][0])
  if (!task) task = { id: v1(), title: 'Default task', isDone: true }
  return <Task task={task} todolistId={'todolistId1'} />
}

export const TaskStory: Story = {
  render: () => <NewTask />,
}
