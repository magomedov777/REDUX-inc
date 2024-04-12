import type { Meta, StoryObj } from '@storybook/react'
import { EditableSpan } from '../EditableSpan'

import React from 'react'
import { ReduxStoreProviderDecorator } from '../state/StoreProviderDecorator'

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
  decorators: [ReduxStoreProviderDecorator],
}

export default meta
type Story = StoryObj<typeof EditableSpan>

export const EditableSpanStory: Story = {
  args: {
    value: 'html',
  },
}
