import Grid2 from '@mui/material/Unstable_Grid2';
import PageTemplate from '../../components/templates/Page/Page'; // Grid version 2

const ExperiencePage = () => {
  return (
    <PageTemplate title={"Doświadczenie"}>
      <Grid2 container spacing={{xs: 2, md: 3}} columnSpacing={{xs: 1, sm: 2, md: 3}} columns={{xs: 12, sm: 6, md:14}}>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/pgs.png" alt="PGS Software" />
          <h6>Senior Frontend Developer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/avra.png" alt="Avra" />
          <h6>Front-end Developer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/makrologic.png" alt="Makrologic" />
          <h6>Web Developer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/stabsoft.png" alt="Stabsoft" />
          <h6>Web Developer / Freelancer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/green-line.png" alt="Green Line" />
          <h6>Junior Web Developer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/funmedia.png" alt="Funmedia" />
          <h6>Junior Web Developer</h6>
        </Grid2>
        <Grid2 xs={2} sm={4} md={4} style={{textAlign: "center"}}>
          <img src="/images/companies/credit-suisse.png" alt="Credit Suisse" />
          <h6>Junior Web Developer/Publisher</h6>
        </Grid2>
      </Grid2>
    </PageTemplate>
  );
}

export default ExperiencePage;
