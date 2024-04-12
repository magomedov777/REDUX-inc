import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AppWithRedux } from '../AppWithRedux'
import { Provider } from 'react-redux'
import { store } from '../state/store'
import React from 'react'
import { ReduxStoreProviderDecorator } from '../state/StoreProviderDecorator'

const meta: Meta<typeof AppWithRedux> = {
  title: 'TODOLISTS/AppWithRedux',
  component: AppWithRedux,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],
}

export default meta
type Story = StoryObj<typeof AppWithRedux>

export const AppWithReduxStory: Story = {
  render: () => <AppWithRedux />,
}
