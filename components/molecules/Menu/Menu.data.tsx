import {HomeOutlined} from '@mui/icons-material';

const navigationItems = [
  {id: 1, name: <HomeOutlined sx={{fontSize: 25, color: 'rgb(232, 98, 43)'}} />, url: '/'},
  {id: 2, name: 'Doświadczenie', url: '/experience'},
  {id: 3, name: 'O mnie', url: '/about'},
  {id: 4, name: 'Kontakt', url: '/contact'}];

export {navigationItems}
