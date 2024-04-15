import HeroImg from './Hero_Image';
import imageFile from './img/cat_hero.jpg';

export default {
  title: 'HeroImg',
  component: HeroImg,
  tags: ['autodocs'],
} 

export const Default = {
    args: {
        src: imageFile,
        alt: 'This is the default hero-Image',
        disabled: false,
        backgroundColor: '#ffffff',
    }
};

export const Disabled = {
    args :{
        src: imageFile,
        alt: 'This is the Disabled Hero-Image',
        disabled: true,
        backgroundColor: '#ccc',
    }
};
