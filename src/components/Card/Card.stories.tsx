import Card from './Card';
import imageFile from './image/cat_card.jpg';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    imageSrc: { control: 'text' },
    alt: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color'},
  },
} 

export const Default ={
    args : {
        imageSrc: imageFile,
        alt: 'Cat image',
        description: 'Helllooooo!!  I am a cute little kitten meow!',
        disabled: false,
        backgroundColor: '#ffffff',
    }
};

export const Disabled = {
    args : {
        imageSrc: imageFile,
        alt: 'diabled cat image',
        description: 'Oops! I cant meow cuz u disabled me :((',
        disabled: true,
        backgroundColor: '#ccc',
    }
};


