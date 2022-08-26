import Grid2 from '@mui/material/Unstable_Grid2';
import {Facebook, GitHub, LinkedIn, MailOutline} from '@mui/icons-material';
import PageTemplate from '../../components/templates/Page/Page';

const AboutPage = () => {
  return (

    <PageTemplate title={'Kontakt'}>
      <Grid2 container>
        <Grid2 xs={12} style={{textAlign: 'center'}}>
          <img src="/images/me.jpg" alt="Grzegorz Martowski" style={{maxWidth:'300px'}} />
          <p>Programowaniem zainteresowałem się w 2011 roku, jeszcze na studiach. Zaczynałem jako web publisher w dużej korporacji,później w kilku mniejszych firmach jako Web Developer.
          Pracowałem zarówno przy aplikcjach biznesowych opartych o frameworki Zend, Symfony i Laravel, jak i wykonywałem przy współpracy z grafikami statyczne strony oparte o CMSem Wordpress.
          Od 4 lat na B2B, a od 3 jako Front-end Developer.
          Po początkowych przygodach z jQuery i AngularJS, ukierunkowałem się na pracę z frameworkiem ReactJS - albo inaczej; jestem na etapie fascynacji tym narzędziem
          Programowanie to dla mnie nie tylko praca, ale też i świetna zabawa ! Po zaczęciu przygody z Reactem uważem, że kodzenie może być naprawdę przyjemne.
            W wolnym czasie oddaje się innej pasji - fotografii, bardzo lubię też piłkę nożną, w którą regularnie gram już od ponad 20 lat :)</p>
        </Grid2>
      </Grid2>
    </PageTemplate>
  );
}

export default AboutPage;
