import {HeaderStyled} from './Header.styled';

interface Props {
  children: JSX.Element;
  title: string;
}

const Header = (props: Props) => {
  const {children, title} = props;

  return (
    <HeaderStyled>
      <h2>
        {title}
      </h2>
      {children}

    </HeaderStyled>
  );
}

export default Header;
