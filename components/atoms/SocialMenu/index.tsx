import {GitHub, LinkedIn, MailOutline} from '@mui/icons-material';
import Link from 'next/link';
import SocialMenuStyled from './SocialMenu.styled';
import {newTabLink, socialMediaLinks} from './SocialMenu.data';

interface Props {
  size: 'large' | 'medium' | 'small';
}

const SocialMenu = (props: Props): JSX.Element => (
  <SocialMenuStyled>
    <Link href={socialMediaLinks.github}>
      <a {...newTabLink}><GitHub fontSize={props.size} /></a>
    </Link>
    <Link href={socialMediaLinks.linkedin}>
      <a {...newTabLink}><LinkedIn fontSize={props.size} /></a>
    </Link>
    <Link href={socialMediaLinks.mail}>
      <a><MailOutline fontSize={props.size} /></a>
    </Link>
  </SocialMenuStyled>
);

export default SocialMenu;
