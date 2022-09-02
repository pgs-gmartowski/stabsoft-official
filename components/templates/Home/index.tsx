import {FC} from 'react';
import Particles from 'react-tsparticles';
import {ThemeProvider} from 'styled-components';
import {options, particlesInit} from '../../molecules/Particles';
import theme, {GlobalStyle} from '../../../styles/theme';
import {IOptions} from 'tsparticles-engine';

interface Props {
  children: JSX.Element
}

const HomeTemplate: FC<Props> = (props: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Particles init={particlesInit} options={options as IOptions} />
      {props.children}
  </ThemeProvider>
);

export default HomeTemplate;
