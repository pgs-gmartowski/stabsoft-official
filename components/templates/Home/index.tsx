import {FC, useEffect, useState} from 'react';
import Particles from 'react-tsparticles';
import {ThemeProvider} from 'styled-components';
import {options, particlesInit} from '../../molecules/Particles';
import theme, {GlobalStyle} from '../../../styles/theme';
import {IOptions} from 'tsparticles-engine';
import Loader from '../../atoms/Loader';

interface Props {
  children: JSX.Element
}

const HomeTemplate: FC<Props> = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading && <Loader />}
      <Particles init={particlesInit} options={options as IOptions} />
      {props.children}
    </ThemeProvider>
  );
}


export default HomeTemplate;
