// import { Story, Meta } from '@storybook/react';
// import Img from './Img';
// import { ImgProps } from './Img.types';
// import imageFile from './images/cat.jpg';

// export default {
//   title: 'Img',
//   component: Img,
//   argTypes: {
//     src: { control: 'text' }, // Control for modifying image source
//     alt: { control: 'text' }, // Control for modifying image alt text
//     disabled: { control: 'boolean' }, //Control for disabled state
//     Error: { control: 'boolean' }, // Control for toggling error state
//     Circle: { control: 'boolean' }, // Control for toggling circle state
//   },
// } as Meta;

// const Template: Story<ImgProps> = (args) => <Img {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     src: imageFile,
//     alt: 'I have the default(rectanglular) frame',
//     Error: false,
//     Circle: false,
//     disabled: false
// };

// export const ErrorState = Template.bind({});
// ErrorState.args = {
//     src: '',
//     alt: 'Oops! There is an error while loading the image.',
//     Error: true
// };

// export const CircleState = Template.bind({});
// CircleState.args = {
//     src: imageFile,
//     alt: 'I have a round frame',
//     Circle: true
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//     src: imageFile,
//     alt: 'I am disabled :(',
//     disabled: true,
//     Error: false
// };

import Img from './Img';
import imageFile from './images/cat.jpg';

export default {
  component: Img,
  title: 'Img',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    src: imageFile,
    alt: 'I have the default (rectangular) frame',
    disabled: false,
    Error: false,
    Circle: false,
    backgroundColor: '#ffffff',
  },
};

export const ErrorState = {
  args: {
    src: '',
    alt: 'Oops! There is an error while loading the image.',
    Error: true,
    backgroundColor: '#ffffff',
  },
};

export const CircleState = {
  args: {
    src: imageFile,
    alt: 'I have a round frame',
    Circle: true,
    backgroundColor: '#ffffff',
  },
};

export const Disabled = {
  args: {
    src: imageFile,
    alt: 'I am disabled :(',
    disabled: true,
    Error: false,
    backgroundColor: '#ccc',
  },
};


