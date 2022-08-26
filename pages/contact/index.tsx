import Grid2 from '@mui/material/Unstable_Grid2';
import PageTemplate from '../../components/templates/Page/Page';
import {Facebook, GitHub, LinkedIn, MailOutline} from '@mui/icons-material';

const ContactPage = () => {
  return (
    <PageTemplate title={'Kontakt'}>
      <Grid2 container>
        <Grid2 xs={12} style={{textAlign: 'center'}}>
          <img src="/images/companies/stabsoft.png" alt="Stabsoft" />
          <p>Grzegorz Martowski</p>
          <p>NIP: 894-285-98-21</p>
          <p>REGON: 022432082</p>
          <div><MailOutline /><a href="mailto:kontakt@stabsoft.pl">kontakt@stabsoft.pl</a></div>

        </Grid2>
      </Grid2>
    </PageTemplate>
  );
}

export default ContactPage;
