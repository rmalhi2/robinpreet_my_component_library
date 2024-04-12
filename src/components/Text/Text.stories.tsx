// import { Story, Meta } from '@storybook/react';
// import Text from './Text';
// import { TextProps } from './Text.types';

// export default {
//   title: 'Text',
//   component: Text,
//   argTypes: {
//     content: { control: 'text' },
//     disabled: { control: 'boolean' },
//     heading: { control: 'boolean' },
//     subHeading: { control: 'boolean' },
//     highlighted: { control: 'boolean' },
//   },
// } as Meta;

// const Template: Story<TextProps> = (args) => <Text {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   content: 'This is the Default Text',
// };

// export const Heading = Template.bind({});
// Heading.args = {
//   content: 'Yeahh!! This is a Heading Text',
//   heading: true,
// };

// export const SubHeading = Template.bind({});
// SubHeading.args = {
//   content: 'Why am I a SubHeading Text',
//   subHeading: true,
// };

// export const Highlighted = Template.bind({});
// Highlighted.args = {
//   content: 'Wohooo!! I am Highlighted Text :D',
//   highlighted: true,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   content: 'Oops! I am Disabled Text :(',
//   disabled: true,
// };


import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
} 

export const Default = {
  args: {
    content: 'This is the Default Text',
    disabled: false,
    heading: false,
    subHeading: false,
    highlighted: false,
    backgroundColor: '#ffffff',
  },
};

export const Heading = {
  args: {
    content: 'Yeahh!! This is a Heading Text',
    disabled: false,
    heading: true,
    subHeading: false,
    highlighted: false,
    backgroundColor: '#ffffff',
  },
};

export const SubHeading = {
  args: {
    content: 'Why am I a SubHeading Text',
    disabled: false,
    heading: false,
    subHeading: true,
    highlighted: false,
    backgroundColor: '#ffffff',
  },
};

export const Highlighted = {
  args: {
    content: 'Wohooo!! I am Highlighted Text :D',
    disabled: false,
    heading: false,
    subHeading: false,
    highlighted: true,
    backgroundColor: '#ffffff',
  },
};

export const Disabled = {
  args: {
    content: 'Oops! I am Disabled Text :(',
    disabled: true,
    heading: false,
    subHeading: false,
    highlighted: false,
    backgroundColor: '#ccc',
  },
};
