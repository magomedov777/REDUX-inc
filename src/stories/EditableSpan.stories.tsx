import type { Meta, StoryObj } from '@storybook/react'
import { EditableSpan } from '../EditableSpan'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import React from 'react'

const meta: Meta<typeof EditableSpan> = {
  title: 'TODOLISTS/EditableSpan',
  component: EditableSpan,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'value changed',
      action: 'clicked',
    },
  },
}

export default meta
type Story = StoryObj<typeof EditableSpan>

export const EditableSpanStory: Story = {
  args: {
    value: 'html',
  },
  render: () => (
    <Provider store={store}>
      <EditableSpan
        value={''}
        onChange={function (newValue: string): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Provider>
  ),
}
