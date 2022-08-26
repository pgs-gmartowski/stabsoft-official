import {FC} from 'react';
import Particles from 'react-tsparticles';
import {options, particlesInit} from '../../atoms/Particles/';
import {PageContent, PageMain} from './Page.styled';
import {navigationItems} from '../../molecules/Menu/Menu.data';
import CustomMenu from '../../molecules/Menu';
import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer/Footer';

interface Props {
  children?: JSX.Element;
  title: string;
}

const PageTemplate: FC<Props> = (props: Props) => (
  <PageMain>
    <CustomMenu items={navigationItems} />
    <Header title={props.title}>
      {/*<Particles init={particlesInit} options={{...options, fullScreen: false}} height="400px" />*/}
    </Header>
    <PageContent>{props.children}</PageContent>
    <Footer />
  </PageMain>
);

export default PageTemplate;
