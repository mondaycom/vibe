import { create } from '@storybook/theming/create';
import logo from './logo.png';

export default create({
  base: 'light',
  brandImage: logo,
  brandUrl: 'https://mondaycom.github.io/vibe-storybook-components',
  barSelectedColor: '#5034ff',
  brandTitle: 'Vibe Storybook Components',
  background: {
    hoverable: 'rgba(80, 52, 255, 0.1)',
  },
  hoverable: 'rgba(80, 52, 255, 0.1)',
});
