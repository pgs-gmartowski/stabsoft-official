import HomeTemplate from '../../components/templates/Home';
import SocialMenu from '../../components/atoms/SocialMenu';
import Footer from '../../components/atoms/Footer';
import Heading from '../../components/atoms/Heading';
import HomePageStyled from './home.styled';

const HomePage = (): JSX.Element => (
  <HomeTemplate>
    <HomePageStyled>
      <figure>
        <picture>
          <source srcSet={'/images/stabsoft.png'} type={'image/png'} />
          <img src={'/images/stabsoft.png'} alt={'StabSoft Logo'} />
        </picture>
      </figure>
      <Heading size={'h2'} title={'#frontenddeveloper, #reactjsdeveloper, #freelancer'} />
      <SocialMenu size={'large'} />
      <Footer />
    </HomePageStyled>
  </HomeTemplate>
);

export default HomePage;
