import Link from 'next/link'
import MenuStyled from './Menu.styled';
import {MenuItem, Typography} from '@mui/material';

interface Props {
  items: {id: number, name: string, url: string}[]
}

const CustomMenu = (props: Props) => (
  <MenuStyled>
    {
      props.items.map((item) => (
        <Link href={item.url} key={item.id}>
          <a>{item.name}</a>
        </Link>
      ))
    }
  </MenuStyled>
);

export default CustomMenu;
