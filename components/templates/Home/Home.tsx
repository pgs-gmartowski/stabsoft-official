import {FC} from 'react';
import Particles from 'react-tsparticles';
import {options, particlesInit} from '../../atoms/Particles';
import HomePageStyled from '../../../pages/home/index.styled';
import CustomMenu from '../../molecules/Menu';
import {navigationItems} from '../../molecules/Menu/Menu.data';

interface Props {
  children: JSX.Element
}

const HomeTemplate: FC<Props> = (props: Props) => {

  return (
    <>
      <Particles id="tsparticles" init={particlesInit} options={options} />
      <HomePageStyled>
        <CustomMenu items={navigationItems} />
        {props.children}
      </HomePageStyled>
    </>
  )
}

export default HomeTemplate;
