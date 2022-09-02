import {HeadingStyled} from './Heading.styled';

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  children?: JSX.Element;
  size: HeadingSize;
  title: string;
}

const Heading = (props: Props): JSX.Element => {
  const {children, title, size} = props;

  const setSize = (size: HeadingSize): JSX.Element => {
    switch (size) {
      case 'h1':
        return <h1>{title}</h1>
      case 'h2':
        return <h2>{title}</h2>
      case 'h3':
        return <h3>{title}</h3>
      case 'h4':
        return <h4>{title}</h4>
      case 'h5':
        return <h5>{title}</h5>
      case 'h6':
        return <h6>{title}</h6>
      default:
        return <h1>{title}</h1>
    }
  }

  return (
    <HeadingStyled>
      {setSize(size)}
      {children}
    </HeadingStyled>
  );
}

export default Heading;
