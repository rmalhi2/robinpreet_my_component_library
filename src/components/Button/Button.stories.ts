import Button from './Button';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import { Meta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    onHover: { action: 'hovered' }, // Optional: Log hover event if needed
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

export const Default = {
  args: {
    label: 'Button',
    backgroundColor: '#007bff',
    onClick: action('Default Button clicked'),
    disabled: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });
    await userEvent.click(button);
    await userEvent.hover(button);
    action('Button hovered')(); 
    await new Promise((resolve) => setTimeout(resolve, 500)); // Pause to show hover state
    await userEvent.unhover(button);
  }
};

export const Disabled = {
  args: {
    label: 'Button',
    backgroundColor: '#ccc',
    onClick: action('Disabled Button clicked'),
    disabled: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });
    await userEvent.click(button);
    await userEvent.hover(button);  // Will not have an effect since button is disabled
    await userEvent.unhover(button);
  }
};
