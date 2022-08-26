import FooterStyled from './Footer.styled';
import Grid2 from '@mui/material/Unstable_Grid2';
import {Facebook, GitHub, LinkedIn} from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterStyled>
      <Grid2 container>
        <Grid2 xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Copyright &copy; Stabsoft 2022
        </Grid2>
        <Grid2 xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Facebook color="secondary" sx={{fontSize: 40, color: '#fff'}} />
          <GitHub color="secondary" sx={{fontSize: 40, color: '#fff'}} />
          <LinkedIn color="secondary" sx={{fontSize: 40, color: '#fff'}} />
        </Grid2>
      </Grid2>

    </FooterStyled>
  )
}

export default Footer;
